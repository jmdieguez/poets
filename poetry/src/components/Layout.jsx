import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      className="flex flex-col min-h-screen font-source-serif-pro"
      style={{
        background:
          "linear-gradient(135deg, #D27685, #9E4784, #66347F, #37306B)",
      }}
    >
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
