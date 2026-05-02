import React from "react";
import "./Footer.css";

// Footer component
function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} ThreadHive. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
