import type { interpreterProfilesType } from "../types";
import "./styles.css";
import { useState } from "react";

type Props = {
  interpreter: interpreterProfilesType;
  onClose: () => void;
};

export function ConnectInterpretersForm({ onClose, interpreter }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        interpreterId: interpreter.id,
      }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    await response.json();

    setStatus("success");

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      onClose();
      setStatus("idle");
    }, 3000);
  };

  return (
    <div className="connectFormContainer">
      <h2>{interpreter.name}</h2>
      {status === "success" && <p>Message sent successfully!</p>}
      {status === "error" && <p>Failed to send message.</p>}
      <form className="connectInter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="connectInter-btn1" type="submit">
          Submit
        </button>
        <button className="connectInter-btn2" type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
}
