import "../css/Home.css";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

import heroImageSvg from "../../src/assets/hero-image.svg";
import TargetReportCover from "./projects/targetReport/cover.jpg";
import PhoneCallingCover from "./projects/phoneCalling/cover-phone-calling.jpg";
import SyncUpCover from "./projects/syncUp/task-management-cover.jpg";
import kanbanCover from "./projects/kanbanDev/cover-kanban.jpg";

function Home() {
  const projects = [
    {
      id: 1,
      title: "Interactive Kanban Board",
      desc: "A code-first prototyping study, bridging Figma design tokens with actual browser rendering to eliminate visual drift and test drag-and-drop interactions.",
      tags: ["Frontend Working Prototype", "Ui design", "Self-Initiated"],
      coverImage: kanbanCover,
      path: "/kanban",
    },
    {
      id: 2,
      title: "SyncUp",
      desc: "Task management app for the power users.",
      tags: ["Visual Design", "Self-Initiated", "Ui design"],
      coverImage: SyncUpCover,
      path: "/sync-up",
    },
    {
      id: 3,
      title: "Incomming Calls and Phone Number Purchase - for Recruit CRM",
      desc: "A scalable two-way calling system that empowered users to manage their own virtual numbers",
      tags: ["Product Design", "Live Project"],
      coverImage: PhoneCallingCover,
      path: "/phone-calling",
    },
    {
      id: 4,
      title: "Target Report - for Recruit CRM",
      desc: "A comprehensive Report module for Recruitment Leaders to assess productivity.",
      tags: ["Product Design", "Live Project"],
      coverImage: TargetReportCover,
      path: "/target-report",
    },
  ];
  return (
    <>
      <div className="hero-section">
        <span className="text-col">
          <h1 className="greet-text">Hey there! I'm Dibyajeet</h1>
          <p className="greet-content">
            Turning complex business problems into simple, useful features.
          </p>
          <span className="status-badge">
            <span className="dot"></span>
            <p>2+ Years In The SaaS Design Game</p>
          </span>
        </span>
        <span className="illustration">
          <img
            src={heroImageSvg}
            alt="Illustration of a pencil"
            className="hero-image"
          />
        </span>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.desc}
              tags={project.tags}
              coverImage={project.coverImage}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
