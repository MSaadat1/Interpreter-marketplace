import { createContext } from "react";
import type { InterpreterContextType } from "../../types";

export const InterpreterContext = createContext<InterpreterContextType | null>(
  null,
);
