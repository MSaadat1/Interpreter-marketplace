import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src="./images/inter-logo.jpeg" alt="" />
      </div>
      <div className="address">
        1234 Spring Rd Springfield,
        <br />
        VA, 22120
        <br />
        703-675-9091
      </div>
      <div className="social-media">
        <a
          href="https://facebook.come"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  );
}
