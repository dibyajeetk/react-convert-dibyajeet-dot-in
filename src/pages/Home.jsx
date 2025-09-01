import "../css/Home.css";
function Home() {
  return (
    <>
      <div className="hero-section">
        <span className="text-col">
          <h1 className="greet-text">Hey there! I'm Dibyajeet</h1>
          <p className="greet-content">
            Currently a product designer at LinkedIn. I’m experienced in end to
            end user centered design and visual storytelling.
          </p>
          <span className="status-badge">
            <span className="dot"></span>
            <p>Actively Looking For New Opportunity</p>
          </span>
        </span>
        <span className="illustration"></span>
      </div>
      <div className="project-grid"></div>
    </>
  );
}

export default Home;
