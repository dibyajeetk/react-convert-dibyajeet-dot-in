import "../css/ProjectHighlights.css";

function ProjectHighlites({ name, desc, role, duration }) {
  return (
    <div className="project-info">
      <h2>{name}</h2>
      <div className="data-row-info">
        <span className="main-info">
          <p className="strong-text">Brief</p>
          <p>{desc}</p>
        </span>
        <span className="col">
          <span>
            <p className="strong-text">My Role</p>
            <p>{role}</p>
          </span>
          <span>
            <p className="strong-text">Duration</p>
            <p>{duration}</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProjectHighlites;
