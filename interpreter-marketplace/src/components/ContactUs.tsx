import "./styles.css";
import { useState } from "react";
export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("Thank you for contacting us!");
    setTimeout(() => {
      setSuccess("");
    }, 3000);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contactUs-container" id="contact-us">
      <div className="contactUs-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contactUs-subContainer">
        <div className="contactUs-form">
          <form action="" className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="text">Name:</label>
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write Your Message Here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <input type="submit" placeholder="Submit" className="contact-btn" />
          </form>
          <div className="contact-message">{success && <p>{success}</p>}</div>
        </div>
        <div className="contactUs-image">
          <img src="./images/contact-us-img.png" alt="contact-image" />
        </div>
      </div>
    </div>
  );
}
