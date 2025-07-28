import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, location, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 border border-border/50">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      <p className="text-foreground italic mb-4 leading-relaxed">
        "{testimonial}"
      </p>
      
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;