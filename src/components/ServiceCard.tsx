import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export const ServiceCard = ({ icon: Icon, title, description, slug }: ServiceCardProps) => {
  const { t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <Card className="group hover:shadow-soft transition-smooth border-border gradient-card">
      <CardContent className="p-6 space-y-4">
        <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <Link to={`/services/${slug}`}>
          <Button 
            variant="ghost" 
            className="gap-2 text-primary hover:text-primary-hover hover:bg-accent group/btn p-0"
          >
            {t('services.learnMore')}
            <ArrowIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
