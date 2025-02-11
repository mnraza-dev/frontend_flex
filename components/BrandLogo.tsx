import React from 'react';
import './BrandLogo.css'; // Import CSS for animations

const BrandLogo = () => {
  return (
    <h1 className="brand-logo">
      <span className="text-frontend animate-typewriter">
        Frontend
      </span>
      <span className="text-flex animate-typewriter">
        Flex
      </span>
    </h1>
  );
};

export default BrandLogo;
