import Accordion from "../../../components/Accordion";
import ImageSlider from "../../../components/ImageSlider";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./cover.jpg";
import whiteboardTargetReport from "./whiteboarding.jpg";
import teamPerformanceReportGif from "./team-performance-report.gif";
import explorationA from "./exploration-1.jpg";
import explorationB from "./exploration-2.jpg";
import explorationC from "./exploration-3.jpg";
import navigationGif from "./navigation.gif";
import createTargetGif from "./create-target.gif";
import listViewGif from "./list-view.gif";

function TargetReport() {
  const projectData = {
    name: "Target Reports - for Recruit CRM",
    description:
      "To streamline performance tracking with an auto-recording system that makes individual and team targets visible to everyone.",
    role: "UX Designer",
    duration: "February - March, 2024",
  };
  const earlyExplorations = [
    {
      url: explorationA,
      title: "Report View Exploration - 1",
    },
    {
      url: explorationB,
      title: "Report View Exploration - 2",
    },
    {
      url: explorationC,
      title: "Report View Exploration - 3",
    },
  ];
  const TargetManagementImages = [
    { url: navigationGif, title: "Final screens - navigate to Target KPIs" },
    { url: createTargetGif, title: "Final screens - create new target" },
    { url: listViewGif, title: "Final screens - list view of all targets" },
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
              <span className="single-col-text-block-sm">
                <p className="text-block">
                  Throughout this project, I took a proactive approach to
                  collaboration, ensuring continuous communication with key
                  stakeholders to keep the project on track.
                </p>
                <ul>
                  <li>
                    <strong>Product Team: </strong>I had regular check-ins with
                    <span className="highlighted">
                      {" "}
                      Akshay Waghmare, Associate Director Product{" "}
                    </span>
                    and
                    <span className="highlighted">
                      {" "}
                      Hansaj Sarma, Product Manager{" "}
                    </span>{" "}
                    to ensure the project was always moving in the right
                    direction.
                  </li>
                  <li>
                    <strong>Leadership Collaboration: </strong> Once the project
                    was in a desirable state, I showcased the work to{" "}
                    <span className="highlighted">
                      Kanchan Singh, Director of Product
                    </span>
                    , and{" "}
                    <span className="highlighted">Sean Mallapurkar, CEO</span>,
                    to get the final green light for development.
                  </li>
                  <li>
                    <strong>Engineering: </strong> I collaborated with{" "}
                    <span className="highlighted">
                      Sachin Patel, Engineering Manager
                    </span>
                    , once development started to identify any technical
                    limitations and proactively propose alternative solutions.
                  </li>
                </ul>
              </span>
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
                competitor analysis to see how both direct and indirect rivals
                were addressing similar reporting feature in their own products.
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
          <p className="caption">
            <strong>Image Slide:</strong> Early Design Explorations
          </p>
          <ImageSlider slides={earlyExplorations} />
        </section>
        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <span className="header-block">
              <p className="caption-big">Finalising Design - 1</p>
              <h3 className="sub-header">Target KPIs Management</h3>
            </span>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                Originally, I thought the reports module would be the best entry
                point for this feature. However, to accommodate the need for
                access controls since some roles shouldn't see these reports, it
                made more sense to keep it within the Admin Settings.
              </p>
              <ul>
                <li>
                  Created <strong>Empty State</strong> when there are no records
                </li>
                <li>
                  Designed <strong>Create Target Modal</strong> with necessary
                  fields
                </li>
                <li>
                  Worked on <strong>List View</strong> to show case all Target
                  Records
                </li>
              </ul>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">
            <strong>Image Slide 2:</strong> Final Design - Target KPIs
            Management
          </p>
          <ImageSlider slides={TargetManagementImages} />
        </section>
        <div className="spacer-lg"></div>
        <section className="section">
          <span className="text-block-row">
            <span className="header-block">
              <p className="caption-big">Finalising Design - 2</p>
              <h3 className="sub-header">Target Report Dashboard</h3>
            </span>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                A major challenge for the Target Reports project was visualizing
                multiple KPIs at once for both teams and individuals. Our
                existing design system didn't have a good way to handle this,
                and most competitors were only showing one KPI at a time. This
                meant I had to create a new approach to data visualization that
                still felt consistent with our products design language.
              </p>
              <ul>
                <li>
                  Modeled <strong>Target Report Dashboard</strong> based on the
                  existing reports design
                </li>
                <li>
                  To handle the possibility of a single target having up to 32
                  KPIs, I designed the charts as expandable cards. This allows
                  users to get a high-level view and then expand a specific
                  chart for a better look when they need to.
                </li>
              </ul>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">
            <strong>Image Slide 4:</strong> Final Design - Target Reports View
          </p>
          <ImageSlider slides={TargetManagementImages} />
        </section>

        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Project Outcomes</h3>
            <span className="single-col-text-block-sm">
              <div className="achievement-banner">
                <div className="icon-container">
                  <i className="bi bi-trophy-fill xl-icon"></i>
                </div>
                <span className="content">
                  <p className="achvmnt-header">BUSINESS IMPACT UNLOCKED</p>
                  <p className="achvmnt-body">
                    Contributed to a 100-seat deal and made "Target Reports" a
                    key sales differentiator.
                  </p>
                </span>
              </div>
              <p className="text-block">
                The Target Reports module was a huge success, and now our sales
                team is actively using it as a key differentiator in their
                pitches. It really shows that we built something valuable that's
                making real business impact.
              </p>
            </span>
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

export default TargetReport;
