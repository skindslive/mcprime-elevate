import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "19084146234";
  const defaultMessage = "Hi, I need help with an outdoor project.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn floating"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;