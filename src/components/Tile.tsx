import React from 'react';
import type {ReactNode} from 'react';

interface TileProps {
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  className?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  children: ReactNode;
  hover?: boolean;
}

const sizeClasses = {
  small: 'col-span-1 row-span-1 h-32',
  medium: 'col-span-2 row-span-2 h-64',
  large: 'col-span-3 row-span-3 h-96',
  wide: 'col-span-2 row-span-1 h-32',
  tall: 'col-span-1 row-span-2 h-64',
};

export default function Tile({ 
  size = 'small', 
  className = '', 
  onClick, 
  href, 
  external = false,
  children, 
  hover = true 
}: TileProps) {
  const baseClasses = `
    ${sizeClasses[size]}
    bg-slate-800/90 
    backdrop-blur-sm
    border border-slate-700/50
    rounded-2xl 
    overflow-hidden
    ${hover ? 'transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700/90 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-900/30' : ''}
    ${onClick || href ? 'cursor-pointer' : ''}
    ${className}
  `;

  const handleClick = () => {
    if (href) {
      if (external) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.hash = href;
      }
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className={baseClasses} onClick={handleClick}>
      {children}
    </div>
  );
}