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
