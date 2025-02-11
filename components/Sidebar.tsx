"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use this instead of `useRouter`
import '../app/globals.css'; // Make sure the global styles are imported

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname using usePathname()

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Getting Started', href: '/learn/intro' },
    { title: 'Hooks', href: '/learn/hooks' },
    { title: 'Context', href: '/learn/context' },
  ];

  return (
    <nav className="sidebar">
      <div className="logoContainer">
        <h2 className="logoText">React Docs</h2>
      </div>

      <ul className="menuList">
        {menuItems.map((item) => (
          <li key={item.href} className="menuItem">
            <Link href={item.href}>
              <span
                className={`link ${
                  pathname === item.href ? 'active' : ''
                }`}
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
