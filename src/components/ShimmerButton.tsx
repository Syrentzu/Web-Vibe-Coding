import React from 'react';
import { Link } from 'react-router-dom';

interface ShimmerButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = `shimmer inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${className}`;

  if (href && !disabled) {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a href={href} onClick={onClick} className={baseClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} onClick={onClick} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} disabled={disabled}>
      {children}
    </button>
  );
};
export default ShimmerButton;
