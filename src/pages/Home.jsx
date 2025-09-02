import "../css/Home.css";
import ProjectCard from "../components/ProjectCard";

function Home() {
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
        <ProjectCard />
      </div>
    </>
  );
}

export default Home;
