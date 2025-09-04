import "../css/ProjectCard.css";
import React, { useState } from "react";

function ProjectCard({ title, desc, tags = [], coverImage }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={isHovered ? "hover-state" : "default-state"}>
        {!isHovered ? (
          <img className="cover-image" src={coverImage} alt={title} />
        ) : (
          <>
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{desc}</p>
            <div className="tags-container">
              {tags &&
                tags.map((tag, index) => (
                  <span key={index} className="tag">
                    <i className="bi bi-hash sm-icon"></i>
                    <span className="tag-text">{tag}</span>
                  </span>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
