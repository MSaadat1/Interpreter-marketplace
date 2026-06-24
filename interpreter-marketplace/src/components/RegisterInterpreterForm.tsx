import { useContext, useState } from "react";
import { InterpreterContext } from "../Providers/InterpreterProvider/InterpreterContext";
import "./styles.css";
// import { useNavigate } from "react-router-dom";

type Language = "Dari" | "Pashto";
type Props = {
  onCloseForm: () => void;
};

export function RegisterInterpreterForm({ onCloseForm }: Props) {
  // const navigate = useNavigate();
  const context = useContext(InterpreterContext);

  if (!context) {
    throw new Error("InterpreterContext not found");
  }
  const { registerInterpreter } = context;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState<Language>("Dari");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [field, setField] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result: unknown = await registerInterpreter({
      name,
      email,
      password,
      language,
      phone,
      experience,
      field,
    });

    if (result) {
      alert("Account created successfully!");
      // const interpreterId = result.data.id;

      onCloseForm();

      // navigate(`/interpreter/${interpreterId}`);

      setName("");
      setEmail("");
      setPassword("");
      setLanguage("Dari");
      setPhone("");
      setExperience("");
      setField("");
    }
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} id="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          title="language"
          value={language}
          required
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          <option value="Dari">Dari</option>
          <option value="Pashto">Pashto</option>
        </select>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Experience"
          value={experience}
          required
          onChange={(e) => setExperience(e.target.value)}
        />
        <select
          title="field"
          value={field}
          required
          onChange={(e) => setField(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Medical">Medical</option>
          <option value="Legal">Legal</option>
        </select>

        <input className="submit-form-btn" type="submit" />
        <button className="close-form-btn" type="button" onClick={onCloseForm}>
          Close
        </button>
      </form>
    </div>
  );
}
