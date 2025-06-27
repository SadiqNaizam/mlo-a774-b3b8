import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import SocialAuthButtons from '@/components/SocialAuthButtons';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission,
    // call an API, and manage authentication state.
    console.log('Login form submitted');
    // On successful login, you would typically redirect the user.
    // navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AuthFormWrapper
          title="Welcome Back"
          description="Enter your credentials to access your account."
          footerContent={
            <>
              {"Don't have an account?"}{' '}
              <Link to="/sign-up" className="font-semibold text-primary hover:underline">
                Sign up
              </Link>
            </>
          }
        >
          <div className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required autoComplete="current-password"/>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember-me" />
                  <Label htmlFor="remember-me" className="text-sm font-normal cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            <SocialAuthButtons />
          </div>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;