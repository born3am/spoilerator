import React from 'react';
import './TrailerModal.css';

interface TrailerModalProps {
  trailerLink: string | null;
  onClose: () => void;
}

const TrailerModal: React.FC<TrailerModalProps> = ({ trailerLink, onClose }) => {
  if (!trailerLink) return null;

  return (
<div className="trailerModal" onClick={onClose}>
  <div className="trailerModal__content" onClick={(e) => e.stopPropagation()}>
    <span className="trailerModal__closeButton" onClick={onClose}>&times;</span>
    <iframe
      width="560"
      height="315"
      src={trailerLink.replace('watch?v=', 'embed/')}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
  );
};

export default TrailerModal;
