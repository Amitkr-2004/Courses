import { useState, useEffect } from 'react';
import api from '../api/api';
import '../css/Enrolled.css';

const Enrolled = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    api.get('/enrollment/')
      .then((response) => {
        setEnrollments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching enrollments:', error);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Enrolled Students</h1>
      </div>
      {enrollments.length === 0 ? (
        <div className="empty-state">
          <p>No enrollments yet.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="enrolled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>School</th>
                <th>Enrollment Date</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id}>
                  <td>{enrollment.name}</td>
                  <td>{enrollment.grade}</td>
                  <td>{enrollment.school}</td>
                  <td>{new Date(enrollment.enrollment_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Enrolled;
