import "./styles.css";
import { useState } from "react";

type Props = {
  isLoginOpenForm: () => void;
};
export function Navbar({ isLoginOpenForm }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="#hero">
            <img
              className="logo-img"
              src="./images/inter-logo.jpeg"
              alt="logo"
            />
          </a>
        </div>

        <div className="nav-lists">
          <ul>
            <li>
              <a className="nav-list-tag" href="#hero">
                Home |
              </a>
            </li>
            <li>
              <a className="nav-list-tag" href="#how-it-works">
                How It Works |
              </a>
            </li>
            <li>
              <a className="nav-list-tag" href="#meet-interpreters">
                Meet our Interpreters |
              </a>
            </li>
            <li>
              <a className="nav-list-tag" href="#contact-us">
                Contact Us |
              </a>
            </li>
            <li className="register">
              <a className="nav-list-tag" onClick={isLoginOpenForm}>
                Log In
              </a>
            </li>
          </ul>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#hero">Home</a>

          <a href="#how-it-works">How It Works</a>

          <a href="#meet-interpreters">Meet our Interpreters</a>

          <a href="#contact-us">Contact Us</a>

          <a onClick={isLoginOpenForm}>Login</a>
        </div>
      )}
    </>
  );
}
