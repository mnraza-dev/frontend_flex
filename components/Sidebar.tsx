"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/globals.css";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Getting Started", href: "/learn/intro" },
    { title: "Hooks", href: "/learn/hooks" },
    { title: "Context", href: "/learn/context" },
  ];

  return (
    // className={`sidebar transition-all duration-300 ease-in-out ${
    //   isSidebarOpen ? 'block' : 'hidden'
    // } sm:block`}

    <nav className={`sidebar transition-all duration-300 ease-in-out sm:block`}>
      <div className="logoContainer">
        <h2 className="logoText">React Docs</h2>
      </div>

      <ul className="menuList">
        {menuItems.map((item) => (
          <li key={item.href} className="menuItem">
            <Link href={item.href}>
              <span
                className={`link ${pathname === item.href ? "active" : ""}`}
              >
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
