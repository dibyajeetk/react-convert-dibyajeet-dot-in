import Accordion from "../../../components/Accordion";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./cover.jpg";
import teamPerformanceReportGif from "./team-performance-report.gif";

function TargetReport() {
  const projectData = {
    name: "Target Reports - for Recruit CRM",
    description:
      "To streamline performance tracking with an auto-recording system that makes individual and team targets visible to everyone.",
    role: "UX Designer",
    duration: "February - March, 2024",
  };
  return (
    <>
      <div className="page-header">
        <img
          className="project-cover-image"
          src={coverImg}
          alt="Cover image: target reports"
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
              <h3 className="sub-header">Overview</h3>
              <p className="text-block">
                The Target Report project introduces an intelligent performance
                tracking feature designed for recruitment leaders. By automating
                the process of setting, tracking, and reporting on targets, it
                replaces time-consuming manual reporting with real-time, visual
                insights. With editable targets, automated dashboards, email
                notifications, and live progress tracking in Recruit CRM, the
                system empowers teams to stay informed, aligned, and focused on
                achieving their goals.
              </p>
            </span>
            <span className="text-block-row">
              <h3 className="sub-header">Stakeholders and Collaborations</h3>
              <p className="text-block">
                For this project, I had to continuously communicate with my
                stakeholders to update them on my progress as well as be
                proactive in seeking out feedback. I checked in regularly with
                the product team
                <span className="highlighted">
                  {" "}
                  Akshay Waghmare, Associate Director Product{" "}
                </span>{" "}
                and
                <span className="highlighted">
                  {" "}
                  Hansaj Sarma, Product Manager{" "}
                </span>
                to identify if the project is going in the correct direction.
                Once the project had reached a desirable state of solving users
                needs the projects was then showcased to
                <span className="highlighted">
                  {" "}
                  Kanchan Singh, Director of Product{" "}
                </span>{" "}
                and
                <span className="highlighted"> Sean Mallapurkar, CEO </span> to
                get the green light for development efforts. Finally, I would
                communicate on a need to know basis with
                <span className="highlighted">
                  {" "}
                  Sachin Patel, Engineering Manager{" "}
                </span>{" "}
                for this project to Identify any limitations and propose
                alternate solution.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Problem Space</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                Our product, Recruit CRM, has a performance tracking feature
                called{" "}
                <span className="highlighted">Team Performance Report</span>,
                designed to help recruitment leaders track team performance and
                target achievements. We have observed that recruitment leaders
                are performing a lot of manual work and repeated data entry, and
                are saving data in external spreadsheets for comparision which
                is causing a significant time and effort sink and is leading to
                inaccurate reporting and a lack of real-time insights.
              </p>
              <p className="text-block-emphasis">
                <i className="bi bi-exclamation-octagon-fill ico"></i>
                <strong>The Challenge: </strong>
                How might we streamline the target tracking workflow so that our
                customers are more successful?
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <img
            className="caselet-images"
            src={teamPerformanceReportGif}
            alt="Team Performance report"
          />
          <p className="caption">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            quos.
          </p>
        </section>

        <Accordion title="Read Details" />
      </div>
    </>
  );
}

export default TargetReport;
