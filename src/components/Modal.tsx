import React, {  useEffect } from 'react';
import type {ReactNode} from 'react';
import { BsXLg } from 'react-icons/bs';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-md w-full mx-4 animate-scale-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-quicksand font-bold text-slate-200 uppercase tracking-wide text-lg">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            <BsXLg className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
