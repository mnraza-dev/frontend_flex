// components/Layout.tsx

import styles from './Layout.module.css'; // Import the CSS module
import SearchBox from './SearchBox';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutWrapper}>
      {/* Header */}
      <header className={styles.header}>
        <h1>React Docs Clone</h1>

        {/* Search Box */}
        <SearchBox />
      </header>

      {/* Main content and Sidebar */}
      <div className={styles.mainContentWrapper}>
        {/* Sidebar */}
        <Sidebar className={styles.sidebar} />

        {/* Main content */}
        <main className={styles.mainContent}>{children}</main>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 React Docs Clone</p>
      </footer>
    </div>
  );
};

export default Layout;
