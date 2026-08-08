import Accordion from "../../../components/Accordion";
import ImageSlider from "../../../components/ImageSlider";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./task-management-cover.jpg";
import persona from "./persona.jpg";
import designSystemOne from "./design-system-1.jpg";
import designSystemTwo from "./design-system-2.jpg";
import taskDetailScreen from "./task-details-screen.jpg";
import addSubtaskFlow from "./add-subtask-flow.gif";
import addComment from "./adding-comment.gif";
import taskListPage from "./task-list-page.jpg";
import overDueTask from "./over-due-screen.jpg";
import blockedTask from "./blocked-task.jpg";

function SyncUp() {
  const projectData = {
    name: "SyncUp - Task Management",
    description: "Designing task management interface for power users",
    duration: "3 Days (March, 2025)",
    role: "UI and UX designer",
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
              <h3 className="sub-header">Introduction & Scope</h3>
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
            <h3 className="sub-header">Proto Persona</h3>
            <p className="text-block">
              First step was to create this proto persona based on assumptions
              to note down the needs of the apps target user.
            </p>
            <section className="section">
              <p className="caption">
                image - displaying proto persona: Maya user of syncUp
              </p>
              <img
                className="caselet-images"
                src={persona}
                alt="Drag and drop Chart Cards"
              />
            </section>
          </span>
          <span className="text-block-row">
            <h3 className="sub-header">Solution Hypothesis</h3>
            <p className="text-block">
              We believe that equipping SyncUp with inline editing, bulk actions
              for managing tasks and subtasks, minimal-click action flows, and
              instant real-time updates will significantly improve users'
              operational efficiency and overall system experience because it
              eliminates redundant navigation, speeds up list management, and
              provides immediate visual feedback.
            </p>
          </span>
        </section>

        <div className="break"></div>

        <section className="section">
          <span className="single-col-text-block-sm">
            <h3 className="sub-header">Design System</h3>
            <p className="text-block">
              "SyncUp" is a hypothetical product concept created for this case
              study. The initial phase focused on building the project
              scaffolding.
            </p>
            <p className="text-block">
              To lay a scalable foundation, I engineered a micro design system
              featuring standardized color palettes, typography hierarchies, and
              foundational atomic components (buttons, input fields, dropdowns,
              and status badges). To maximize modularity, each component
              leverages component property slots and flexible instance swapping
              to seamlessly compose atomic elements into custom, complex UI
              patterns while maintaining complete visual consistency.
            </p>
            <section className="section"></section>
          </span>
          <section className="section">
            <p className="caption">Design System: Foundations</p>
            <img
              className="caselet-images"
              src={designSystemOne}
              alt="Drag and drop Chart Cards"
            />
          </section>
          <section className="section">
            <p className="caption">Design System: Components</p>
            <img
              className="caselet-images"
              src={designSystemTwo}
              alt="Drag and drop Chart Cards"
            />
          </section>
        </section>

        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Solution Screens</h3>
            <p className="text-block">
              According to the scope of this project this includes the task
              details page, add sub-task flow and some edge case screens.
            </p>
          </span>
        </section>
        <section className="section">
          <p className="caption">Screen Design: Task List Page</p>
          <img
            className="caselet-images"
            src={taskListPage}
            alt="Drag and drop Chart Cards"
          />
        </section>
        <section className="section">
          <p className="caption">Screen Design: Task Details Page</p>
          <img
            className="caselet-images"
            src={taskDetailScreen}
            alt="Drag and drop Chart Cards"
          />
        </section>
        <section className="section">
          <p className="caption">Flow: Adding a Sub task</p>
          <img
            className="caselet-images"
            src={addSubtaskFlow}
            alt="Drag and drop Chart Cards"
          />
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Why Inline?</h3>

            <p className="text-block">
              1. Maya stays in the primary list view, maintaining visual
              relationship between tasks and subtasks while completing fields.
            </p>
            <p className="text-block">
              2. Inline expansion removes modal triggers, enabling quick
              submission via the Enter key.
            </p>
            <p className="text-block">
              3. The input form sits at the end of the subtask tree for
              predictable, continuous scrolling on long lists.
            </p>
            <p className="text-block">
              4. Direct inline feedback updates the list immediately, removing
              the need for auxiliary toast notifications.
            </p>
          </span>
        </section>

        <section className="section">
          <p className="caption">
            Comms: Activities Section double down as the comment and
            communication section.
          </p>
          <img
            className="caselet-images"
            src={addComment}
            alt="Drag and drop Chart Cards"
          />
        </section>

        <section className="section">
          <p className="caption">Edge Case: Over Due Task</p>
          <img
            className="caselet-images"
            src={overDueTask}
            alt="Drag and drop Chart Cards"
          />
        </section>
        <section className="section">
          <p className="caption">
            Edge Case: Blocked Task, this appears when an interdepent task is
            not marked done. Hence, blocking the main task from marking done.
          </p>
          <img
            className="caselet-images"
            src={blockedTask}
            alt="Drag and drop Chart Cards"
          />
        </section>

        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Project Outcomes</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                What started as a self-imposed sprint to test execution speed
                turned into a comprehensive study on friction reduction for
                power users. By constraining the timeline, I focused strictly on
                high-impact UX improvements proving that thoughtful, inline UI
                patterns can eliminate modal overhead without sacrificing visual
                structure or system scalability.
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
