import { useState, useEffect } from 'react';
import api from '../api/api';
import { toast } from 'react-toastify';
import CourseCard from '../components/CourseCard';
import CourseDetailModal from '../components/CourseDetailModal';
import EnrollModal from '../components/EnrollModal';
import AddCourseModal from '../components/AddCourseModal';
import '../css/Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const fetchCourses = () => {
    api.get('/courses/')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  };

  const handleDelete = (id) => {
    api.delete(`/courses/${id}/`)
      .then(() => {
        toast.success('Course deleted successfully!');
        fetchCourses();
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Courses Offered</h1>
        <button className="btn-action" onClick={() => setShowAddCourseModal(true)}>
          + Add Course
        </button>
      </div>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onDetailClick={(id) => setSelectedCourseId(id)}
            onEnrollClick={() => setShowEnrollModal(true)}
            onDeleteClick={handleDelete}
          />
        ))}
      </div>
      {selectedCourseId && (
        <CourseDetailModal
          courseId={selectedCourseId}
          onClose={() => setSelectedCourseId(null)}
        />
      )}
      {showEnrollModal && (
        <EnrollModal
          onClose={() => setShowEnrollModal(false)}
        />
      )}
      {showAddCourseModal && (
        <AddCourseModal
          onClose={() => setShowAddCourseModal(false)}
          onCourseAdded={fetchCourses}
        />
      )}
    </div>
  );
};

export default Courses;
