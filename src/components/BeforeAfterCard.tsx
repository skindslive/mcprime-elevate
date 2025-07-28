interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const BeforeAfterCard = ({ beforeImage, afterImage, title, description }: BeforeAfterCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden border border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img 
            src={beforeImage} 
            alt={`Before - ${title}`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Before
          </div>
        </div>
        <div className="relative">
          <img 
            src={afterImage} 
            alt={`After - ${title}`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            After
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BeforeAfterCard;