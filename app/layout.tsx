import React from "react";
import './styles/globals.css'; // Make sure this is correct

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* This will render the content of the page */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;