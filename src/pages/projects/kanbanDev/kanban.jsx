import Accordion from "../../../components/Accordion";
import ImageSlider from "../../../components/ImageSlider";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./cover-kanban.jpg";
import kanbanBoard from "./kanban-board.jpg";

function kanbanDev() {
  const projectData = {
    name: "Interactive Kanban Board",
    description:
      "Designing and coding a high-fidelity task management kanban prototype to validate real-world browser rendering, component interactions, and dynamic UI states",
    role: "Product Designer & Front-End Prototype",
    duration: "3 Days (Jan, 2026)",
    stacks: "Figma, HTML5, CSS3, Vanilla JS",
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
          stacks={projectData.stacks}
        />
      </div>
      <div className="page-contents">
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Overview & Objective</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                Built a code-backed Kanban prototype directly in HTML, CSS, and
                vanilla JavaScript to audit design system components against
                actual browser rendering.
              </p>
              <p className="text-block">
                The primary goal was to preemptively test Figma specs in a real
                DOM environment, identify visual or spatial inconsistencies
                (such as subpixel alignment, flexbox wrapping, or button padding
                oddities), and tune the Figma design tokens to match the live
                build 1:1. Everything without needing an engineering team to
                spin up test builds.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Why Code It?</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                AI workflows and code-backed design systems are shifting early
                prototyping into browser environments. Building in code allows
                rapid testing of functional states without spending cycles on
                redundant, static wireframe iterations.
              </p>
              <p className="text-block">
                Design tools like Figma often obscure real-world browser
                issues—like flexbox wrapping, button padding alignment, color
                contrast behavior, and subpixel rendering. Designing with direct
                CSS knowledge prevents downstream design QA friction.
              </p>
              <p className="text-block">
                Prototyping front-end components independently allows designers
                to deliver production-ready UI tokens and interaction logic,
                eliminating back-and-forth alignment during sprint execution.
              </p>
            </span>
          </span>
        </section>

        <div className="break"></div>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Design Tokens and Wireframes</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                Initial layout mapping, wireframes, OKLCH color token
                definition, and column hierarchy specs all were defined before
                moving to code.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">
            Wireframe: displaying the kanban board and drag and drop interaction
          </p>
          <img
            className="caselet-images"
            src={kanbanBoard}
            alt="Drag and drop Chart Cards"
          />
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Code & Live Demo</h3>
            <span className="single-col-text-block-sm">
              <div className="buttons-container">
                <a
                  href="https://github.com/uxdibyajeet/kanban-board"
                  className="about-link"
                >
                  <i className="bi bi-github"></i> View Github Repo
                </a>
                <a
                  href="https://uxdibyajeet.github.io/kanban-board/"
                  className="about-link"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right"></i> View Live
                  Prototype
                </a>
              </div>
            </span>
          </span>
        </section>
        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Key Highlights & Learnings</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                Implemented clean JavaScript event handlers for task creation,
                column transfers, and status updating without framework bloat.
              </p>
              <p className="text-block">
                Applied fluid grid and flexbox mechanics to guarantee UI
                resilience across varying screen widths.
              </p>
              <p className="text-block">
                Ensured zero layout shift or visual drift between the raw design
                tokens and final browser rendering.
              </p>
            </span>
          </span>
        </section>

        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Impact</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                Delivered code-accurate visual specs that match browser
                rendering behavior 1:1.
              </p>
              <p className="text-block">
                Reduced time-to-test for interactive Kanban features by running
                directly in the web browser.
              </p>
              <p className="text-block">
                Standardized design specs around CSS variables and semantic HTML
                to streamline developer handoff.
              </p>
            </span>
          </span>
        </section>

        {/* <Accordion title="Read Details" /> */}
      </div>
    </>
  );
}

export default kanbanDev;
