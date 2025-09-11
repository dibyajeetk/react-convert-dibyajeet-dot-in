import Accordion from "../../../components/Accordion";
import ImageSlider from "../../../components/ImageSlider";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./cover-phone-calling.jpg";

function PhoneCalling() {
  const projectData = {
    name: "Incomming Calls and Phone Number Purchase - for Recruit CRM",
    description:
      "To design a scalable system that enabled two-way calls and empowered users with virtual number management.",
    role: "UX Designer",
    duration: "Oct - Dec, 2024",
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
                I led the design of a self-service phone number purchasing
                system for Recruit CRM that eliminated manual engineering
                processes and enabled incoming call functionality. The 10-week
                project required balancing complex technical constraints,
                regulatory compliance, and user experience to deliver a scalable
                solution that reduced support tickets and freed up engineering
                resources.
              </p>
            </span>
            <span className="text-block-row">
              <h3 className="sub-header">Timeline</h3>
              <p className="text-block">
                Originally scoped for 3 weeks, this project extended to 10 weeks
                due to evolving technical requirements discovered through
                iterative design reviews. Each engineering feedback session
                revealed new constraints that required design pivots. I adapted
                by implementing a more collaborative approach with frequent
                technical validation, ultimately delivering the final design
                solution in the mid of December 2024.
              </p>
            </span>
            <span className="text-block-row">
              <h3 className="sub-header">Stakeholders and Collaborations</h3>
              <span className="single-col-text-block-sm">
                <p className="text-block">
                  Throughout this project, I established structured
                  communication channels with stakeholders to navigate emerging
                  challenges and technical discoveries.
                </p>
                <ul>
                  <li>
                    <strong>Product Team: </strong>I had daily stand-ups with
                    <span className="highlighted">
                      {" "}
                      Kanchan Singh, Director of Product{" "}
                    </span>
                    and
                    <span className="highlighted">
                      {" "}
                      Rahul Bhowmick, Product Manager{" "}
                    </span>{" "}
                    to align on evolving requirements and project adjustments as
                    new constraints were identified.
                  </li>
                  <li>
                    <strong>Engineering Team: </strong> I collaborated with
                    <span className="highlighted">
                      {" "}
                      Ashish Shah, Senior Software Engineering
                    </span>
                    ,
                    <span className="highlighted">
                      {" "}
                      Aniket Kumar, Senior Associate Software Engineer{" "}
                    </span>
                    and
                    <span className="highlighted">
                      {" "}
                      Mayur Patil, Software Engineer
                    </span>
                    , to understand technical limitations that emerged during
                    development and iterate on design solutions accordingly.
                  </li>
                </ul>
              </span>
            </span>
          </span>
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Primary Problem</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                Recruit CRM's calling feature originally supported only outgoing
                calls with automatic transcript storage. However, our
                engineering team was manually purchasing phone numbers and
                configuring client accounts through backend processes creating a
                significant operational bottleneck. This manual workflow
                consumed valuable engineering resources and generated support
                tickets whenever clients encountered setup issues. Meanwhile,
                clients were actively requesting incoming call capabilities and
                the ability to purchase multiple numbers for different
                departments and team members.
              </p>
              <p className="text-block-emphasis">
                <i className="bi bi-exclamation-octagon-fill ico"></i>
                <strong>The Challenge: </strong>
                How might we create a self-service solution that empowers
                clients to purchase and assign virtual numbers, so that we can
                free up engineering resources, reduce support overhead, and
                enable scalable business growth?
              </p>
            </span>
          </span>
        </section>

        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Design Process</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                The Product Manager and I mapped out how this phone feature
                would work within Recruit CRM. Identifying interdependent
                features, user settings, and complete user flows.
              </p>
              <p className="text-block">
                I then created wireframes and iterated with engineering
                throughout the process. This collaboration was crucial for
                catching missed requirements and technical constraints early.
                Final designs were approved by the Director of Product.
              </p>
              <ul>
                <li>
                  <span className="highlighted">Competetor Analysis: </span> We
                  Studied direct/indirect competitors, with HubSpot CRM as our
                  primary reference as their calling feature was very close to
                  our needs.
                </li>
                <li>
                  <span className="highlighted">Twilio and its API: </span>
                  Since we already had outgoing calls via Twilio, we focused on
                  expanding to incoming calls and self-service number
                  purchasing, plus understanding regulatory requirements (KYC,
                  A2P 10DLC)
                </li>
              </ul>
            </span>
          </span>
        </section>

        <div className="break"></div>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Solution Hypothesis</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                We believe that empowering recruitment agencies with a
                self-service system for two-way calling and virtual number
                management will strengthen their client relationships and
                significantly reduce our support overhead.
              </p>
            </span>
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
                  <td className="td-dark">Marketplace</td>
                  <td className="td-dark">Recruitment Agencies</td>
                  <td className="td-dark">To purchase phone number</td>
                </tr>
                <tr>
                  <td className="td-base">
                    Assign, Un-assign and Release functions
                  </td>
                  <td className="td-base">Recruitment Agencies</td>
                  <td className="td-base">
                    To assign or unassign phone numbers to various teams,
                    individuals. Or, release unused phone numbers
                  </td>
                </tr>
                <tr>
                  <td className="td-dark">Incomming Call Settings</td>
                  <td className="td-dark">Recruitment Teams</td>
                  <td className="td-dark">
                    To automatically handled missed calls
                  </td>
                </tr>
                <tr>
                  <td className="td-base">
                    Call Routing Settings and Interactive Voice Response(IVR)
                  </td>
                  <td className="td-base">Recruitment Teams</td>
                  <td className="td-base">To handle call forwarding</td>
                </tr>
              </tbody>
            </table>
          </span>
        </section>

        <div className="break"></div>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Working on solutions</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                In this iteration we had the bare bone knowledge of the
                technical bottlenecks. We created this with our pliminary
                knowlege of systems just to share our vision with the
                engineering team.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">
            Pipedrive CRMs: Target Form only lets you add one Assign Type and
            KPI(Activity Type)
          </p>
          {/* <img
            className="caselet-images"
            src={benchmarkImg}
            alt="Team Performance report"
          /> */}
        </section>

        <section className="section">
          <p className="caption">Ideation, Sketches and Whiteboarding</p>
          {/* <img
            className="caselet-images"
            src={whiteboardTargetReport}
            alt="Team Performance report"
          /> */}
        </section>

        <section className="section">
          <p className="caption">Early Design Explorations</p>
          {/* <ImageSlider slides={earlyExplorations} /> */}
        </section>
        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <span className="header-block">
              <p className="caption-big">Solution: Flow One</p>
              <h3 className="sub-header">Target Management</h3>
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
          <p className="caption">Final Design - Target Management</p>
          {/* <ImageSlider slides={TargetManagementImages} /> */}
        </section>
        <section className="section">
          <p className="caption">Final Design - Create Target Modal</p>
          <span className="text-block-row">
            {/* <img
              className="sm-caselet-image"
              src={createModalImg}
              alt="Team Performance report"
            /> */}
            <span className="single-col-text-block-sm">
              <p className="text-block">
                I built a new UI component for the Recruit CRM system to handle
                up to 32 KPIs. The solution was effective and now used in
                similar cases across the product.
              </p>
              <ul>
                <li>
                  <span className="emphasis">Quick to Add:</span> "Add Another
                  KPI" adds a new row with a KPI dropdown and input field.
                </li>
                <li>
                  <span className="emphasis">Built for Simplicity: </span>A
                  "minus" button appears to remove fields, keeping the form
                  clean.
                </li>
              </ul>
            </span>
          </span>
        </section>

        <section className="section">
          <span className="text-block-row">
            <span className="header-block">
              <p className="caption-big">Solution: Flow Two</p>
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
          <p className="caption">Final Design - Report Dashboard</p>
          {/* <img
            className="caselet-images"
            src={reportHoverGif}
            alt="Team Performance report"
          /> */}
        </section>
        <section className="section">
          <p className="caption">
            Final Design - Drag and Drop chart cards for easy viewing
          </p>
          {/* <img
            className="caselet-images"
            src={dragChartImg}
            alt="Drag and drop Chart Cards"
          /> */}
        </section>
        <section className="section">
          <p className="caption">
            Final Design - Expand and collapse chart cards
          </p>
          {/* <img
            className="caselet-images"
            src={expandCollapseChartGif}
            alt="Expand Collapse Card"
          /> */}
        </section>

        <section className="section">
          <span className="text-block-row">
            <span className="header-block">
              <p className="caption-big">Solution: Flow Three</p>
              <h3 className="sub-header">
                Report Sharing and Email Notification
              </h3>
            </span>
            <span className="single-col-text-block-sm">
              <ul>
                <li>
                  <span className="emphasis">Report Sharing: </span> A key
                  insight from a stand-up with the CEO led me to add a share
                  report feature, which lets managers display a scoreboard for
                  the team's daily targets.
                </li>
                <li>
                  While presenting to engineering team I got to know that auto
                  refresh intervals were a more efficient solution than a live
                  refresh, as a constant refresh would be resource-heavy and
                  strain the database.
                </li>
                <li>
                  <span className="emphasis">Notifications: </span>My initial
                  scope included both in-app and email notifications. To meet
                  our launch goals, we focused on building just email
                  notifications for now, with in-app notifications planned for a
                  later phase.
                </li>
              </ul>
            </span>
          </span>
        </section>

        <section className="section">
          <p className="caption">
            Mockup - showcasing Shared Live Target Report dashboard in office
            setting
          </p>
          {/* <img
            className="caselet-images"
            src={mockupLiveDashboardImg}
            alt="Expand Collapse Card"
          /> */}
        </section>

        <section className="section">
          <p className="caption">
            Final Design - How to turn on report sharing
          </p>
          {/* <img
            className="caselet-images"
            src={reportSharingGif}
            alt="Final Design - How to turn on report sharing"
          /> */}
        </section>

        <section className="section">
          <p className="caption">
            Mockup - showcasing Shared Live Target Report dashboard in office
            setting
          </p>
          {/* <img
            className="caselet-images"
            src={sharedDashboardImg}
            alt="Final Design - how the externally shared dashboard will look"
          /> */}
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

export default PhoneCalling;
