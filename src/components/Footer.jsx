import "../css/Footer.css";
function Footer() {
  return (
    <footer>
      <h2 className="thanks-footer">Thanks for stopping by, let's chat! 🤙</h2>
      <div className="footer-details">
        <span className="footer-group">
          <p className="footer-small-headers">Contact Me</p>
          <a href="mailto:ux.dibyajeet@gmail.com" className="footer-copy">
            ux.dibyajeet@gmail.com
          </a>
        </span>
        <span className="footer-group">
          <p className="footer-small-headers">Let's Connect</p>
          <span className="icon-holder">
            <a
              href="https://www.linkedin.com/in/dibyajeetk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="bi bi-linkedin footer-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/97ronen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="bi bi-instagram footer-icon"></i>
            </a>
          </span>
        </span>
        <span className="footer-group">
          <p className="footer-small-headers">
            &copy; 2025 Dibyajeet Kirttania, all rights reserved.
          </p>
          <p className="footer-copy">Last updated on: 02 September, 2025</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
