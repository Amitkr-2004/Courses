import { useState, useEffect } from 'react';
import api from '../api/api';
import '../css/CourseDetailModal.css';

const CourseDetailModal = ({ courseId, onClose }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${courseId}/`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course detail:', error);
      });
  }, [courseId]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {course ? (
          <>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p><strong>Category:</strong> {course.category}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetailModal;
