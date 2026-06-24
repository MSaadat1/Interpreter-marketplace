import "./styles.css";
import { findInterpreters } from "../staticData";

export function HowItWorks() {
  return (
    <div className="howItWorks" id="how-it-works">
      <div className="howItWorks-title">
        <h2>How it works?</h2>
        <p>Connecting you with qualified interpreters in three simple steps.</p>
      </div>
      <div className="howItWorks-container">
        {findInterpreters.map((item ,index) => (
          <div key={index} className="howItWorks-card">
            <span className="card-icon">{item.icon}</span>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
