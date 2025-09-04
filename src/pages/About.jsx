import "../css/About.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function About() {
  return (
    <>
      <section className="about-context">
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

          <p className="email">
            <i className="bi bi-envelope-fill"></i>
            <span className="email-address">ux.dibyajeet@gmail.com</span>
          </p>
          <div className="buttons-container">
            <button className="secondary-button">
              <i class="bi bi-box-arrow-in-down"></i>
              <p>resume</p>
            </button>
            <button className="secondary-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
        </div>
        <img
          src="./src/assets/display-photo.jpg"
          alt=""
          width="auto"
          height="500px"
        />
      </section>
      <section className="hobbies">
        <h2>When I am not working</h2>
        <p>
          I could be seen riding my motorcycle down the mountain roads.
          Exploring nature help me wind down and meeting new people, exploring
          diverse culture help me expand my knowledge.
        </p>
        <div className="photos">
          <div className="frames">
            <img
              src="./src/assets/moto-one.jpg"
              alt="Off-road trail exploration at Burundi Dam at Jharkhand, India"
            />
            <p className="caption">
              Off-road trail exploration at Burundi Dam at Jharkhand, India
            </p>
          </div>
          <div className="frames">
            <img src="./src/assets/moto-two.jpg" alt="Trip to Yuksom, Sikkim" />
            <p className="caption">
              1600 Kms ride from home to the wilderness of Sikkim, India.
            </p>
          </div>
          <div className="frames">
            <img
              src="./src/assets/moto-three.jpg"
              alt="Off-Road trail riding at Damodar River bank, Durgapur, India"
            />
            <p className="caption">
              Practicing sand riding skills at the banks of Damodar River.
              Durgapur, India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
