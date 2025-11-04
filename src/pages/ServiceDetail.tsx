import { useParams, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Code2, 
  ShieldCheck, 
  Cloud, 
  Shield, 
  Brain,
  CheckCircle2,
  Target,
  Users,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const serviceDetails = {
  software: {
    icon: Code2,
    titleKey: 'services.software.title',
    descKey: 'services.software.desc',
    sections: {
      fa: {
        overview: 'ما در هوش پرداز با استفاده از جدیدترین فناوری‌ها و بهترین شیوه‌های توسعه نرم‌افزار، راهکارهای مقیاس‌پذیر و امن برای کسب‌وکار شما ارائه می‌دهیم. تیم ما از متخصصان باتجربه، نرم‌افزارهایی طراحی و توسعه می‌دهد که نه‌تنها نیازهای فعلی شما را برآورده می‌کند، بلکه برای رشد آینده کسب‌وکارتان نیز آماده است.',
        features: [
          'طراحی و توسعه اپلیکیشن‌های وب مدرن با React، Vue و Angular',
          'توسعه اپلیکیشن‌های موبایل کراس‌پلتفرم با React Native و Flutter',
          'طراحی معماری نرم‌افزار مقیاس‌پذیر با Microservices',
          'توسعه API‌های RESTful و GraphQL',
          'پیاده‌سازی Progressive Web Apps (PWA)',
          'توسعه نرم‌افزارهای سفارشی SaaS',
        ],
        technologies: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'TypeScript'],
        benefits: [
          'کاهش هزینه‌های عملیاتی با اتوماسیون فرآیندها',
          'افزایش بهره‌وری تیم با ابزارهای مدرن',
          'مقیاس‌پذیری بالا برای رشد کسب‌وکار',
          'امنیت در تمام لایه‌های نرم‌افزار',
        ],
      },
      ar: {
        overview: 'في هوش برداز، نستخدم أحدث التقنيات وأفضل ممارسات تطوير البرمجيات لتقديم حلول قابلة للتوسع وآمنة لأعمالك. يصمم فريقنا من المتخصصين ذوي الخبرة برامج لا تلبي احتياجاتك الحالية فحسب، بل تستعد أيضًا للنمو المستقبلي لعملك.',
        features: [
          'تصميم وتطوير تطبيقات ويب حديثة مع React و Vue و Angular',
          'تطوير تطبيقات الجوال متعددة المنصات مع React Native و Flutter',
          'تصميم معماري برمجيات قابلة للتوسع مع Microservices',
          'تطوير واجهات برمجة RESTful و GraphQL',
          'تنفيذ تطبيقات الويب التقدمية (PWA)',
          'تطوير برمجيات SaaS المخصصة',
        ],
        technologies: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'TypeScript'],
        benefits: [
          'خفض التكاليف التشغيلية من خلال أتمتة العمليات',
          'زيادة إنتاجية الفريق بالأدوات الحديثة',
          'قابلية توسع عالية لنمو الأعمال',
          'الأمن في جميع طبقات البرمجيات',
        ],
      },
      en: {
        overview: 'At Hoosh Pardaz, we use the latest technologies and best software development practices to deliver scalable and secure solutions for your business. Our team of experienced professionals designs and develops software that not only meets your current needs but is also prepared for your business\'s future growth.',
        features: [
          'Design and development of modern web applications with React, Vue, and Angular',
          'Cross-platform mobile app development with React Native and Flutter',
          'Scalable software architecture design with Microservices',
          'RESTful and GraphQL API development',
          'Progressive Web Apps (PWA) implementation',
          'Custom SaaS software development',
        ],
        technologies: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'TypeScript'],
        benefits: [
          'Reduce operational costs through process automation',
          'Increase team productivity with modern tools',
          'High scalability for business growth',
          'Security across all software layers',
        ],
      },
    },
  },
  qa: {
    icon: ShieldCheck,
    titleKey: 'services.qa.title',
    descKey: 'services.qa.desc',
    sections: {
      fa: {
        overview: 'کیفیت کد، پایه و اساس یک نرم‌افزار موفق است. تیم ما با انجام Code Audit و Quality Assurance جامع، از امنیت، عملکرد و پایداری نرم‌افزار شما اطمینان می‌دهد. ما از ابزارهای تحلیل استاتیک و داینامیک برای شناسایی نقاط ضعف و بهبود کیفیت کلی پروژه استفاده می‌کنیم.',
        features: [
          'Code Review دقیق و حرفه‌ای',
          'تحلیل استاتیک کد با ابزارهای پیشرفته (SonarQube، ESLint)',
          'تست یونیت، یکپارچگی و End-to-End',
          'Performance Testing و بهینه‌سازی',
          'بررسی الگوهای طراحی و معماری',
          'شناسایی Code Smells و Technical Debt',
        ],
        technologies: ['Jest', 'Cypress', 'Selenium', 'SonarQube', 'JUnit', 'PyTest', 'K6', 'JMeter'],
        benefits: [
          'کاهش باگ‌ها و مشکلات production',
          'بهبود maintainability و خوانایی کد',
          'افزایش سرعت توسعه در بلندمدت',
          'اطمینان از رعایت استانداردها و بهترین شیوه‌ها',
        ],
      },
      ar: {
        overview: 'جودة الكود هي أساس البرمجيات الناجحة. يضمن فريقنا من خلال إجراء مراجعة الكود وضمان الجودة الشامل أمان وأداء واستقرار برنامجك. نستخدم أدوات التحليل الثابتة والديناميكية لتحديد نقاط الضعف وتحسين الجودة الإجمالية للمشروع.',
        features: [
          'مراجعة كود دقيقة واحترافية',
          'تحليل ثابت للكود بأدوات متقدمة (SonarQube، ESLint)',
          'اختبار الوحدة والتكامل والشامل',
          'اختبار الأداء والتحسين',
          'مراجعة أنماط التصميم والمعمارية',
          'تحديد روائح الكود والديون التقنية',
        ],
        technologies: ['Jest', 'Cypress', 'Selenium', 'SonarQube', 'JUnit', 'PyTest', 'K6', 'JMeter'],
        benefits: [
          'تقليل الأخطاء ومشاكل الإنتاج',
          'تحسين قابلية الصيانة وسهولة قراءة الكود',
          'زيادة سرعة التطوير على المدى الطويل',
          'ضمان الامتثال للمعايير وأفضل الممارسات',
        ],
      },
      en: {
        overview: 'Code quality is the foundation of successful software. Our team ensures the security, performance, and stability of your software through comprehensive Code Audit and Quality Assurance. We use static and dynamic analysis tools to identify weaknesses and improve the overall quality of the project.',
        features: [
          'Thorough and professional Code Review',
          'Static code analysis with advanced tools (SonarQube, ESLint)',
          'Unit, integration, and End-to-End testing',
          'Performance Testing and optimization',
          'Design patterns and architecture review',
          'Identification of Code Smells and Technical Debt',
        ],
        technologies: ['Jest', 'Cypress', 'Selenium', 'SonarQube', 'JUnit', 'PyTest', 'K6', 'JMeter'],
        benefits: [
          'Reduce bugs and production issues',
          'Improve maintainability and code readability',
          'Increase development speed in the long term',
          'Ensure compliance with standards and best practices',
        ],
      },
    },
  },
  devops: {
    icon: Cloud,
    titleKey: 'services.devops.title',
    descKey: 'services.devops.desc',
    sections: {
      fa: {
        overview: 'زیرساخت ابری و DevOps مدرن، کلید موفقیت در دنیای دیجیتال امروز است. تیم ما با پیاده‌سازی بهترین شیوه‌های DevOps و مدیریت زیرساخت‌های ابری، سرعت، امنیت و پایداری سیستم‌های شما را تضمین می‌کند. ما فرآیند توسعه تا استقرار را کاملاً خودکار می‌کنیم تا تیم شما بتواند تمرکز خود را روی نوآوری قرار دهد.',
        features: [
          'راه‌اندازی و مدیریت Kubernetes و Docker',
          'پیاده‌سازی CI/CD Pipeline با Jenkins، GitLab CI، GitHub Actions',
          'Infrastructure as Code با Terraform و Ansible',
          'مانیتورینگ و Logging با Prometheus، Grafana، ELK Stack',
          'مدیریت Cloud Services (AWS، Azure، Google Cloud)',
          'Auto-scaling و Load Balancing',
        ],
        technologies: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins', 'AWS', 'Prometheus', 'Grafana'],
        benefits: [
          'کاهش 80% زمان استقرار با اتوماسیون',
          'افزایش uptime به بالای 99.9%',
          'کاهش هزینه‌های زیرساخت با بهینه‌سازی',
          'مقیاس‌پذیری خودکار بر اساس نیاز',
        ],
      },
      ar: {
        overview: 'البنية التحتية السحابية و DevOps الحديثة هي مفتاح النجاح في العالم الرقمي اليوم. يضمن فريقنا من خلال تنفيذ أفضل ممارسات DevOps وإدارة البنى التحتية السحابية سرعة وأمان واستقرار أنظمتك. نقوم بأتمتة عملية التطوير إلى النشر بالكامل حتى يتمكن فريقك من التركيز على الابتكار.',
        features: [
          'إعداد وإدارة Kubernetes و Docker',
          'تنفيذ خط أنابيب CI/CD مع Jenkins و GitLab CI و GitHub Actions',
          'البنية التحتية كرمز مع Terraform و Ansible',
          'المراقبة والتسجيل مع Prometheus و Grafana و ELK Stack',
          'إدارة خدمات السحابة (AWS، Azure، Google Cloud)',
          'التوسع التلقائي وموازنة الحمل',
        ],
        technologies: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins', 'AWS', 'Prometheus', 'Grafana'],
        benefits: [
          'تقليل وقت النشر بنسبة 80٪ مع الأتمتة',
          'زيادة وقت التشغيل إلى أكثر من 99.9٪',
          'خفض تكاليف البنية التحتية من خلال التحسين',
          'قابلية التوسع التلقائي حسب الحاجة',
        ],
      },
      en: {
        overview: 'Modern cloud infrastructure and DevOps are the keys to success in today\'s digital world. Our team ensures the speed, security, and stability of your systems by implementing best DevOps practices and managing cloud infrastructures. We fully automate the development-to-deployment process so your team can focus on innovation.',
        features: [
          'Setup and management of Kubernetes and Docker',
          'CI/CD Pipeline implementation with Jenkins, GitLab CI, GitHub Actions',
          'Infrastructure as Code with Terraform and Ansible',
          'Monitoring and Logging with Prometheus, Grafana, ELK Stack',
          'Cloud Services management (AWS, Azure, Google Cloud)',
          'Auto-scaling and Load Balancing',
        ],
        technologies: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins', 'AWS', 'Prometheus', 'Grafana'],
        benefits: [
          'Reduce deployment time by 80% with automation',
          'Increase uptime to above 99.9%',
          'Reduce infrastructure costs through optimization',
          'Automatic scalability based on demand',
        ],
      },
    },
  },
  security: {
    icon: Shield,
    titleKey: 'services.security.title',
    descKey: 'services.security.desc',
    sections: {
      fa: {
        overview: 'امنیت سایبری در دنیای امروز یک ضرورت است، نه یک انتخاب. تیم امنیتی ما با انجام تست‌های نفوذ حرفه‌ای، بررسی آسیب‌پذیری‌ها و پیاده‌سازی راهکارهای امنیتی پیشرفته، از دارایی‌های دیجیتال شما در برابر تهدیدات سایبری محافظت می‌کند. ما از متدولوژی‌های معتبر بین‌المللی مانند OWASP و NIST استفاده می‌کنیم.',
        features: [
          'Penetration Testing کامل وب اپلیکیشن‌ها و API‌ها',
          'بررسی آسیب‌پذیری‌های OWASP Top 10',
          'Security Code Review و تحلیل استاتیک',
          'Social Engineering Testing',
          'پیاده‌سازی WAF و IDS/IPS',
          'Red Team و Blue Team Exercises',
        ],
        technologies: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP ZAP', 'Kali Linux', 'Nessus'],
        benefits: [
          'شناسایی و رفع آسیب‌پذیری‌ها قبل از سوءاستفاده',
          'حفظ اعتبار و اعتماد مشتریان',
          'رعایت استانداردهای بین‌المللی امنیتی',
          'کاهش ریسک حملات سایبری',
        ],
      },
      ar: {
        overview: 'الأمن السيبراني في عالم اليوم ضرورة وليس خيارًا. يحمي فريق الأمن لدينا أصولك الرقمية من التهديدات السيبرانية من خلال إجراء اختبارات اختراق احترافية ومراجعة الثغرات الأمنية وتنفيذ حلول أمنية متقدمة. نستخدم منهجيات دولية موثوقة مثل OWASP و NIST.',
        features: [
          'اختبار اختراق كامل لتطبيقات الويب وواجهات برمجة التطبيقات',
          'مراجعة ثغرات OWASP Top 10',
          'مراجعة الكود الأمني والتحليل الثابت',
          'اختبار الهندسة الاجتماعية',
          'تنفيذ WAF و IDS/IPS',
          'تمارين الفريق الأحمر والأزرق',
        ],
        technologies: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP ZAP', 'Kali Linux', 'Nessus'],
        benefits: [
          'تحديد وإصلاح الثغرات قبل استغلالها',
          'الحفاظ على سمعة وثقة العملاء',
          'الامتثال للمعايير الأمنية الدولية',
          'تقليل مخاطر الهجمات السيبرانية',
        ],
      },
      en: {
        overview: 'Cybersecurity in today\'s world is a necessity, not a choice. Our security team protects your digital assets from cyber threats by conducting professional penetration tests, vulnerability assessments, and implementing advanced security solutions. We use internationally recognized methodologies such as OWASP and NIST.',
        features: [
          'Complete Penetration Testing of web applications and APIs',
          'OWASP Top 10 vulnerability assessment',
          'Security Code Review and static analysis',
          'Social Engineering Testing',
          'WAF and IDS/IPS implementation',
          'Red Team and Blue Team Exercises',
        ],
        technologies: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP ZAP', 'Kali Linux', 'Nessus'],
        benefits: [
          'Identify and fix vulnerabilities before exploitation',
          'Maintain reputation and customer trust',
          'Comply with international security standards',
          'Reduce cyber attack risks',
        ],
      },
    },
  },
  ai: {
    icon: Brain,
    titleKey: 'services.ai.title',
    descKey: 'services.ai.desc',
    sections: {
      fa: {
        overview: 'هوش مصنوعی و تحلیل داده، آینده کسب‌وکارهاست. تیم AI ما با استفاده از جدیدترین تکنیک‌های Machine Learning و Deep Learning، مدل‌های هوشمندی طراحی می‌کند که به شما کمک می‌کند تا از داده‌های خود بهره‌برداری بهینه داشته باشید، تصمیمات بهتری بگیرید و فرآیندها را خودکار کنید.',
        features: [
          'طراحی و توسعه مدل‌های Machine Learning سفارشی',
          'پردازش زبان طبیعی (NLP) و تحلیل متن',
          'Computer Vision و تشخیص تصویر',
          'سیستم‌های توصیه‌گر هوشمند',
          'Time Series Analysis و پیش‌بینی',
          'MLOps و استقرار مدل‌های AI در production',
        ],
        technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Apache Spark', 'Hugging Face', 'OpenAI'],
        benefits: [
          'اتوماسیون فرآیندهای پیچیده با AI',
          'بهبود دقت تصمیم‌گیری با داده',
          'کشف الگوها و بینش‌های پنهان',
          'کاهش هزینه‌ها و افزایش درآمد',
        ],
      },
      ar: {
        overview: 'الذكاء الاصطناعي وتحليل البيانات هو مستقبل الأعمال. يصمم فريق الذكاء الاصطناعي لدينا نماذج ذكية باستخدام أحدث تقنيات التعلم الآلي والتعلم العميق التي تساعدك على الاستفادة المثلى من بياناتك واتخاذ قرارات أفضل وأتمتة العمليات.',
        features: [
          'تصميم وتطوير نماذج التعلم الآلي المخصصة',
          'معالجة اللغة الطبيعية (NLP) وتحليل النصوص',
          'رؤية الكمبيوتر والتعرف على الصور',
          'أنظمة التوصية الذكية',
          'تحليل السلاسل الزمنية والتنبؤ',
          'MLOps ونشر نماذج الذكاء الاصطناعي في الإنتاج',
        ],
        technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Apache Spark', 'Hugging Face', 'OpenAI'],
        benefits: [
          'أتمتة العمليات المعقدة بالذكاء الاصطناعي',
          'تحسين دقة اتخاذ القرار بالبيانات',
          'اكتشاف الأنماط والرؤى المخفية',
          'خفض التكاليف وزيادة الإيرادات',
        ],
      },
      en: {
        overview: 'Artificial intelligence and data analytics are the future of business. Our AI team designs intelligent models using the latest Machine Learning and Deep Learning techniques that help you optimize data utilization, make better decisions, and automate processes.',
        features: [
          'Design and development of custom Machine Learning models',
          'Natural Language Processing (NLP) and text analysis',
          'Computer Vision and image recognition',
          'Intelligent recommendation systems',
          'Time Series Analysis and forecasting',
          'MLOps and AI model deployment in production',
        ],
        technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Apache Spark', 'Hugging Face', 'OpenAI'],
        benefits: [
          'Automate complex processes with AI',
          'Improve decision-making accuracy with data',
          'Discover hidden patterns and insights',
          'Reduce costs and increase revenue',
        ],
      },
    },
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();

  if (!slug || !serviceDetails[slug as keyof typeof serviceDetails]) {
    return <Navigate to="/services" replace />;
  }

  const service = serviceDetails[slug as keyof typeof serviceDetails];
  const Icon = service.icon;
  const content = service.sections[language];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-hero shadow-soft mb-4">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t(service.titleKey)}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t(service.descKey)}
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="gradient-card border-border">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed">
                    {content.overview}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-primary mb-2">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">
                    {language === 'fa' ? 'ویژگی‌های خدمات' : language === 'ar' ? 'مميزات الخدمة' : 'Service Features'}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {language === 'fa' ? 'آنچه ما ارائه می‌دهیم' : language === 'ar' ? 'ما نقدمه' : 'What We Offer'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.features.map((feature, index) => (
                  <Card key={index} className="border-border hover:shadow-soft transition-smooth">
                    <CardContent className="p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-primary mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">
                    {language === 'fa' ? 'فناوری‌ها' : language === 'ar' ? 'التقنيات' : 'Technologies'}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {language === 'fa' ? 'ابزارها و تکنولوژی‌های ما' : language === 'ar' ? 'أدواتنا وتقنياتنا' : 'Our Tools & Technologies'}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {content.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    className="gradient-hero text-white border-0 px-4 py-2 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-primary mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">
                    {language === 'fa' ? 'مزایا' : language === 'ar' ? 'الفوائد' : 'Benefits'}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {language === 'fa' ? 'چرا هوش پرداز؟' : language === 'ar' ? 'لماذا هوش برداز؟' : 'Why Hoosh Pardaz?'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.benefits.map((benefit, index) => (
                  <Card key={index} className="gradient-card border-border">
                    <CardContent className="p-6 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto gradient-hero text-white border-0">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {language === 'fa' 
                    ? 'آماده شروع همکاری هستید؟' 
                    : language === 'ar' 
                    ? 'هل أنت مستعد لبدء التعاون؟' 
                    : 'Ready to Start Collaboration?'}
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  {language === 'fa'
                    ? 'با ما تماس بگیرید و پروژه خود را با بهترین تیم تکنولوژی شروع کنید'
                    : language === 'ar'
                    ? 'اتصل بنا وابدأ مشروعك مع أفضل فريق تقني'
                    : 'Contact us and start your project with the best technology team'}
                </p>
                <a 
                  href="/contact"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-smooth"
                >
                  {t('hero.cta.contact')}
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
