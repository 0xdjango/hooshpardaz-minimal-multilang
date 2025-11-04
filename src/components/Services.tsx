import { Code, Shield, Cloud, Lock, Brain } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('services.software.title'),
      description: t('services.software.desc'),
      slug: 'software',
    },
    {
      icon: Shield,
      title: t('services.qa.title'),
      description: t('services.qa.desc'),
      slug: 'qa',
    },
    {
      icon: Cloud,
      title: t('services.devops.title'),
      description: t('services.devops.desc'),
      slug: 'devops',
    },
    {
      icon: Lock,
      title: t('services.security.title'),
      description: t('services.security.desc'),
      slug: 'security',
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      slug: 'ai',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
