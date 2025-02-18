import React from 'react';
import './SpoilerModal.css';

interface SpoilerModalProps {
  message: string | null;
  onClose: () => void;
}

const SpoilerModal: React.FC<SpoilerModalProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="spoilerModal" onClick={onClose}>
      <div className="spoilerModal__content" onClick={(e) => e.stopPropagation()}>
        <span className="spoilerModal__closeButton" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SpoilerModal;
