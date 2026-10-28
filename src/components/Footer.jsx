import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>
        Breakdown JAMB
      </h3>

      <p className="footer-description">
  Master JAMB with detailed explanations, topic notes, and CBT practice..
</p>

      <div className="footer-links">

        <a href="/">
          Home
        </a>

        <a href="/create-account">
          Study
        </a>

        <a href="/create-account">
          Practice
        </a>

      </div>


      <p className="copyright">
        © 2026 Breakdown JAMB
      </p>

    </footer>
  );
}

export default Footer;