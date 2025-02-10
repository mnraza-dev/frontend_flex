"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use this instead of `useRouter`
import styles from './Sidebar.module.css'; // Import the CSS module

const Sidebar = () => {
  const pathname = useRouter(); // Get the current pathname from next/navigation

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Getting Started', href: '/learn/intro' },
    { title: 'Hooks', href: '/learn/hooks' },
    { title: 'Context', href: '/learn/context' },
  ];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logoText}>React Docs</h2>
      </div>

      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.href} className={styles.menuItem}>
            <Link href={item.href}>
              <span
                className={`${styles.link} ${
                  pathname === item.href ? styles.active : ''
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
