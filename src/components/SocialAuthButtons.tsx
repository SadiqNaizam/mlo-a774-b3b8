import React from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialAuthButtonsProps {
  className?: string;
}

const SocialAuthButtons: React.FC<SocialAuthButtonsProps> = ({ className }) => {
  console.log('SocialAuthButtons loaded');

  const handleSocialLogin = (provider: 'Google' | 'GitHub') => {
    // In a real application, this would initiate the respective OAuth flow.
    console.log(`Attempting to log in with ${provider}...`);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('Google')}>
          <Chrome className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('GitHub')}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialAuthButtons;