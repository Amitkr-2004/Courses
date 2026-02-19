import '../css/CourseCard.css';

const CourseCard = ({ course, onDetailClick, onEnrollClick }) => {
  return (
    <div className="course-card">
      <h2 className="course-title">{course.title}</h2>
      <p className="course-description">{course.description}</p>
      <div className="course-buttons">
        <button className="btn btn-detail" onClick={() => onDetailClick(course.id)}>Course Detail</button>
        <button className="btn btn-enroll" onClick={() => onEnrollClick()}>Enroll</button>
      </div>
    </div>
  );
};

export default CourseCard;
