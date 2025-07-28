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
  Quote,
  Eye,
  Target,
  Gem
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
import mcPrimeLogo from "../assets/mc-prime-logo.png";

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
      description: "Driveways, walkways, patios, and pools with modern pavers in various styles and colors.",
      features: ["Solid base preparation", "Perfect leveling", "Professional joint finishing", "Various styles & colors"],
      icon: <Home />,
      serviceSlug: "paver-installation"
    },
    {
      title: "Premium Synthetic Grass",
      description: "Natural texture, weather-resistant artificial turf ideal for families, pets, and recreational areas.",
      features: ["Natural texture", "Weather resistant", "Pet-friendly", "Low maintenance"],
      icon: <Trees />,
      serviceSlug: "synthetic-grass"
    },
    {
      title: "Custom Pergolas",
      description: "Structures in wood, aluminum, or PVC with modern design and high-quality finishing.",
      features: ["Wood, aluminum, or PVC", "Modern design", "High-quality finishing", "Built-in lighting options"],
      icon: <Building />,
      serviceSlug: "pergolas"
    },
    {
      title: "Deep Cleaning with Power Washer",
      description: "Removes mold, dirt, and rust with pressure washing for pavers, fences, walls, and decks.",
      features: ["Mold & dirt removal", "Pressure washing", "Immediate transformation", "All surface types"],
      icon: <Droplets />,
      serviceSlug: "power-washing"
    },
    {
      title: "Paver Repairs",
      description: "Replacing broken or sunken pavers with base leveling and durable joint finishing.",
      features: ["Broken paver replacement", "Base leveling", "Durable joints", "Color matching"],
      icon: <Hammer />,
      serviceSlug: "paver-repairs"
    },
    {
      title: "Paver Restoration",
      description: "Like new without full replacement - cleaning, leveling, and sealing for enhancement.",
      features: ["Deep cleaning", "Professional sealing", "Renewed look", "Lower cost option"],
      icon: <Palette />,
      serviceSlug: "paver-restoration"
    },
    {
      title: "Fencing",
      description: "Installation in PVC, wood, and aluminum with repairs and customized finishing.",
      features: ["PVC, wood, aluminum", "Custom finishing", "Repair services", "Safety & appeal"],
      icon: <Fence />,
      serviceSlug: "fencing"
    },
    {
      title: "Outdoor Kitchens & Gourmet Spaces",
      description: "Grills, sinks, countertops, and bars with premium finishes in granite, quartz, or cement.",
      features: ["Complete outdoor kitchens", "Premium finishes", "Granite & quartz", "Integrated design"],
      icon: <ChefHat />,
      serviceSlug: "outdoor-kitchens"
    },
    {
      title: "3D Project + Visual Consulting",
      description: "See the result before execution with realistic design and custom adjustments.",
      features: ["3D visualization", "Realistic designs", "Custom adjustments", "All budgets"],
      icon: <Box />,
      serviceSlug: "3d-consulting"
    },
    {
      title: "Complete Advisory",
      description: "Free technical visits, clear proposals with deadlines and scope, contract + service warranty.",
      features: ["Free technical visits", "Clear proposals", "Contracts included", "Service warranty"],
      icon: <Shield />,
      serviceSlug: "complete-advisory"
    }
  ];

  const testimonials = [
    {
      name: "Maria González",
      location: "Orlando, FL",
      testimonial: "The best decision I made was hiring MC Prime! Ariandny was amazing from start to finish. The synthetic grass looks incredibly real.",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      location: "Kissimmee, FL",
      testimonial: "Clean, fast work with a flawless finish. The paver installation exceeded our expectations. Professional team!",
      rating: 5
    },
    {
      name: "Jennifer Thompson",
      location: "Winter Garden, FL",
      testimonial: "MC Prime transformed our backyard into a paradise! The outdoor kitchen is everything we dreamed of and more.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      location: "Lake Nona, FL",
      testimonial: "Excelente trabajo! They speak Spanish, English, and Portuguese. Great communication throughout the entire process.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you offer financing?",
      answer: "Yes! We have a bank partner to help make your project happen with flexible payment options."
    },
    {
      question: "Can I send a competitor's quote?",
      answer: "Absolutely! We match equivalent quality estimates. We're confident in our value proposition."
    },
    {
      question: "Do you only install pavers?",
      answer: "No! We also do synthetic grass, pergolas, fences, outdoor kitchens, pressure washing, and restoration. Full outdoor solutions!"
    },
    {
      question: "Do you speak Spanish and English?",
      answer: "Yes! We offer trilingual service in Portuguese, English, and Spanish for better communication."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Orlando, Kissimmee, Winter Garden, Lake Nona, Davenport, Clermont, Poinciana, and surrounding areas."
    },
    {
      question: "Do you provide warranties?",
      answer: "Yes, we provide warranty on all services and use high-quality materials for lasting results."
    }
  ];

  const serviceAreas = [
    "Orlando", "Kissimmee", "Winter Garden", "Lake Nona", "Davenport", 
    "Clermont", "Poinciana", "Winter Park", "Sanford", "Apopka"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={mcPrimeLogo} alt="MC Prime Logo" className="h-10 w-10" />
              <span className="font-bold text-xl text-foreground">MC Prime Outdoor Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <img src={mcPrimeLogo} alt="MC Prime Logo" className="h-24 w-24 mx-auto mb-6" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Built to Impress.<br />
            <span className="text-primary">Designed to Last.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed opacity-90">
            More than just a project — we create outdoor experiences.
          </p>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Transform your outdoor spaces with premium solutions in Central Florida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-foreground transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About MC Prime Outdoor Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                MC Prime Outdoor Solutions was built on experience, grit, and a vision for the future. 
                Founded by <strong>Marcelo De Araújo</strong>, a professional with nearly 20 years of experience in construction and landscaping.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, this story enters a new chapter — stronger, more inclusive, and more impactful. 
                The company is now also led by <strong>Ariandny Paelo</strong>, a woman, mother, grandmother, Hispanic entrepreneur, 
                and majority owner — combining Marcelo's technical experience with Ariandny's administrative and organizational experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Quote className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="italic text-muted-foreground">
                    "She is clothed with strength and dignity; she can laugh at the days to come." - Proverbs 31:25
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Quote className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="italic text-muted-foreground">
                    "It always seems impossible until it's done." - Nelson Mandela
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Quote className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="italic text-muted-foreground">
                    "Unless the Lord builds the house, the builders labor in vain." - Psalm 127:1
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-2xl shadow-card text-center border hover:shadow-glow transition-all duration-300">
                  <Users className="text-primary w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-card text-center border hover:shadow-glow transition-all duration-300">
                  <Award className="text-accent w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">20+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-card text-center border hover:shadow-glow transition-all duration-300">
                  <Shield className="text-teal-accent w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Trilingual</h3>
                  <p className="text-muted-foreground">Service Available</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-card text-center border hover:shadow-glow transition-all duration-300">
                  <Heart className="text-primary w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Woman</h3>
                  <p className="text-muted-foreground">Owned Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on strong values and driven by a clear vision for excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center border">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary-foreground w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To offer innovative and lasting solutions for outdoor areas, with personalized design, 
                high quality, and unwavering commitment to customer satisfaction.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center border">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a reference in backyard and outdoor design throughout Florida, 
                with female leadership and constant innovation.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 text-center border">
              <div className="w-16 h-16 bg-teal-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Gem className="text-teal-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Values</h3>
              <ul className="text-muted-foreground text-left space-y-2">
                <li>• Quality and excellence in every detail</li>
                <li>• Respect, transparency, and ethics</li>
                <li>• Innovation, creativity, and design</li>
                <li>• Woman-Owned and Hispanic-Owned pride</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Project to Complete Transformation - Complete outdoor solutions designed to enhance your lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Differentials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why MC Prime stands out in the outdoor solutions market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👩‍💼", title: "Woman and Hispanic-owned leadership", description: "Diverse perspectives bringing unique creativity to every project" },
              { icon: "🔧", title: "Nearly 20 years of technical experience", description: "Proven expertise in construction and landscaping" },
              { icon: "🌍", title: "Trilingual service: Portuguese, English, and Spanish", description: "Better communication for diverse communities" },
              { icon: "🛡️", title: "Warranty on all services", description: "Quality guarantee and peace of mind" },
              { icon: "💳", title: "Financing and installment options", description: "Bank partner to help make your project happen" },
              { icon: "📱", title: "Fast WhatsApp support", description: "Quick response and professional service" },
              { icon: "🎯", title: "We match competitor estimates", description: "Equivalent quality at competitive prices" },
              { icon: "✨", title: "Professional, clean, and polite team", description: "Respectful service from start to finish" }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 border">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Before & After — Real Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visual transformations with immediate impact. See how we transform outdoor spaces across Central Florida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BeforeAfterCard
              beforeImage={beforePatio}
              afterImage={afterPatio}
              title="Patio Transformation"
              description="Complete patio renovation with premium pavers and professional installation."
            />
            <BeforeAfterCard
              beforeImage={beforeYard}
              afterImage={afterYard}
              title="Backyard Makeover"
              description="Full backyard transformation including synthetic grass and outdoor living spaces."
            />
          </div>
          
          <div className="text-center mt-12">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I'd like to see more before and after photos")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              View More Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across Central Florida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area & Growth */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Service Area */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Service Area</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Proudly serving Central Florida communities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg shadow-card text-center hover:shadow-glow transition-all duration-300 border">
                    <MapPin className="text-primary w-5 h-5 mx-auto mb-2" />
                    <p className="font-medium text-foreground">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth & Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Growth & Certifications</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                We're in the process of certification to expand and secure contracts.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <CheckCircle className="w-6 h-6" />, title: "Florida OSD", description: "Woman & Minority Certification" },
                  { icon: <Shield className="w-6 h-6" />, title: "SBA & SAM.gov", description: "Federal contract bidding registration" },
                  { icon: <Award className="w-6 h-6" />, title: "State Registration", description: "Updated insurance and licensing" },
                  { icon: <Star className="w-6 h-6" />, title: "5-Star Reviews", description: "Consistently rated 5 stars across platforms" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 border">
                    <div className="text-accent">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <FAQItem {...faq} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="contact" className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Get Started!</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto opacity-90">
            Your backyard could be the next highlight in the neighborhood.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            More than just a project — we create outdoor experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href={`tel:${phoneNumber}`} className="text-white/90 hover:text-primary transition-colors">
                (908) 414-6234
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href={`mailto:${email}`} className="text-white/90 hover:text-primary transition-colors">
                {email}
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Service Area</h3>
              <p className="text-white/90">Central Florida</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Free Quote Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${email}?subject=Outdoor Project Inquiry`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-foreground transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Email Consultation
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src={mcPrimeLogo} alt="MC Prime Logo" className="h-8 w-8" />
              <h3 className="text-2xl font-bold">MC Prime Outdoor Solutions</h3>
            </div>
            <p className="text-lg mb-4 font-semibold text-primary">
              "Built to Impress. Designed to Last."
            </p>
            <p className="opacity-80 mb-6">
              More than just a project — we create outdoor experiences.
            </p>
            <div className="flex justify-center space-x-6 text-sm opacity-60">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Woman & Hispanic-Owned</span>
              <span>•</span>
              <span>Serving Central Florida</span>
            </div>
            <p className="text-xs opacity-50 mt-4">
              "Unless the Lord builds the house, the builders labor in vain." — Psalm 127:1
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Landing;