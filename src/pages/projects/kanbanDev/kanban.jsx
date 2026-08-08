import Accordion from "../../../components/Accordion";
import ImageSlider from "../../../components/ImageSlider";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./task-management-cover.jpg";

function SyncUp() {
  const projectData = {
    name: "SyncUp - Task Management",
    description: "Designing task management interface for power users",
    duration: "3 Days (March, 2025)",
  };
  return (
    <>
      <div className="page-header">
        <img
          className="project-cover-image"
          src={coverImg}
          alt="Cover image: Sync Up - cover image"
        />
        <ProjectHighlites
          name={projectData.name}
          desc={projectData.description}
          role={projectData.role}
          duration={projectData.duration}
        />
      </div>
      <div className="page-contents">
        <section className="section">
          <span className="single-col-text-block">
            <span className="text-block-row">
              <h3 className="sub-header">Introduction</h3>
              <p className="text-block">
                To Design the task details page of a task managent web app in 3
                days, that includes a "Micro Design System", "Add Tasks",
                "Create Subtask" flows along with some of the common edge cases.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <span className="text-block-row">
            <p className="text-block-emphasis">
              <i className="bi bi-exclamation-octagon-fill ico"></i>
              <strong>The Challenge: </strong>
              How might we design the “SyncUp” task details page UI so that our
              power users such as Maya can view all task details and create
              subtasks with minimal clicks and cognitive load?
            </p>
          </span>
        </section>

        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Takeaways</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                This project was a wild ride, and my first real taste of
                building a complex product. I had to quickly learn to embrace a
                fast-paced environment without the safety net of a design system
                or a senior mentor.
              </p>
              <p className="text-block">
                It was all about being an executionist and taking a proactive
                approach. Since I wasn't able to have direct user interactions,
                my weekly stand-ups with the CEO became crucial, helping me
                build a strong understanding of our users' perspectives.
              </p>
              <p className="text-block">
                I learned that sometimes, a Lean UX process is the way to go.
                It's tough for users to give solid feedback on something they
                haven't seen, so it's better to build a real MVP and iterate.
                The experience of painstakingly testing and learning user
                behavior gave me a deep understanding of what our users really
                need.
              </p>
            </span>
          </span>
        </section>

        {/* <Accordion title="Read Details" /> */}
      </div>
    </>
  );
}

export default SyncUp;
