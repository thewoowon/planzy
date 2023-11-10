"use client";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="mt-[80px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
