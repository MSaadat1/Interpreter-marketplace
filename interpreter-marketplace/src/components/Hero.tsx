import "./styles.css";

type Props = {
  onOpenForm: () => void;
};
export function Hero({ onOpenForm }: Props) {
  return (
    <div className="hero-container">
      <div className="hero-contains" id="hero">
        <h1 className="hero-title">Welcome To our Home Page</h1>
        <p className="hero-para-one">Break Language Barriers Instantly</p>
        <p className="hero-para-two">
          Connect with certified interpreters for medical, legal, and business
          needs — anytime, anywhere.
        </p>
        <a href="#find-interpreter">
          <button className="hero-btn">Find an Interpreter</button>
        </a>

        <button
          onClick={() => {
            console.log("click");
            onOpenForm();
          }}
          className="hero-btn become-inter"
        >
          Become an Interpreter
        </button>
      </div>
    </div>
  );
}
