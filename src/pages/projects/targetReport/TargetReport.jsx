import Accordion from "../../../components/Accordion";
import "../../../css/Projects.css";
import ProjectHighlites from "../../../components/ProjectHighlights";
import coverImg from "./cover.jpg";

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
          <h2 className="headlines">Overview</h2>
          <span className="single-col-text-block">
            <p className="text-block">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, corrupti ipsam eum nam voluptatem sit saepe iure
              rerum dolorum voluptate fugiat amet reiciendis nesciunt eveniet
              minus accusamus distinctio accusantium. Perferendis, dolor. Esse
              nulla veritatis culpa.
            </p>
            <p className="text-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit blanditiis velit ipsam quae, dolore consequatur
              debitis minus doloribus fuga quo ut exercitationem. Nobis, itaque
              asperiores!
            </p>
          </span>
        </section>
        <section className="section">
          <h2 className="headlines">Overview</h2>
          <span className="two-col-text-block">
            <p className="text-block">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, corrupti ipsam eum nam voluptatem sit saepe iure
              rerum dolorum voluptate fugiat amet reiciendis nesciunt eveniet
              minus accusamus distinctio accusantium. Perferendis, dolor. Esse
              nulla veritatis culpa.
            </p>
            <p className="text-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit blanditiis velit ipsam quae, dolore consequatur
              debitis minus doloribus fuga quo ut exercitationem. Nobis, itaque
              asperiores!
            </p>
          </span>
        </section>

        <Accordion title="Read Details" />
      </div>
    </>
  );
}

export default TargetReport;
