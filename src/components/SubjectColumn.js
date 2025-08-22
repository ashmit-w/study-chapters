import React, { useState } from 'react';
import './SubjectColumn.css';

const SubjectColumn = ({ title, chapters, onAddChapter, onUpdateRating, onSort }) => {
  const [newChapterName, setNewChapterName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newChapterName.trim()) {
      onAddChapter(newChapterName);
      setNewChapterName('');
    }
  };

  const handleStarClick = (chapterId, rating) => {
    onUpdateRating(chapterId, rating);
  };

  const renderStars = (chapter) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= chapter.rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(chapter.id, i)}
          title={`Rate ${i} star${i > 1 ? 's' : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="subject-column">
      <h2>{title}</h2>
      
      <div className="chapters-list">
        {chapters.length === 0 ? (
          <div className="empty-state">
            <p>No chapters yet. Add your first chapter below!</p>
          </div>
        ) : (
          chapters.map(chapter => (
            <div key={chapter.id} className="chapter-item">
              <span className="chapter-name">{chapter.name}</span>
              <div className="stars-container">
                {renderStars(chapter)}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="add-chapter-section">
        <form onSubmit={handleSubmit} className="add-chapter-form">
          <input
            type="text"
            value={newChapterName}
            onChange={(e) => setNewChapterName(e.target.value)}
            placeholder="Enter chapter name"
            className="chapter-input"
            maxLength={50}
          />
          <button type="submit" className="add-button" disabled={!newChapterName.trim()}>
            Add Chapter
          </button>
        </form>
      </div>

      <button 
        onClick={onSort} 
        className="sort-button"
        disabled={chapters.length <= 1}
        title={chapters.length <= 1 ? "Need at least 2 chapters to sort" : "Sort chapters by rating"}
      >
        Sort by Rating
      </button>
    </div>
  );
};

export default SubjectColumn;
