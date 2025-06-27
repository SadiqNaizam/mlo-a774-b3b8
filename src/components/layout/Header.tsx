import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-center sm:justify-start">
        <Link to="/" className="flex items-center gap-2 text-foreground transition-colors hover:text-foreground/80">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">SmartLogin</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;