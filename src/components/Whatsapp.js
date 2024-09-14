import React from 'react';
const WhatsAppShareButton = ({ message }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      Share on WhatsApp
    </button>
  );
};

export default WhatsAppShareButton;
