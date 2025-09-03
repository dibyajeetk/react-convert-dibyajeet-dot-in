import "../css/Home.css";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Admin Settings Redesign",
      desc: "My approach to the settings experience for Recruit CRM",
      tags: ["Visual Design", "UI", "UX"],
    },
    {
      id: 2,
      title: "Target Report - for Recruit CRM",
      desc: "A comprehensive Report module for Recruitment Leaders to assess productivity.",
      tags: ["Product Design"],
    },
  ];
  return (
    <>
      <div className="hero-section">
        <span className="text-col">
          <h1 className="greet-text">Hey there! I'm Dibyajeet</h1>
          <p className="greet-content">
            Product Designer crafting experiences that are intuitive and
            empowering for everyone.
          </p>
          <span className="status-badge">
            <span className="dot"></span>
            <p>Actively Looking For New Opportunity</p>
          </span>
        </span>
        <span className="illustration">
          <img
            src="./src/assets/hero-image.svg"
            alt="Illustration of a pencil"
            className="hero-image"
          />
        </span>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
