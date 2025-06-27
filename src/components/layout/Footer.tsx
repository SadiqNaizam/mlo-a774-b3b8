import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} SmartLogin. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            to="/terms"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;