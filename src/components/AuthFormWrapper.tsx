import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';

interface AuthFormWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footerContent: React.ReactNode;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  children,
  title,
  description,
  footerContent,
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
            <Lock className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter>
          <div className="w-full text-center text-sm text-muted-foreground">
            {footerContent}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

// Example of how to create a link for the footerContent prop:
// <Link to="/sign-up" className="font-semibold text-primary hover:underline">
//   Sign up now
// </Link>

export default AuthFormWrapper;