import React from 'react';

function Location() {
  return (
    <div className="h-[50vh] w-full p-20 flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold mb-4">Find Us Here</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.8393712946865!2d75.89823087644038!3d22.75211090494702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303d39b7c0a5f%3A0xb0ac1b59b2999de3!2z4KS54KWL4KSf4KSyIOCkuOCliOCkq-CljeCksOCkqCDgpIfgpKjgpY3gpKg!5e0!3m2!1shi!2sin!4v1747944800662!5m2!1shi!2sin"
        className="w-[40%] h-full rounded-lg shadow-md"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
