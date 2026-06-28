import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-[18px] bg-white/82 border border-sums-gold/35 rounded-[8px] shadow-sums-lg ${className}`}>
      {children}
    </div>
  );
}
