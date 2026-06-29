import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

type Props = {
  onCloseLoginForm: () => void;
};

export function LoginInterpreterForm({ onCloseLoginForm }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const respond = await fetch(`${import.meta.env.VITE_API_URL}/interpreter/login`, {
        method: "POST",
        headers: {
           "Content-Type": "application/json",  
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const result = await respond.json();
    if(respond.ok){
        const interpreterId = result.data.id;

        onCloseLoginForm();

        navigate(`/interpreter/${interpreterId}`);
    } else{
        alert(result.message);
    }
  };
  return (
    <div className="loginForm">
      <form onSubmit={handleLogin} className="loginForm-form">
        <h2 className="login-h2">Interpreter can Login Here</h2>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" className="login-btn-form" />
        <button
          type="button"
          onClick={onCloseLoginForm}
          className="login-btn-form close-btn-form"
        >
          Close
        </button>
      </form>
    </div>
  );
}
