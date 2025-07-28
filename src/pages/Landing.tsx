import { useEffect, useState } from "react";
import { 
  Home, 
  Wrench, 
  Trees, 
  Building, 
  Droplets, 
  Hammer, 
  Palette, 
  Fence, 
  ChefHat, 
  Box,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Users,
  Heart,
  CheckCircle,
  Quote
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BeforeAfterCard from "../components/BeforeAfterCard";
import FAQItem from "../components/FAQItem";
import WhatsAppButton from "../components/WhatsAppButton";

// Import images
import heroImage from "../assets/hero-outdoor.jpg";
import beforePatio from "../assets/before-patio.jpg";
import afterPatio from "../assets/after-patio.jpg";
import beforeYard from "../assets/before-yard.jpg";
import afterYard from "../assets/after-yard.jpg";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "19084146234";
  const email = "Ariandnypaelo@gmail.com";
  const freeQuoteMessage = "Hi, I'd like a free quote for my outdoor project";
  const whatsappQuoteUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(freeQuoteMessage)}`;

  const services = [
    {
      title: "Paver Installation",
      description: "Transform your outdoor spaces with premium paver installations for driveways, patios, and walkways.",
      features: ["Premium materials", "Custom patterns", "Professional installation", "Lifetime warranty"],
      icon: <Home />,
      serviceSlug: "paver-installation"
    },
    {
      title: "Premium Synthetic Grass",
      description: "Beautiful, low-maintenance artificial turf that looks and feels like natural grass.",
      features: ["Drought resistant", "Pet-friendly", "UV protected", "No maintenance required"],
      icon: <Trees />,
      serviceSlug: "synthetic-grass"
    },
    {
      title: "Custom Pergolas",
      description: "Create stunning outdoor living spaces with custom-designed pergolas and shade structures.",
      features: ["Custom designs", "Weather-resistant materials", "Professional installation", "Permits included"],
      icon: <Building />,
      serviceSlug: "pergolas"
    },
    {
      title: "Deep Cleaning with Power Washer",
      description: "Restore your outdoor surfaces to like-new condition with professional pressure washing.",
      features: ["Eco-friendly solutions", "Surface restoration", "Stain removal", "Quick turnaround"],
      icon: <Droplets />,
      serviceSlug: "power-washing"
    },
    {
      title: "Paver Repairs",
      description: "Expert repair services to restore damaged or uneven paver installations.",
      features: ["Color matching", "Structural repairs", "Settlement correction", "Quality guarantee"],
      icon: <Hammer />,
      serviceSlug: "paver-repairs"
    },
    {
      title: "Paver Restoration",
      description: "Bring old pavers back to life with professional restoration and sealing services.",
      features: ["Deep cleaning", "Sealing application", "Color enhancement", "Protection coating"],
      icon: <Palette />,
      serviceSlug: "paver-restoration"
    },
    {
      title: "Fencing",
      description: "Privacy, security, and style with custom fence installations for your property.",
      features: ["Multiple materials", "Custom heights", "Privacy options", "Security features"],
      icon: <Fence />,
      serviceSlug: "fencing"
    },
    {
      title: "Outdoor Kitchens & Gourmet Spaces",
      description: "Create the ultimate outdoor entertaining space with custom kitchen installations.",
      features: ["Custom designs", "Premium appliances", "Storage solutions", "Weather protection"],
      icon: <ChefHat />,
      serviceSlug: "outdoor-kitchens"
    },
    {
      title: "3D Project + Visual Consulting",
      description: "Visualize your project before construction with detailed 3D renderings and expert consultation.",
      features: ["3D visualization", "Design consultation", "Material selection", "Project planning"],
      icon: <Box />,
      serviceSlug: "3d-consulting"
    },
    {
      title: "Complete Advisory",
      description: "End-to-end project management and consultation for your outdoor transformation.",
      features: ["Project planning", "Material sourcing", "Timeline management", "Quality assurance"],
      icon: <Shield />,
      serviceSlug: "complete-advisory"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Orlando, FL",
      testimonial: "MC Prime transformed our backyard into a paradise! The synthetic grass looks incredibly real and the paver patio is stunning. Marcelo and his team exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      location: "Kissimmee, FL",
      testimonial: "Outstanding work on our driveway. The attention to detail and professionalism was impressive. Ariandny was great to work with and the final result is beautiful.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      location: "Winter Park, FL",
      testimonial: "From design to completion, the team was professional and efficient. Our outdoor kitchen is everything we dreamed of and more. Highly recommend MC Prime!",
      rating: 5
    },
    {
      name: "David Thompson",
      location: "Lake Mary, FL",
      testimonial: "The 3D visualization helped us see exactly what our project would look like. The final result matched perfectly. Great communication throughout the entire process.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does a typical paver installation take?",
      answer: "Most residential paver projects take 3-7 days depending on the size and complexity. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our services. Paver installations come with a lifetime warranty, and synthetic grass includes a 15-year manufacturer warranty."
    },
    {
      question: "Can you work around my schedule?",
      answer: "Absolutely! We understand that homeowners have busy lives. We'll work with you to schedule the project at times that are convenient for you."
    },
    {
      question: "Do you handle permits and HOA approvals?",
      answer: "Yes, we handle all necessary permits and can assist with HOA approval processes. We're familiar with local regulations across Central Florida."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Orlando, Kissimmee, Winter Park, Lake Mary, Sanford, Apopka, Oviedo, Altamonte Springs, and surrounding areas in Central Florida."
    },
    {
      question: "How do I get started with my project?",
      answer: "Simply contact us via WhatsApp, phone, or email for a free consultation. We'll discuss your vision, provide a detailed quote, and create a timeline that works for you."
    }
  ];

  const serviceAreas = [
    "Orlando", "Kissimmee", "Winter Park", "Lake Mary", "Sanford", 
    "Apopka", "Oviedo", "Altamonte Springs", "Longwood", "Casselberry",
    "Winter Springs", "Maitland", "Windermere", "Dr. Phillips"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-foreground">
              MC Prime Outdoor Solutions
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Services</a>
              <a href="#before-after" className="text-muted-foreground hover:text-accent transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-accent transition-colors">Testimonials</a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a>
            </div>
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero text-sm px-4 py-2"
            >
              Free Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Built to Impress.<br />
            <span className="gradient-text">Designed to Last.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your outdoor spaces with premium paver installations, synthetic grass, and custom outdoor living solutions in Central Florida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="btn-hero-outline inline-flex items-center gap-2"
            >
              View Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">About MC Prime Outdoor Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by Marcelo De Araújo and Ariandny Paelo, MC Prime Outdoor Solutions brings years of expertise and passion for creating beautiful outdoor spaces. We believe in transforming visions into reality with craftsmanship that stands the test of time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Quote className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="italic text-muted-foreground">
                    "She is clothed with strength and dignity; she can laugh at the days to come." - Proverbs 31:25
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Quote className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="italic text-muted-foreground">
                    "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living." - Nelson Mandela
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Quote className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="italic text-muted-foreground">
                    "Unless the Lord builds the house, the builders labor in vain." - Psalm 127:1
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in-up">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-2xl shadow-card text-center">
                  <Users className="text-accent w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-card text-center">
                  <Award className="text-accent w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">5 Star</h3>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-card text-center">
                  <Shield className="text-accent w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Lifetime</h3>
                  <p className="text-muted-foreground">Warranty</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-card text-center">
                  <Heart className="text-accent w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Family</h3>
                  <p className="text-muted-foreground">Owned Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on strong values and driven by a clear vision for excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center fade-in-up">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To transform outdoor spaces into beautiful, functional areas where families create lasting memories, using premium materials and exceptional craftsmanship.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center fade-in-up">
              <div className="w-16 h-16 bg-blue-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-blue-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Central Florida's premier outdoor solutions company, known for innovation, quality, and transforming ordinary spaces into extraordinary experiences.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center fade-in-up">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, excellence, and customer satisfaction guide everything we do. We believe in honest communication and delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete outdoor transformation solutions designed to enhance your property value and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in-up">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose MC Prime?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just contractors - we're your partners in creating outdoor spaces you'll love for years to come.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👩‍💼", title: "Woman & Hispanic-Owned Leadership", description: "Diverse perspectives bringing unique creativity to every project" },
              { icon: "🏆", title: "Premium Quality Materials", description: "We use only the finest materials for lasting beauty and durability" },
              { icon: "⚡", title: "Fast & Efficient Service", description: "Quick turnaround times without compromising on quality" },
              { icon: "🛡️", title: "Comprehensive Warranties", description: "Lifetime warranties on installations give you peace of mind" },
              { icon: "📱", title: "3D Visualization Technology", description: "See your project before we build it with detailed 3D renderings" },
              { icon: "💚", title: "Eco-Friendly Solutions", description: "Sustainable practices and environmentally conscious materials" }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 fade-in-up">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Amazing Transformations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've transformed outdoor spaces across Central Florida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="fade-in-up">
              <BeforeAfterCard
                beforeImage={beforePatio}
                afterImage={afterPatio}
                title="Patio Transformation"
                description="Complete patio renovation with premium pavers and synthetic grass installation."
              />
            </div>
            <div className="fade-in-up">
              <BeforeAfterCard
                beforeImage={beforeYard}
                afterImage={afterYard}
                title="Backyard Makeover"
                description="Full backyard transformation including synthetic grass, pergola, and outdoor kitchen."
              />
            </div>
          </div>
          
          <div className="text-center mt-12 fade-in-up">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I'd like to see more before and after photos")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-outline inline-flex items-center gap-2"
            >
              View More Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across Central Florida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proudly serving Central Florida communities with premium outdoor solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-card text-center hover:shadow-glow transition-all duration-300 fade-in-up">
                <MapPin className="text-accent w-5 h-5 mx-auto mb-2" />
                <p className="font-medium text-foreground">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Growth & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry certifications and continuous growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Licensed & Insured", description: "Fully licensed contractors with comprehensive insurance coverage" },
              { icon: <CheckCircle className="w-8 h-8" />, title: "ICPI Certified", description: "Interlocking Concrete Pavement Institute certification" },
              { icon: <Shield className="w-8 h-8" />, title: "BBB Accredited", description: "Better Business Bureau accredited with A+ rating" },
              { icon: <Star className="w-8 h-8" />, title: "5-Star Reviews", description: "Consistently rated 5 stars across all review platforms" }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center fade-in-up">
                <div className="text-accent mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <FAQItem {...faq} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Get your free consultation today and discover how MC Prime Outdoor Solutions can create the outdoor space of your dreams.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${phoneNumber}`} className="text-white/90 hover:text-accent transition-colors">
                  (908) 414-6234
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${email}`} className="text-white/90 hover:text-accent transition-colors">
                  {email}
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Service Area</h3>
                <p className="text-white/90">Central Florida</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center gap-2"
              >
                Get Free Quote Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${email}?subject=Outdoor Project Inquiry`}
                className="btn-hero-outline inline-flex items-center gap-2"
              >
                Email Consultation
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">MC Prime Outdoor Solutions</h3>
            <p className="text-primary-foreground/80 mb-6">
              Built to Impress. Designed to Last.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-primary-foreground/60">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Woman & Hispanic-Owned</span>
              <span>•</span>
              <span>Serving Central Florida</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Landing;