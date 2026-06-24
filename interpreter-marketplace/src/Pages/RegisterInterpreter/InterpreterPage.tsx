import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./interProfile.css";

type Interpreter = {
  id: number;
  name: string;
  email: string;
  language: string;
  phone: string;
  experience: string;
  field: string;
};

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  interpreterId: number;
  status: string;
  createdAt: string;
};

export function InterpreterPage() {
  const { id } = useParams();
  const [interpreter, setInterpreter] = useState<Interpreter | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();

  const loadMessages = () => {
    fetch(`http://localhost:3001/interpreter/${id}/messages`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };

  useEffect(() => {
    fetch(`http://localhost:3001/interpreter/${id}`)
      .then((res) => res.json())
      .then((data) => setInterpreter(data));
  }, [id]);

  useEffect(() => {
    loadMessages();
  }, [id]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/interpreter/${id}/messages`)
  //     .then((res) => res.json())
  //     .then((data) => setMessages(data));
  // }, [id]);

  if (!interpreter) {
    return <p>Loading...</p>;
  }

  const handleConfirm = async (messageId: number) => {
    await fetch(`http://localhost:3001/messages/${messageId}/confirm`, {
      method: "PATCH",
    });
    loadMessages();
  };

  const handleReject = async (messageId: number) => {
    await fetch(`http://localhost:3001/messages/${messageId}/reject`, {
      method: "PATCH",
    });
    loadMessages();
  };
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <button className="logout-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <div className="header-right">
          <h2>Welcome, {interpreter.name}</h2>
        </div>
      </header>
      <div className="dashboard-content">
        <section className="profile-section">
          <h3>Interpreter Profile</h3>

          <p>
            <strong>Name: </strong>
            {interpreter.name}
          </p>
          <p>
            <strong>Email:</strong> {interpreter.email}
          </p>

          <p>
            <strong>Language:</strong> {interpreter.language}
          </p>

          <p>
            <strong>Phone:</strong> {interpreter.phone}
          </p>

          <p>
            <strong>Experience:</strong> {interpreter.experience}
          </p>

          <p>
            <strong>Field:</strong> {interpreter.field}
          </p>
        </section>
      </div>
      <div>
        <h2>Messages</h2>
        {messages
          .filter((message) => message.status !== "rejected")
          .map((message) => (
            <div  key={message.id}>
              <h4>Name : {message.name}</h4>
              <p>Email : {message.email}</p>
              <p>Message : {message.message}</p>

              {message.status === "confirmed" ? (
                <p>✅ Request Confirmed</p>
              ) : (
                <div className="message-btn">
                  <button onClick={() => handleConfirm(message.id)}>
                    Confirm
                  </button>

                  <button onClick={() => handleReject(message.id)}>
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
