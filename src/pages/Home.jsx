import "../css/Home.css";
function Home() {
  return (
    <>
      <div className="hero-section">
        <span className="text-col">
          <h1 className="greet-text">Hey there! I'm Dibyajeet</h1>
          <p className="greet-content">
            I build the kind of experience I wished existed as a user, crafted
            to be intuitive and empowering.
          </p>
          <span className="status-badge">
            <span className="dot"></span>
            <p>Actively Looking For New Opportunity</p>
          </span>
        </span>
        <span className="illustration">
          <img
            src="./src/assets/hero-image.svg"
            alt="Illustration of a pencil"
            className="hero-image"
          />
        </span>
      </div>
      <div className="project-grid"></div>
    </>
  );
}

export default Home;
