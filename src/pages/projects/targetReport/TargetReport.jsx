import Accordion from "../../../components/Accordion";
import ImageSlider from "../../../components/ImageSlider";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./cover.jpg";
import whiteboardTargetReport from "./whiteboarding.jpg";
import teamPerformanceReportGif from "./team-performance-report.gif";

function TargetReport() {
  const projectData = {
    name: "Target Reports - for Recruit CRM",
    description:
      "To streamline performance tracking with an auto-recording system that makes individual and team targets visible to everyone.",
    role: "UX Designer",
    duration: "February - March, 2024",
  };
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "test",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      title: "test2",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
      title: "test3",
    },
  ];
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
                are performing a lot of manual work including saving data in
                external spreadsheets for comparision which is causing a
                significant time and effort sink and is leading to inaccurate
                reporting and a lack of real-time insights.
              </p>
              <p className="text-block-emphasis">
                <i className="bi bi-exclamation-octagon-fill ico"></i>
                <strong>The Challenge: </strong>
                How might we streamline the target tracking workflow so that our
                customers spend less time on administrative tasks and more time
                on actual recruitment work?
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">
            <strong>Image 1:</strong> Showcasing how Team Performance Reports
            work
          </p>
          <img
            className="caselet-images"
            src={teamPerformanceReportGif}
            alt="Team Performance report"
          />
        </section>
        <div className="break"></div>
        <p className="banner-info">
          <i className="bi bi-info-circle-fill ico-info"></i>
          Our report module's external API is slow and clunky, especially when
          generating historical data from large data sets. Therefore, to avoid
          adding engineering complexity and further degrading performance, we
          chose <strong>not to include the target tracking feature </strong> as
          an addition to <strong>Team Performance Report</strong>.
        </p>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Solution Hypothesis</h3>

            <p className="text-block">
              We believe that developing a{" "}
              <strong>dedicated "Target Reports" module</strong> for{" "}
              <strong>recruitment teams</strong> will streamline their workflow,
              saving them significant time on manual administrative tasks. We
              will know this is true when we see a{" "}
              <strong>high adoption rate</strong> of the new feature and a{" "}
              <strong>
                measurable increase in our customer Net Promoter Score (NPS)
              </strong>{" "}
              .
            </p>
          </span>
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Solution Sub-Hypothesis</h3>
            <table>
              <thead>
                <tr>
                  <th>We will create</th>
                  <th>For</th>
                  <th>In order to</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-dark">Target KPIs Management</td>
                  <td className="td-dark">Recruitment Leaders</td>
                  <td className="td-dark">
                    Easily create and manage Target records
                  </td>
                </tr>
                <tr>
                  <td className="td-base">Target Reports Dashboard</td>
                  <td className="td-base">Recruitment Leaders and Teammates</td>
                  <td className="td-base">
                    Check live progress of assigned targets
                  </td>
                </tr>
                <tr>
                  <td className="td-dark">Public Sharing Reports</td>
                  <td className="td-dark">Recruitment Leaders and Teammates</td>
                  <td className="td-dark">
                    Enable managers to display live target progress on a
                    separate screen for their team without requiring them to log
                    in
                  </td>
                </tr>
                <tr>
                  <td className="td-base">Email Notifications</td>
                  <td className="td-base">Teammates</td>
                  <td className="td-base">
                    Notify when a target is assigned, reached or missed
                  </td>
                </tr>
                <tr>
                  <td className="td-dark">Multi KPI Targets</td>
                  <td className="td-dark">Recruitment Leaders</td>
                  <td className="td-dark">
                    foster better organization and strategic alignment, targets
                    records will accommodate multiple performance metrics.
                  </td>
                </tr>
                <tr>
                  <td className="td-base">Customizable Dashboard</td>
                  <td className="td-base">Recruitment Leaders and Teammates</td>
                  <td className="td-base">
                    View and prioritize multiple KPIs with simple drag-and-drop
                    reordering.
                  </td>
                </tr>
                <tr>
                  <td className="td-dark">Chart On-Hover Cards</td>
                  <td className="td-dark">Recruitment Leaders and Teammates</td>
                  <td className="td-dark">
                    reveal a tooltip with specific statistics and additional
                    details, for all chart bars.
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
        </section>
        <div className="break"></div>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Design Process</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                My design process began with a comprehensive audit of the
                existing Report Module's design language, including its
                patterns, components, fonts, and icons. I also conducted a
                thorough competitor analysis to see how both direct and indirect
                rivals were addressing similar reporting challenges in their own
                products.
              </p>
              <p className="text-block">
                With a solid foundation from my research, I moved to the drawing
                board. My focus shifted to low-fidelity wireframes to plan the
                information architecture and navigation, ensuring the new
                target-tracking feature would be intuitive and seamlessly
                integrated.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">
            <strong>Image 2:</strong> Ideation, Sketches and Whiteboarding
          </p>
          <img
            className="caselet-images"
            src={whiteboardTargetReport}
            alt="Team Performance report"
          />
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Design Challenges</h3>
            <span className="single-col-text-block-sm">
              <ol>
                <li>
                  Recruit CRM lacks a unified design system. This has resulted
                  in inconsistencies in colors and layout for the same component
                  throughout the application, making it difficult to establish a
                  standard.
                </li>
                <li>
                  When I was working on the Target Reports project, one of the
                  biggest challenges was figuring out how to show multiple KPIs
                  for teams and individuals all at once. Since our other report
                  modules already had their own design rules, it was tough to
                  get the charts to look right. On top of that, most competitors
                  were only ever showing one KPI at a time, so I really had to
                  come up with some new, creative ways to solve this.
                </li>
              </ol>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">
            <strong>Image 3:</strong> Early Design Explorations
          </p>
          <ImageSlider slides={slides} />
          <img
            className="caselet-images"
            src={teamPerformanceReportGif}
            alt="Team Performance report"
          />
        </section>
        <div className="break"></div>

        {/* <Accordion title="Read Details" /> */}
      </div>
    </>
  );
}

export default TargetReport;
