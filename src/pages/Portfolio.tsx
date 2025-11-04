import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'پلتفرم بانکی آنلاین',
      titleEn: 'Online Banking Platform',
      category: t('services.software.title'),
      tags: ['React', 'Node.js', 'PostgreSQL'],
      description: 'توسعه پلتفرم بانکداری دیجیتال با امنیت بالا',
    },
    {
      title: 'سیستم مدیریت زیرساخت ابری',
      titleEn: 'Cloud Infrastructure Management',
      category: t('services.devops.title'),
      tags: ['Kubernetes', 'Docker', 'AWS'],
      description: 'راه‌اندازی و مدیریت زیرساخت ابری مقیاس‌پذیر',
    },
    {
      title: 'پلتفرم تحلیل داده با AI',
      titleEn: 'AI-Powered Data Analytics',
      category: t('services.ai.title'),
      tags: ['Python', 'TensorFlow', 'Apache Spark'],
      description: 'سیستم تحلیل هوشمند داده با یادگیری ماشین',
    },
    {
      title: 'تست نفوذ و امنیت شبکه',
      titleEn: 'Network Security Assessment',
      category: t('services.security.title'),
      tags: ['Penetration Testing', 'Security Audit'],
      description: 'ارزیابی امنیت و تست نفوذ برای شرکت مالی',
    },
    {
      title: 'اپلیکیشن موبایل فروشگاهی',
      titleEn: 'E-commerce Mobile App',
      category: t('services.software.title'),
      tags: ['React Native', 'Firebase', 'Stripe'],
      description: 'اپلیکیشن فروشگاه آنلاین با پشتیبانی از پرداخت',
    },
    {
      title: 'سیستم CI/CD خودکار',
      titleEn: 'Automated CI/CD Pipeline',
      category: t('services.devops.title'),
      tags: ['Jenkins', 'GitLab', 'Ansible'],
      description: 'پیاده‌سازی خط لوله CI/CD برای استقرار خودکار',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                {t('nav.portfolio')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                نمونه‌ای از پروژه‌های موفق ما
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index}
                  className="gradient-card border-border hover:shadow-soft transition-smooth group cursor-pointer"
                >
                  <CardContent className="p-6 space-y-4">
                    <Badge className="gradient-hero text-white border-0">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {project.titleEn}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
