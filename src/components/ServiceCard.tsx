import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  serviceSlug: string;
}

const ServiceCard = ({ title, description, features, icon, serviceSlug }: ServiceCardProps) => {
  const phoneNumber = "19084146234";
  const message = `Hi, I'd like a quote for ${title}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="service-card card-3d group">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-accent text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <Check className="text-accent w-4 h-4 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-accent hover:text-accent-foreground hover:bg-accent px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground"
      >
        Contact for This Service
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default ServiceCard;