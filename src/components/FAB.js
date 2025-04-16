// src/components/FAB.js
import { FaWhatsapp } from 'react-icons/fa';

function FAB() {
  // IMPORTANT: Replace 'YOUR_COUNTRY_CODE_AND_NUMBER' with the actual WhatsApp number
  // Example: For +91 98765 43210, use '919876543210'
  const whatsappNumber = 'YOUR_COUNTRY_CODE_AND_NUMBER'; // <--- *** REPLACE THIS ***

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 bg-success text-white p-3 rounded-circle shadow-lg text-decoration-none" // Bootstrap classes
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default FAB;