import React from 'react';
import * as Icons from 'react-icons/bs';
import Tile from './Tile';

interface IconTileProps {
  icon: string;
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  color?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export default function IconTile({ 
  icon, 
  title, 
  size = 'small', 
  color = 'text-blue-400',
  onClick,
  href,
  external = false
}: IconTileProps) {
  return (
    <Tile size={size} onClick={onClick} href={href} external={external}>
      <div className="flex flex-col items-center justify-center h-full p-4">
        {React.createElement(Icons[`Bs${icon.charAt(0).toUpperCase() + icon.slice(1)}` as keyof typeof Icons] || Icons.BsQuestionCircle, {
          className: `w-8 h-8 ${color} mb-2`
        })}
        {title && (
          <span className="text-xs font-quicksand font-semibold text-slate-300 uppercase tracking-wide text-center">
            {title}
          </span>
        )}
      </div>
    </Tile>
  );
}