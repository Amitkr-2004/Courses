import { useState, useEffect } from 'react';
import api from '../api/api';
import CourseCard from '../components/CourseCard';
import CourseDetailModal from '../components/CourseDetailModal';
import EnrollModal from '../components/EnrollModal';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  useEffect(() => {
    api.get('/courses/')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div>
      <h1>Courses Offered</h1>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onDetailClick={(id) => setSelectedCourseId(id)}
          onEnrollClick={() => setShowEnrollModal(true)}
        />
      ))}
      {selectedCourseId && (    //model only renders when courseId exists
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
    </div>
  );
};

export default Courses;
