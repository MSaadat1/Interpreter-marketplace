import { useState, type ReactNode } from "react";
import { InterpreterContext } from "./InterpreterContext";
import type { RegisterInterpreterFormType } from "../../types";

type Props = {
  children: ReactNode;
};

export const InterpreterProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerInterpreter = async (
    data: Omit<RegisterInterpreterFormType, "id">,
  ) => {
    console.log("STEP 3: Inside context", data);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
       `${import.meta.env.VITE_API_URL}/interpreter/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();

      setLoading(false);

      return result;
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <InterpreterContext.Provider
      value={{ registerInterpreter, loading, error }}
    >
      {children}
    </InterpreterContext.Provider>
  );
};
