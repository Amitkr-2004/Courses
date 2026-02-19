import '../css/CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h2 className="course-title">{course.title}</h2>
      <p className="course-description">{course.description}</p>
      <div className="course-buttons">
        <button className="btn btn-detail">Course Detail</button>
        <button className="btn btn-enroll">Enroll</button>
      </div>
    </div>
  );
};

export default CourseCard;
