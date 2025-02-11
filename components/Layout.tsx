import SearchBox from './SearchBox';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <header style={{ background: '#282c34', padding: '10px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>React Docs Clone</h1>

        {/* Search Box */}
        <SearchBox />
      </header>

      {/* Main content and Sidebar */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main style={{ flexGrow: 1, padding: '20px' }}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ background: '#282c34', padding: '10px', color: '#fff' }}>
        <p>&copy; 2025 React Docs Clone</p>
      </footer>
    </div>
  );
};

export default Layout;
