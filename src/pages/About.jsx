import "../css/About.css";

function About() {
  return (
    <div>
      <div className="context-col">
        <div className="about-text">
          <h2>I am passionate about pixels, products, and people.</h2>
          <p>
            I believe that design is a powerful medium to solve complex problems
            and create meaningful experiences that resonate with people on an
            emotional level. I take a holistic and human-centered approach to
            design, which is why I consider my strongest asset to be my
            well-roundedness and eagerness to work across disciplines. I get
            excited about zooming out, understanding the bigger picture and who
            I'm designing for, and zooming in, paying attention to fine details
            and craft. I love to learn new skills that are outside my comfort
            zone and I'm especially enthusiastic about working in a team of
            different views and disciplines where I believe a lot of learning,
            valuable mistakes, and true innovation happens.
          </p>
        </div>
        <img
          src="./src/assets/display-photo.jpg"
          alt=""
          width="600px"
          height="auto"
        />
      </div>
    </div>
  );
}

export default About;
