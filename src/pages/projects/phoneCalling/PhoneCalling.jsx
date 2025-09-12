import Accordion from "../../../components/Accordion";
import ImageSlider from "../../../components/ImageSlider";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./cover-phone-calling.jpg";
import firstFlowImg from "./first-flow.jpg";
import decoreImg from "./frames-decore.png";
import firstSharesOne from "./first-shares-1.jpg";

import secondFlowImg from "./second-flow.jpg";

import purchaseNumberFinal from "./purchase-phone-number.gif";
import assignNumberFinal from "./assign-phone-number.gif";
import missedNotificationFinal from "./missed-notification.gif";

function PhoneCalling() {
  const projectData = {
    name: "Incomming Calls and Phone Number Purchase - for Recruit CRM",
    description:
      "To design a scalable system that enabled two-way calls and empowered users with virtual number management.",
    role: "UX Designer",
    duration: "Oct - Dec, 2024",
  };
  const firstWireframesImages = [
    { url: firstSharesOne, title: "Final screens - navigate to Target KPIs" },
    { url: decoreImg, title: "Final screens - create new target" },
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
        <section className="section">
          {/* <p className="caption">initial flow diagram for the feature</p> */}
          <img
            className="caselet-images"
            src={decoreImg}
            alt="Team Performance report"
          />
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
            <h3 className="sub-header">Initial wireframes</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                I started Working solution by whiteboarding and mapping out the
                feature and mapping things in the right place. I created
                wireframes of our vision to showcase how the feature will work.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">initial flow diagram for the feature</p>
          <img
            className="caselet-images"
            src={firstFlowImg}
            alt="Team Performance report"
          />
        </section>
        <section className="section">
          <p className="caption">
            Wireframes for sharing the initial intention of the incomming call
            feature and the comment and suggestions recived
          </p>
          <ImageSlider slides={firstWireframesImages} />
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">
              Conclusion of first rounds of engineering pitch
            </h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                I started Working solution by whiteboarding and mapping out the
                feature and mapping things in the right place. I created
                wireframes of our vision to showcase how the feature will work.
              </p>
            </span>
          </span>
        </section>
        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Reworked Solution</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                I started Working solution by whiteboarding and mapping out the
                feature and mapping things in the right place. I created
                wireframes of our vision to showcase how the feature will work.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">initial flow diagram for the feature</p>
          <img
            className="caselet-images"
            src={secondFlowImg}
            alt="Team Performance report"
          />
        </section>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">
              Conclusion of second round of engineering pitch
            </h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                I started Working solution by whiteboarding and mapping out the
                feature and mapping things in the right place. I created
                wireframes of our vision to showcase how the feature will work.
              </p>
            </span>
          </span>
        </section>

        <div className="break"></div>
        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Final Solution</h3>
            <span className="single-col-text-block-sm">
              <p className="text-block">
                I started Working solution by whiteboarding and mapping out the
                feature and mapping things in the right place. I created
                wireframes of our vision to showcase how the feature will work.
              </p>
            </span>
          </span>
        </section>
        <section className="section">
          <p className="caption">Purchasing Phone Number Flow</p>
          <img
            className="caselet-images"
            src={purchaseNumberFinal}
            alt="Purchasing a phone number"
          />
        </section>
        <section className="section">
          <p className="caption">How admins will assign phone number</p>
          <img
            className="caselet-images"
            src={assignNumberFinal}
            alt="Purchasing a phone number"
          />
        </section>
        <section className="section">
          <p className="caption">Missed Calls Notifications</p>
          <img
            className="caselet-images"
            src={missedNotificationFinal}
            alt="Purchasing a phone number"
          />
        </section>
        <div className="break"></div>

        <section className="section">
          <span className="text-block-row">
            <h3 className="sub-header">Project Outcomes</h3>
            <span className="single-col-text-block-sm">
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
