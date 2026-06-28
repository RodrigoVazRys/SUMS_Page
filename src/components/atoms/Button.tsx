import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  to?: string;
  href?: string;
  className?: string;
}

export default function Button({ children, variant = 'primary', to, href, className = '' }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center min-h-[48px] px-[22px] py-[12px] rounded-[8px] font-black no-underline transition-colors";
  
  const variants = {
    primary: "border border-transparent text-sums-white bg-sums-green hover:bg-sums-green-dark",
    outline: "border border-sums-gold text-sums-burgundy bg-white/75 hover:bg-white"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClasses}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={combinedClasses}>{children}</a>;
  }

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
}
