import { useState } from 'react';
import api from '../api/api';
import { toast } from 'react-toastify';
import '../css/AddCourseModal.css';

const AddCourseModal = ({ onClose, onCourseAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/courses/', formData)
      .then(() => {
        toast.success('Course added successfully!');
        onCourseAdded();
        onClose();
      })
      .catch((error) => {
        console.error('Error adding course:', error);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Add New Course</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          />
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-enroll">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
