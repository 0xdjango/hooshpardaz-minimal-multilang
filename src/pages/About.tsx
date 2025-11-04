import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission.desc'),
    },
    {
      icon: Eye,
      title: t('about.vision.title'),
      description: t('about.vision.desc'),
    },
    {
      icon: Heart,
      title: t('about.values.title'),
      description: t('about.values.desc'),
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
                {t('about.title')}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="gradient-card border-border hover:shadow-soft transition-smooth"
                >
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mx-auto shadow-soft">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 max-w-3xl mx-auto">
              <Card className="gradient-card border-border">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-foreground text-center">
                    {t('hero.description')}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    {t('hero.subtitle')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
