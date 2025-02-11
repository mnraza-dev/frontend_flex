"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons for theme toggle
import SearchBox from './SearchBox';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolling, setScrolling] = useState(false);

  // Sync theme state with localStorage and system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Default to system theme if no saved theme
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);

    // Apply the theme to the body
    document.body.classList.add(initialTheme);

    // Scroll event listener
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);

    // Save the new theme to localStorage for persistence
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={` header  ${scrolling ? 'scrolled' : ''}`}>
      <h1>React Docs Clone</h1>
<div className="grid_header">      <SearchBox />
      
      {/* Theme toggle button */}
      <button 
        onClick={toggleTheme} 
        className="theme-toggle-button"
      >
        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button></div>
    </header>
  );
};

export default Header;
