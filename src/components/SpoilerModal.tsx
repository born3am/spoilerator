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
        <button
          className="modal__closeButton"
          onClick={onClose}
          aria-label="Close spoiler modal"
        >
          &times;
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SpoilerModal;
