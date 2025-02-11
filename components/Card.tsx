"use client";
import React, { useState, useEffect } from "react";

const Card = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Checking for local storage theme setting and applying it on component mount
  useEffect(() => {
    const theme = window.localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      setIsDarkMode(true);
    }
  }, []); // Empty array ensures this effect runs only once, on component mount

  // Update localStorage when theme changes
  useEffect(() => {
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    console.log("Theme set to", isDarkMode ? "dark" : "light"); // Log to check theme state
  }, [isDarkMode]);

  // Assign color based on the theme
  const cardBgColor = isDarkMode ? "bg-card-dark" : "bg-lightGrayColor"; // bg colors
  const textColor = isDarkMode ? "text-primary-dark" : "text-primary"; // Text color
  const linkColor = isDarkMode ? "text-link-dark" : "text-link"; // Link color
  const secondaryTextColor = isDarkMode ? "text-secondary-dark" : "text-secondary"; // Secondary text color

  return (
    <div
      className={`${cardBgColor} p-6 xl:p-8 pb-4 xl:pb-6 rounded-2xl shadow-inner-border dark:shadow-inner-border-dark text-base ${secondaryTextColor} my-8`}
    >
      <h3 className={`mdx-heading ${textColor} mt-0 mb-3  text-2xl font-display leading-9 font-bold my-6`}>
        You will learn
      </h3>
      <div>
        <ul className="ms-6 my-3 list-disc text-white">
          <li className="leading-relaxed mb-1">
            <a
              className={`inline ${linkColor} border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal`}
              href="/learn/typescript#typescript-with-react-components"
            >
              TypeScript with React Components
            </a>
          </li>
          <li className="leading-relaxed mb-1">
            <a
              className={`inline ${linkColor} border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal`}
              href="/learn/typescript#example-hooks"
            >
              Examples of typing with Hooks
            </a>
          </li>
          <li className="leading-relaxed mb-1">
            <a
              className={`inline ${linkColor} border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal`}
              href="/learn/typescript#useful-types"
            >
              Common types from{" "}
              <code className={`inline text-code ${secondaryTextColor} px-1 rounded-md no-underline py-px`}>
                @types/react
              </code>
            </a>
          </li>
          <li className="leading-relaxed mb-1">
            <a
              className={`inline ${linkColor} border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal`}
              href="/learn/typescript#further-learning"
            >
              Further learning locations
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
