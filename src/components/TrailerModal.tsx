import './TrailerModal.css';

interface TrailerModalProps {
  trailerLink: string | null;
  onClose: () => void;
}

const TrailerModal: React.FC<TrailerModalProps> = ({ trailerLink, onClose }) => {
  if (!trailerLink) return null;

const embedLink = trailerLink.includes('watch?v=')
  ? trailerLink.replace('watch?v=', 'embed/')
  : trailerLink;

  return (
    <div className="trailerModal" onClick={onClose}>
      <div className="trailerModal__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__closeButton"
          onClick={onClose}
          aria-label="Close trailer modal"
        >
          &times;
        </button>
          <iframe
            width={560}
            height={315}
            src={embedLink}
            title="YouTube video player"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
