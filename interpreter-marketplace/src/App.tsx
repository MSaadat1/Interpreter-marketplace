import "./App.css";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { interpreterProfilesData } from "./staticData";
import { useState, useEffect } from "react";
import type { interpreterProfilesType } from "./types";
import { Testimonial } from "./components/Testimonial";
import { TrustBuilder } from "./components/TrustBuilder";
import { FaqAccordion } from "./components/FaqAccordion";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { InterpreterProvider } from "./Providers/InterpreterProvider/InterpreterProvider";
import { RegisterInterpreterForm } from "./components/RegisterInterpreterForm";
import { InterpreterPage } from "./Pages/RegisterInterpreter/InterpreterPage";
import { LoginInterpreterForm } from "./components/LoginInterpreterForm";
import { ConnectInterpretersForm } from "./components/ConnectInterpretersForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [interpreters, setInterpreters] = useState<interpreterProfilesType[]>(
    interpreterProfilesData,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedInterpreter, setSelectedInterpreter] =
    useState<interpreterProfilesType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/interpreters`)
      .then((res) => res.json())
      .then((data) => setInterpreters(data));
  }, []);

  function handleClick(interpreter: interpreterProfilesType) {
    setSelectedInterpreter(interpreter);
  }
  function onOpenForm() {
    setIsOpen(true);
  }
  function isLoginOpenForm() {
    setIsLoginOpen(true);
  }
  return (
    <InterpreterProvider>
      <Routes>
        <Route
          path="/"
          element={
            <main className="home">
              <Navbar isLoginOpenForm={isLoginOpenForm} />
              <div className="main-container">
                <Hero onOpenForm={onOpenForm} />
                <TrustBuilder />
                <hr className="line" />
                <HowItWorks />
                <hr className="line" />
                <Carousel interpreters={interpreters} onClick={handleClick} />
                <hr className="line" />
                <Testimonial />
                <hr className="line" />
                <FaqAccordion />
                <hr className="line" />
                <ContactUs />
                <Footer />
              </div>
              {isOpen && (
                <div className="overlay">
                  <RegisterInterpreterForm
                    onCloseForm={() => setIsOpen(false)}
                  />
                </div>
              )}
              {isLoginOpen && (
                <div className="overlay">
                  <LoginInterpreterForm
                    onCloseLoginForm={() => setIsLoginOpen(false)}
                  />
                </div>
              )}
              {selectedInterpreter && (
                <div className="overlay">
                  <ConnectInterpretersForm
                    interpreter={selectedInterpreter}
                    onClose={() => setSelectedInterpreter(null)}
                  />
                </div>
              )}
            </main>
          }
        />
        <Route path="/interpreter/:id" element={<InterpreterPage />} />
      </Routes>
    </InterpreterProvider>
  );
}

export default App;
