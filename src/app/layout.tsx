import React from 'react';
import Header from './components/Header'; // Correct import path
// Correct import path
import './globals.css'; // Global CSS (optional)

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className='bg-black'>
        <Header />
        <main>{children}</main>
        
      </body>
    </html>
  );
};

export default Layout;
