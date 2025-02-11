// app/layout.tsx
import Header from "@/components/Header";
import SearchBox from "../components/SearchBox";
import Sidebar from "@/components/Sidebar";
import "./globals.css"; // Import global styles
import Footer from "@/components/Footer";

export const metadata = {
  title: "React Docs Clone",
  description: "A clone of the React Docs with Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="min-h-screen bg-gray-100">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            {/* Header */}
            <Header />
            {/* Main content and Sidebar */}
            <div className="content">
              <Sidebar />
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
    </>
  );
}
