import React, { useState } from 'react';
import './App.css';
import SubjectColumn from './components/SubjectColumn';

function App() {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      title: 'Physics',
      chapters: [
        { id: 1, name: 'Units and Measurements', rating: 0 },
        { id: 2, name: 'Kinematics', rating: 0 },
        { id: 3, name: 'Laws of Motion', rating: 0 },
        { id: 4, name: 'Work, Energy and Power', rating: 0 },
        { id: 5, name: 'Rotational Motion', rating: 0 },
        { id: 6, name: 'Gravitation', rating: 0 },
        { id: 7, name: 'Properties of Solids and Liquids', rating: 0 },
        { id: 8, name: 'Oscillations and Waves', rating: 0 },
        { id: 9, name: 'Thermodynamics', rating: 0 },
        { id: 10, name: 'Kinetic Theory of Gases', rating: 0 },
        { id: 11, name: 'Electrostatics', rating: 0 },
        { id: 12, name: 'Current Electricity', rating: 0 },
        { id: 13, name: 'Magnetic Effects of Current and Magnetism', rating: 0 },
        { id: 14, name: 'Electromagnetic Induction and Alternating Currents', rating: 0 },
        { id: 15, name: 'Electromagnetic Waves', rating: 0 },
        { id: 16, name: 'Optics (Ray & Wave Optics)', rating: 0 },
        { id: 17, name: 'Dual Nature of Matter and Radiation', rating: 0 },
        { id: 18, name: 'Atoms and Nuclei', rating: 0 },
        { id: 19, name: 'Electronic Devices', rating: 0 },
        { id: 20, name: 'Communication Systems', rating: 0 }
      ]
    },
    {
      id: 2,
      title: 'Chemistry',
      chapters: [
        { id: 21, name: 'Some Basic Concepts of Chemistry', rating: 0 },
        { id: 22, name: 'Atomic Structure', rating: 0 },
        { id: 23, name: 'Chemical Bonding and Molecular Structure', rating: 0 },
        { id: 24, name: 'States of Matter', rating: 0 },
        { id: 25, name: 'Thermodynamics', rating: 0 },
        { id: 26, name: 'Equilibrium', rating: 0 },
        { id: 27, name: 'Redox Reactions', rating: 0 },
        { id: 28, name: 'Electrochemistry', rating: 0 },
        { id: 29, name: 'Chemical Kinetics', rating: 0 },
        { id: 30, name: 'Surface Chemistry', rating: 0 },
        { id: 31, name: 'Classification of Elements and Periodicity in Properties', rating: 0 },
        { id: 32, name: 'Hydrogen', rating: 0 },
        { id: 33, name: 'The s-Block Element', rating: 0 },
        { id: 34, name: 'The p-Block Element', rating: 0 },
        { id: 35, name: 'The d-Block Element', rating: 0 },
        { id: 36, name: 'The f-Block Element', rating: 0 },
        { id: 37, name: 'Coordination Compounds', rating: 0 },
        { id: 38, name: 'Environmental Chemistry', rating: 0 },
        { id: 39, name: 'Some Basic Principles of Organic Chemistry', rating: 0 },
        { id: 40, name: 'Hydrocarbons', rating: 0 },
        { id: 41, name: 'Haloalkanes and Haloarenes', rating: 0 },
        { id: 42, name: 'Alcohols, Phenols and Ethers', rating: 0 },
        { id: 43, name: 'Aldehydes, Ketones and Carboxylic Acids', rating: 0 },
        { id: 44, name: 'Amines', rating: 0 },
        { id: 45, name: 'Biomolecules', rating: 0 },
        { id: 46, name: 'Polymers', rating: 0 },
        { id: 47, name: 'Chemistry in Everyday Life', rating: 0 }
      ]
    },
    {
      id: 3,
      title: 'Mathematics',
      chapters: [
        { id: 48, name: 'Sets, Relations & Functions', rating: 0 },
        { id: 49, name: 'Complex Numbers and Quadratic Equations', rating: 0 },
        { id: 50, name: 'Matrices and Determinants', rating: 0 },
        { id: 51, name: 'Permutations and Combinations', rating: 0 },
        { id: 52, name: 'Mathematical Induction', rating: 0 },
        { id: 53, name: 'Binomial Theorem and its Applications', rating: 0 },
        { id: 54, name: 'Sequences and Series', rating: 0 },
        { id: 55, name: 'Limits, Continuity and Differentiability', rating: 0 },
        { id: 56, name: 'Integral Calculus', rating: 0 },
        { id: 57, name: 'Differential Equations', rating: 0 },
        { id: 58, name: 'Coordinate Geometry', rating: 0 },
        { id: 59, name: 'Three Dimensional Geometry', rating: 0 },
        { id: 60, name: 'Vector Algebra', rating: 0 },
        { id: 61, name: 'Statistics and Probability', rating: 0 },
        { id: 62, name: 'Trigonometry', rating: 0 },
        { id: 63, name: 'Mathematical Reasoning', rating: 0 }
      ]
    }
  ]);

  const [nextChapterId, setNextChapterId] = useState(64);

  const handleAddChapter = (subjectId, chapterName) => {
    if (!chapterName.trim()) return;
    
    setSubjects(prevSubjects => 
      prevSubjects.map(subject => 
        subject.id === subjectId 
          ? {
              ...subject,
              chapters: [...subject.chapters, {
                id: nextChapterId,
                name: chapterName.trim(),
                rating: 0
              }]
            }
          : subject
      )
    );
    setNextChapterId(prev => prev + 1);
  };

  const handleUpdateRating = (subjectId, chapterId, rating) => {
    setSubjects(prevSubjects => 
      prevSubjects.map(subject => 
        subject.id === subjectId 
          ? {
              ...subject,
              chapters: subject.chapters.map(chapter => 
                chapter.id === chapterId 
                  ? { ...chapter, rating }
                  : chapter
              )
            }
          : subject
      )
    );
  };

  const handleSortChapters = (subjectId) => {
    setSubjects(prevSubjects => 
      prevSubjects.map(subject => 
        subject.id === subjectId 
          ? {
              ...subject,
              chapters: [...subject.chapters].sort((a, b) => b.rating - a.rating)
            }
          : subject
        )
    );
  };

  const addNewSubject = () => {
    const subjectName = prompt('Enter subject name:');
    if (subjectName && subjectName.trim()) {
      const newSubject = {
        id: Date.now(),
        title: subjectName.trim(),
        chapters: []
      };
      setSubjects(prev => [...prev, newSubject]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Devansh Arya IIT</h1>
        <p className="credit-line">made with love by Ashmit bhaiya</p>
        <p>Organize and rate your study chapters by subject</p>
        <button onClick={addNewSubject} className="add-subject-btn">
          + Add New Subject
        </button>
      </header>
      
      <main className="subjects-container">
        {subjects.map(subject => (
          <SubjectColumn
            key={subject.id}
            title={subject.title}
            chapters={subject.chapters}
            onAddChapter={(chapterName) => handleAddChapter(subject.id, chapterName)}
            onUpdateRating={(chapterId, rating) => handleUpdateRating(subject.id, chapterId, rating)}
            onSort={() => handleSortChapters(subject.id)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
