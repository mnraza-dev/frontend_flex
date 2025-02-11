"use client"; // Client component for dynamic state (useState, etc.)

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import "./globals.css"; // Import global styles

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>Frontend Flex </title>
        <meta name="description" content="A clone of the React Docs with Next.js" />
      </head>

      <body className="min-h-screen bg-gray-100">
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* Header with hamburger button */}
          <Header toggleSidebar={toggleSidebar} />

          {/* Main content and Sidebar */}
          <div className="content flex flex-col sm:flex-row flex-grow">
            {/* Sidebar - Pass the 'isSidebarOpen' state as a prop */}
            <Sidebar isSidebarOpen={isSidebarOpen} />

            {/* Main content */}
            <main style={{ flexGrow: 1, padding: "0 20px" }}>
              {children}
            </main>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
