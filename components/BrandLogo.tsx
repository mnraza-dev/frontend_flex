import React from 'react';
import './BrandLogo.css'; // Import CSS for animations
import Link from 'next/link';

const BrandLogo = () => {
  return (
    <Link href="/" className="brand-logo">
      <span className="text-frontend animate-typewriter">
        Frontend
      </span>
      <span className="text-flex animate-typewriter">
        Flex
      </span>
    </Link>
  );
};

export default BrandLogo;
