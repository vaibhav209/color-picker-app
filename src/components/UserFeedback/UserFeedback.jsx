import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styles from './UserFeedback.module.css';
import ActionButton from '../ActionButton/ActionButton';

const UserFeedback = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [commentInput, setCommentInput] = useState('');

  const [sendFeedback, setSendFeedback] = useState(false);

  const navigate = useNavigate();

  const handleFeedbackType = (e) => {
    setFeedbackType(e.target.value);
  };

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSubmit = () => {
    toast.success('Thank you for your feedback!');
    setFeedbackType('');
    setCommentInput('');
    setSendFeedback(true);
  };

  return (
    <>
      <div className={styles.feedbackContainer}>
        <h2>User Feedback</h2>
        <div>
          <div className={styles.feedbackSection}>
            <p>How was your experience?</p>
            <label>
              <input
                type="radio"
                name="feedbackType"
                value="good"
                checked={feedbackType === 'good'}
                onChange={handleFeedbackType}
              />
              <span>Good</span>
            </label>
            <label>
              <input
                type="radio"
                name="feedbackType"
                value="average"
                checked={feedbackType === 'average'}
                onChange={handleFeedbackType}
              />
              <span>Average</span>
            </label>
            <label>
              <input
                type="radio"
                name="feedbackType"
                value="poor"
                checked={feedbackType === 'poor'}
                onChange={handleFeedbackType}
              />
              <span>Poor</span>
            </label>
          </div>
          <div className={styles.commentSection}>
            <label htmlFor="commentInput">Additional Comments (optional)</label>
            <textarea
              id="commentInput"
              name="commentInput"
              placeholder="write your comment..."
              value={commentInput}
              onChange={handleCommentInput}
            />
          </div>
          {sendFeedback ? (
            <ActionButton
              className={styles.backButton}
              onClick={() => navigate(-1)}
              spanContent="&#8592; Go back"
            />
          ) : (
            <ActionButton
              onClick={handleSubmit}
              disabled={!feedbackType}
              className={styles.submitButton}
              btnName="Submit Feedback"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UserFeedback;
