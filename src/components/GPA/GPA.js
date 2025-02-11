import React, { useState } from 'react';
import './GPA.css';

const CGPACalculator = () => {
  // Initialize with 5 subjects by default
  const [subjects, setSubjects] = useState([
    { gradePoints: '10', credits: '' },
    { gradePoints: '10', credits: '' },
    { gradePoints: '10', credits: '' },
    { gradePoints: '10', credits: '' },
    { gradePoints: '10', credits: '' },
    { gradePoints: '10', credits: '' }
  ]);
  const [cgpa, setCgpa] = useState(null);

  // Handle input changes for grade points and credits
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newSubjects = [...subjects];
    newSubjects[index][name] = value;
    setSubjects(newSubjects);
  };

  // Add a new subject row
  const addSubject = () => {
    setSubjects([...subjects, { gradePoints: '10', credits: '' }]);
  };

  // Remove a subject row (Only allow removal if more than 5 rows exist)
  const removeSubject = (index) => {
    if (subjects.length > 5) {
      const newSubjects = subjects.filter((_, i) => i !== index);
      setSubjects(newSubjects);
    }
  };

  // Calculate CGPA
  const calculateCGPA = (event) => {
    event.preventDefault();
    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
      const gradePoints = parseFloat(subject.gradePoints);
      const credits = parseFloat(subject.credits);
      if (!isNaN(gradePoints) && !isNaN(credits)) {
        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits > 0) {
      const calculatedCgpa = totalGradePoints / totalCredits;
      setCgpa(calculatedCgpa.toFixed(2));
    } else {
      setCgpa('N/A');
    }
  };

  // Reset the form
  const resetForm = () => {
    setSubjects([
      { gradePoints: '10', credits: '' },
      { gradePoints: '10', credits: '' },
      { gradePoints: '10', credits: '' },
      { gradePoints: '10', credits: '' },
      { gradePoints: '10', credits: '' },
      { gradePoints: '10', credits: '' }
    ]);
    setCgpa(null);
  };

  return (
    <div className="calculator-container">
      <h2>CGPA Calculator</h2>
      <form onSubmit={calculateCGPA}>
        {subjects.map((subject, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <select
              name="gradePoints"
              value={subject.gradePoints}
              onChange={(e) => handleInputChange(index, e)}
            >
              <option value="10">O</option>
              <option value="9">A+</option>
              <option value="8">A</option>
              <option value="7">B+</option>
              <option value="6">B</option>
              <option value="5.5">C</option>
              <option value="0">W</option>
              <option value="0">Ab</option>
              <option value="0">*</option>
              <option value="0">I</option>
              <option value="0">F</option>
            </select>
            <input
              type="number"
              name="credits"
              value={subject.credits}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Credits"
              step="0.01"
              min="0"
              required
              style={{ marginLeft: '10px' }}
            />
            {subjects.length > 6 && (
              <button
                type="button"
                onClick={() => removeSubject(index)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="button-container">
  <button type="button" onClick={addSubject}>Add Subject</button>
  <button type="submit">Calculate CGPA</button>
  <button type="button" onClick={resetForm}>Clear</button>
</div>


      </form>
      
      {cgpa !== null && <h3>Your CGPA: {cgpa}</h3>}
    </div>
  );
};

export default CGPACalculator;