import React, { useState, useEffect } from 'react';
import './SpoilerModal.css';

interface SpoilerModalProps {
  message: string | null;
  onClose: () => void;
  onFetchMessage: () => Promise<string>;
}

const SpoilerModal: React.FC<SpoilerModalProps> = ({ message, onClose, onFetchMessage }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchedMessage, setFetchedMessage] = useState<string | null>(message);

  useEffect(() => {
    const fetchData = async () => {
      if (message === null) {
        setLoading(true);
        try {
          const fetchedMessage = await onFetchMessage();
          setFetchedMessage(fetchedMessage);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred.');
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [message, onFetchMessage]);

  if (loading) {
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
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
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
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

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
        <p>{fetchedMessage}</p>
      </div>
    </div>
  );
};

export default SpoilerModal;
