import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: 'portfolio.projects.banking.title',
      category: t('services.software.title'),
      tags: ['React', 'Node.js', 'PostgreSQL'],
      descKey: 'portfolio.projects.banking.desc',
    },
    {
      titleKey: 'portfolio.projects.cloud.title',
      category: t('services.devops.title'),
      tags: ['Kubernetes', 'Docker', 'AWS'],
      descKey: 'portfolio.projects.cloud.desc',
    },
    {
      titleKey: 'portfolio.projects.ai.title',
      category: t('services.ai.title'),
      tags: ['Python', 'TensorFlow', 'Apache Spark'],
      descKey: 'portfolio.projects.ai.desc',
    },
    {
      titleKey: 'portfolio.projects.security.title',
      category: t('services.security.title'),
      tags: ['Penetration Testing', 'Security Audit'],
      descKey: 'portfolio.projects.security.desc',
    },
    {
      titleKey: 'portfolio.projects.mobile.title',
      category: t('services.software.title'),
      tags: ['React Native', 'Firebase', 'Stripe'],
      descKey: 'portfolio.projects.mobile.desc',
    },
    {
      titleKey: 'portfolio.projects.cicd.title',
      category: t('services.devops.title'),
      tags: ['Jenkins', 'GitLab', 'Ansible'],
      descKey: 'portfolio.projects.cicd.desc',
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
                {t('portfolio.subtitle')}
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
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(project.descKey)}
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
