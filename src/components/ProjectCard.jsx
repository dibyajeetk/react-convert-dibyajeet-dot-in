import "../css/ProjectCard.css";
function ProjectCard() {
  return (
    <div className="card-container">
      <div className="default-state">
        <img
          className="cover-image"
          src="./src/assets/test-cover.png"
          alt="project title"
        />
      </div>
      <div className="hover-state">
        <h2 className="project-title">Admin Settings Redesign</h2>
        <p className="project-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          laboriosam a deleniti magni sunt nostrum.
        </p>
        <div className="tags-container">
          <span className="tag">
            <i className="bi bi-hash sm-icon"></i>
            <p className="tag-text">ui design</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
