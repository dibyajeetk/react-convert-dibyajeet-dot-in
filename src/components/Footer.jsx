import "../css/Footer.css";
function Footer() {
  return (
    <footer>
      <h2 className="thanks-footer">Thanks for stopping by, let's chat! 🤙</h2>
      <div className="footer-details">
        <span className="footer-group">
          <p className="footer-small-headers">Contact Me here</p>
          <p className="footer-copy">ux.dibyajeet@gmail.com</p>
        </span>
        <span className="footer-group">
          <p className="footer-small-headers">Let's Connect</p>
          <p className="footer-copy">ux.dibyajeet@gmail.com</p>
        </span>
        <span className="footer-group">
          <p className="footer-small-headers">
            &copy; 2025 Dibyajeet Kirttania, all rights reserved.
          </p>
          <p className="footer-copy">
            <span className="emphasis">Last updated on:</span>02 September, 2025
          </p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
