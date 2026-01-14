import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <h1>Welcome to Splash App</h1>
      </div>
    </>
  );
};

export default Layout;
