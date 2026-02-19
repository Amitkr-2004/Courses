import { useState } from 'react';
import api from '../api/api';
import '../css/EnrollModal.css';

const EnrollModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    school: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/enrollment/', formData)
      .then(() => {
        alert('Enrolled successfully!');
        onClose();
      })
      .catch((error) => {
        console.error('Error enrolling:', error);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Enroll Now</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Grade</label>
          <input
            type="number"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
          <label>School</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-enroll">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollModal;
