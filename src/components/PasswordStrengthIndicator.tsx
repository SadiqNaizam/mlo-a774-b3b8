import React, { useState, useEffect } from 'react';

interface PasswordStrengthIndicatorProps {
  /** The password string to analyze. */
  password?: string;
}

/**
 * A visual feedback component that analyzes a password and displays its strength.
 */
const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  console.log('PasswordStrengthIndicator loaded');

  const [strength, setStrength] = useState({
    value: 0,
    label: '',
    color: 'bg-transparent',
  });

  useEffect(() => {
    /**
     * Analyzes the password and returns a strength object.
     * @param pass The password string.
     * @returns An object with value, label, and color for the strength.
     */
    const getPasswordStrength = (pass: string) => {
      if (!pass) {
        return { value: 0, label: '', color: 'bg-transparent' };
      }

      let score = 0;
      if (pass.length >= 8) score += 1;
      if (/[a-z]/.test(pass)) score += 1;
      if (/[A-Z]/.test(pass)) score += 1;
      if (/[0-9]/.test(pass)) score += 1;
      if (/[^a-zA-Z0-9]/.test(pass)) score += 1; // Check for symbols

      // Handle the "too short" case separately and override other checks
      if (pass.length > 0 && pass.length < 8) {
        return { value: 20, label: 'Too Short', color: 'bg-red-500' };
      }

      switch (score) {
        case 0:
        case 1:
        case 2:
          return { value: 40, label: 'Weak', color: 'bg-red-500' };
        case 3:
          return { value: 60, label: 'Medium', color: 'bg-yellow-500' };
        case 4:
          return { value: 80, label: 'Strong', color: 'bg-sky-500' };
        case 5:
          return { value: 100, label: 'Very Strong', color: 'bg-green-500' };
        default:
          return { value: 0, label: '', color: 'bg-transparent' };
      }
    };

    setStrength(getPasswordStrength(password));
  }, [password]);

  return (
    <div className="w-full space-y-1.5" aria-live="polite">
      <div className="bg-muted h-2 w-full rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${strength.color}`}
          style={{ width: `${strength.value}%` }}
          role="progressbar"
          aria-label="Password strength"
          aria-valuenow={strength.value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {strength.label && (
        <p className="text-xs text-muted-foreground text-right">
          {strength.label}
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;