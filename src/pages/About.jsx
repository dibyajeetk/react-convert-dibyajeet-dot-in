import "../css/About.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import displayPhotoImg from "../../src/assets/display-photo.jpg";
import motoImgA from "../../src/assets/moto-one.jpg";
import motoImgB from "../../src/assets/moto-two.jpg";
import motoImgC from "../../src/assets/moto-three.jpg";

function About() {
  return (
    <>
      <section className="about-context">
        <div className="about-text">
          <h2>"Designing for Action, Not Just Aesthetics"</h2>
          <p>
            I'm a Product Designer who believes form follows function, though
            I’ve always had a soft spot for clean aesthetics and am always
            searching for the balance between the two. My love for video games
            and storytelling is what first drew me to design. My interest in
            mixed media, furniture design, and wearables has often got me
            thinking about how smart products and the implementation of XR and
            AI will shape the future.
          </p>

          <p>
            I'd like to think I'm highly empathetic, but my experience has
            taught me that people can only give meaningful feedback when they
            have something tangible to react to. This is why I believe
            assumptions are a great starting point for building a solid product.
            This pragmatic approach allows me to deliver tangible business
            results.
          </p>
          <a href="mailto:ux.dibyajeet@gmail.com" className="email-address">
            ux.dibyajeet@gmail.com
          </a>
          <div className="buttons-container">
            <a href="http://" className="about-link">
              <i className="bi bi-box-arrow-in-down"></i> resume
            </a>
            <a href="http://" className="about-link">
              <i className="bi bi-linkedin"></i> linkedin
            </a>
            <a href="http://" className="about-link">
              <i className="bi bi-instagram"></i> instagram
            </a>
          </div>
        </div>
        <img src={displayPhotoImg} alt="" width="auto" height="500px" />
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
              src={motoImgA}
              alt="Off-road trail exploration at Burundi Dam at Jharkhand, India"
            />
            <p className="caption">
              Off-road trail exploration at Burundi Dam. Jharkhand, India
            </p>
          </div>
          <div className="frames">
            <img src={motoImgB} alt="Trip to Yuksom, Sikkim" />
            <p className="caption">
              1600 Kms ride from home to the wilderness of Sikkim, India.
            </p>
          </div>
          <div className="frames">
            <img
              src={motoImgC}
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
