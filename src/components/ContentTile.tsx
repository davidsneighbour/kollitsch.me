import React from 'react';
import type {ReactNode} from 'react';
import Tile from './Tile';

interface ContentTileProps {
  title?: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

export default function ContentTile({ 
  title, 
  children, 
  size = 'medium',
  onClick,
  href,
  external = false
}: ContentTileProps) {
  return (
    <Tile size={size} onClick={onClick} href={href} external={external}>
      <div className="flex flex-col h-full p-6">
        {title && (
          <h3 className="font-quicksand font-bold text-slate-200 uppercase tracking-wide text-sm mb-4">
            {title}
          </h3>
        )}
        <div className="flex-1 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </Tile>
  );
}