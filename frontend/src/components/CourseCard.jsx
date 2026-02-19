import '../css/CourseCard.css';

const CourseCard = ({ course, onDetailClick, onEnrollClick, onDeleteClick }) => {
  return (
    <div className="course-card">
      <div className="course-card-top">
        <span className="course-category">{course.category}</span>
        <button className="btn-delete" onClick={() => onDeleteClick(course.id)}>Delete</button>
      </div>
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
