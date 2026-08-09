import "../css/ProjectHighlights.css";

function ProjectHighlites({ name, desc, role, duration, stacks }) {
  return (
    <div className="project-info">
      <h1>{name}</h1>
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
          <span>
            <p className="strong-text">Tools</p>
            <p>{stacks}</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProjectHighlites;
