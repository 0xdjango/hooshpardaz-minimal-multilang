import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fa' | 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: Direction;
  t: (key: string) => string;
}

const translations = {
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.services': 'خدمات',
    'nav.about': 'درباره ما',
    'nav.portfolio': 'نمونه کارها',
    'nav.contact': 'تماس با ما',
    
    // Hero
    'hero.title': 'خدمات فناوری حرفه‌ای',
    'hero.subtitle': 'راهکارهای نوین برای کسب‌وکار شما',
    'hero.description': 'هوش پرداز با ارائه خدمات مهندسی نرم‌افزار، امنیت سایبری، DevOps و هوش مصنوعی، همراه قابل اعتماد کسب‌وکار شماست',
    'hero.cta.contact': 'تماس با ما',
    'hero.cta.services': 'خدمات ما',
    
    // Services
    'services.title': 'خدمات ما',
    'services.subtitle': 'راهکارهای جامع برای نیازهای فناوری شما',
    'services.software.title': 'مهندسی نرم‌افزار',
    'services.software.desc': 'طراحی و توسعه نرم‌افزارهای مدرن با بهترین استانداردهای روز دنیا',
    'services.qa.title': 'تضمین کیفیت کد',
    'services.qa.desc': 'Code Audit و Quality Assurance برای تضمین امنیت و عملکرد نرم‌افزار',
    'services.devops.title': 'زیرساخت ابری و DevOps',
    'services.devops.desc': 'Cloud Infrastructure و DevOps Automation برای راه‌اندازی سریع و امن',
    'services.security.title': 'امنیت سایبری',
    'services.security.desc': 'Cybersecurity و Penetration Testing برای شناسایی و رفع آسیب‌پذیری‌ها',
    'services.ai.title': 'هوش مصنوعی و تحلیل داده',
    'services.ai.desc': 'AI Modeling و Data Analytics برای بهره‌برداری هوشمند از داده‌ها',
    'services.learnMore': 'اطلاعات بیشتر',
    
    // About
    'about.title': 'درباره هوش پرداز',
    'about.mission.title': 'ماموریت ما',
    'about.mission.desc': 'ارائه خدمات فناوری با بالاترین کیفیت و ایجاد ارزش پایدار برای مشتریان',
    'about.vision.title': 'چشم‌انداز ما',
    'about.vision.desc': 'پیشرو در ارائه راهکارهای نوآورانه فناوری در منطقه خاورمیانه',
    'about.values.title': 'ارزش‌های ما',
    'about.values.desc': 'تعهد، نوآوری، کیفیت و اعتماد',
    
    // Contact
    'contact.title': 'تماس با ما',
    'contact.subtitle': 'آماده همکاری با شما هستیم',
    'contact.form.name': 'نام و نام خانوادگی',
    'contact.form.email': 'ایمیل',
    'contact.form.message': 'پیام شما',
    'contact.form.send': 'ارسال پیام',
    'contact.info': 'اطلاعات تماس',
    'contact.general': 'تماس عمومی',
    'contact.sales': 'واحد فروش',
    
    // Footer
    'footer.rights': '© ۲۰۲۵ هوش پرداز. تمامی حقوق محفوظ است.',
    'footer.company': 'شرکت',
    'footer.followUs': 'ما را دنبال کنید',
    
    // Portfolio
    'portfolio.subtitle': 'نمونه‌ای از پروژه‌های موفق ما',
    'portfolio.projects.banking.title': 'پلتفرم بانکی آنلاین',
    'portfolio.projects.banking.desc': 'توسعه پلتفرم بانکداری دیجیتال با امنیت بالا',
    'portfolio.projects.cloud.title': 'سیستم مدیریت زیرساخت ابری',
    'portfolio.projects.cloud.desc': 'راه‌اندازی و مدیریت زیرساخت ابری مقیاس‌پذیر',
    'portfolio.projects.ai.title': 'پلتفرم تحلیل داده با AI',
    'portfolio.projects.ai.desc': 'سیستم تحلیل هوشمند داده با یادگیری ماشین',
    'portfolio.projects.security.title': 'تست نفوذ و امنیت شبکه',
    'portfolio.projects.security.desc': 'ارزیابی امنیت و تست نفوذ برای شرکت مالی',
    'portfolio.projects.mobile.title': 'اپلیکیشن موبایل فروشگاهی',
    'portfolio.projects.mobile.desc': 'اپلیکیشن فروشگاه آنلاین با پشتیبانی از پرداخت',
    'portfolio.projects.cicd.title': 'سیستم CI/CD خودکار',
    'portfolio.projects.cicd.desc': 'پیاده‌سازی خط لوله CI/CD برای استقرار خودکار',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.portfolio': 'معرض الأعمال',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'خدمات تقنية احترافية',
    'hero.subtitle': 'حلول مبتكرة لأعمالك',
    'hero.description': 'هوش برداز شريكك الموثوق في هندسة البرمجيات، الأمن السيبراني، DevOps والذكاء الاصطناعي',
    'hero.cta.contact': 'اتصل بنا',
    'hero.cta.services': 'خدماتنا',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة لاحتياجاتك التقنية',
    'services.software.title': 'هندسة البرمجيات',
    'services.software.desc': 'تصميم وتطوير برمجيات حديثة بأفضل المعايير العالمية',
    'services.qa.title': 'ضمان جودة الكود',
    'services.qa.desc': 'مراجعة الكود وضمان الجودة لضمان الأمان والأداء',
    'services.devops.title': 'البنية السحابية و DevOps',
    'services.devops.desc': 'البنية التحتية السحابية وأتمتة DevOps للنشر السريع والآمن',
    'services.security.title': 'الأمن السيبراني',
    'services.security.desc': 'الأمن السيبراني واختبار الاختراق لتحديد وإصلاح الثغرات',
    'services.ai.title': 'الذكاء الاصطناعي وتحليل البيانات',
    'services.ai.desc': 'نمذجة الذكاء الاصطناعي وتحليل البيانات للاستفادة الذكية من البيانات',
    'services.learnMore': 'معرفة المزيد',
    
    // About
    'about.title': 'عن هوش برداز',
    'about.mission.title': 'مهمتنا',
    'about.mission.desc': 'تقديم خدمات تقنية بأعلى جودة وخلق قيمة مستدامة للعملاء',
    'about.vision.title': 'رؤيتنا',
    'about.vision.desc': 'الريادة في تقديم حلول تقنية مبتكرة في منطقة الشرق الأوسط',
    'about.values.title': 'قيمنا',
    'about.values.desc': 'الالتزام، الابتكار، الجودة والثقة',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحن جاهزون للعمل معك',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.send': 'إرسال الرسالة',
    'contact.info': 'معلومات الاتصال',
    'contact.general': 'اتصال عام',
    'contact.sales': 'قسم المبيعات',
    
    // Footer
    'footer.rights': '© ٢٠٢٥ هوش برداز. جميع الحقوق محفوظة.',
    'footer.company': 'الشركة',
    'footer.followUs': 'تابعنا',
    
    // Portfolio
    'portfolio.subtitle': 'أمثلة من مشاريعنا الناجحة',
    'portfolio.projects.banking.title': 'منصة الخدمات المصرفية عبر الإنترنت',
    'portfolio.projects.banking.desc': 'تطوير منصة مصرفية رقمية عالية الأمان',
    'portfolio.projects.cloud.title': 'نظام إدارة البنية التحتية السحابية',
    'portfolio.projects.cloud.desc': 'إعداد وإدارة بنية تحتية سحابية قابلة للتوسع',
    'portfolio.projects.ai.title': 'منصة تحليل البيانات بالذكاء الاصطناعي',
    'portfolio.projects.ai.desc': 'نظام تحليل ذكي للبيانات مع التعلم الآلي',
    'portfolio.projects.security.title': 'اختبار الاختراق وأمن الشبكات',
    'portfolio.projects.security.desc': 'تقييم الأمن واختبار الاختراق لشركة مالية',
    'portfolio.projects.mobile.title': 'تطبيق جوال للتجارة الإلكترونية',
    'portfolio.projects.mobile.desc': 'تطبيق متجر إلكتروني مع دعم الدفع',
    'portfolio.projects.cicd.title': 'نظام CI/CD التلقائي',
    'portfolio.projects.cicd.desc': 'تنفيذ خط أنابيب CI/CD للنشر التلقائي',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Professional Technology Services',
    'hero.subtitle': 'Innovative Solutions for Your Business',
    'hero.description': 'Hoosh Pardaz is your trusted partner in software engineering, cybersecurity, DevOps, and artificial intelligence',
    'hero.cta.contact': 'Contact Us',
    'hero.cta.services': 'Our Services',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Solutions for Your Technology Needs',
    'services.software.title': 'Software Engineering',
    'services.software.desc': 'Design and development of modern software with the best global standards',
    'services.qa.title': 'Code Quality Assurance',
    'services.qa.desc': 'Code Audit and Quality Assurance to ensure security and performance',
    'services.devops.title': 'Cloud Infrastructure & DevOps',
    'services.devops.desc': 'Cloud Infrastructure and DevOps Automation for fast and secure deployment',
    'services.security.title': 'Cybersecurity',
    'services.security.desc': 'Cybersecurity and Penetration Testing to identify and fix vulnerabilities',
    'services.ai.title': 'AI & Data Analytics',
    'services.ai.desc': 'AI Modeling and Data Analytics for intelligent data utilization',
    'services.learnMore': 'Learn More',
    
    // About
    'about.title': 'About Hoosh Pardaz',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Delivering technology services with the highest quality and creating sustainable value for clients',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'Leading in providing innovative technology solutions in the Middle East',
    'about.values.title': 'Our Values',
    'about.values.desc': 'Commitment, Innovation, Quality, and Trust',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are ready to work with you',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.general': 'General Contact',
    'contact.sales': 'Sales Department',
    
    // Footer
    'footer.rights': '© 2025 Hoosh Pardaz. All rights reserved.',
    'footer.company': 'Company',
    'footer.followUs': 'Follow Us',
    
    // Portfolio
    'portfolio.subtitle': 'Examples of Our Successful Projects',
    'portfolio.projects.banking.title': 'Online Banking Platform',
    'portfolio.projects.banking.desc': 'Development of a high-security digital banking platform',
    'portfolio.projects.cloud.title': 'Cloud Infrastructure Management',
    'portfolio.projects.cloud.desc': 'Setup and management of scalable cloud infrastructure',
    'portfolio.projects.ai.title': 'AI-Powered Data Analytics',
    'portfolio.projects.ai.desc': 'Intelligent data analysis system with machine learning',
    'portfolio.projects.security.title': 'Network Security Assessment',
    'portfolio.projects.security.desc': 'Security assessment and penetration testing for financial company',
    'portfolio.projects.mobile.title': 'E-commerce Mobile App',
    'portfolio.projects.mobile.desc': 'Online store application with payment support',
    'portfolio.projects.cicd.title': 'Automated CI/CD Pipeline',
    'portfolio.projects.cicd.desc': 'CI/CD pipeline implementation for automated deployment',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('fa');
  const direction: Direction = language === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fa] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
