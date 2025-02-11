import './MainTable.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainTable = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => {
        setStudents(response.data);
        setFilteredStudents(response.data); 
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const filterByBranch = (branch) => {
    setSelectedBranch(branch);
    if (branch === 'All') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(student => student.branch === branch);
      setFilteredStudents(filtered);
    }
  };

  const getBranchNames = () => {
    const branches = students.map(student => student.branch);
    return ['All', ...new Set(branches)]; 
  };

  const getSerialNumbers = (students) => {
    let serialNumbers = [];
    let currentSerial = 1;

    for (let i = 0; i < students.length; i++) {
      if (i > 0 && students[i].cgpa !== students[i - 1].cgpa) {
        currentSerial = i + 1; 
      }
      serialNumbers.push(currentSerial);
    }

    return serialNumbers;
  };

  const serialNumbers = getSerialNumbers(filteredStudents);

  return (
    <div>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="branch-buttons">
            {getBranchNames().map((branch, index) => (
              <button
                key={index}
                onClick={() => filterByBranch(branch)}
                className={selectedBranch === branch ? 'active' : ''}
              >
                {branch}
              </button>
            ))}
          </div>

          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Reg-No</th>
                <th>Branch</th>
                <th>Section</th>
                <th>Sem 1</th>
                <th>Sem 2</th>
                <th>CGPA</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{serialNumbers[index]}</td>
                    <td>{student.name}</td>
                    <td>{student.roll_no}</td>
                    <td>{student.branch}</td>
                    <td>{student.section}</td>
                    <td>{student.sem1}</td>
                    <td>{student.sem2}</td>
                    <td>{student.cgpa}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No students found for this branch.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MainTable;
