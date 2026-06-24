export type findInterpretersType = {
  icon: string,
  title: string,
  description: string,
};

export type interpreterProfilesType = {
    id: number,
    name: string,
    language: string[],
    field: string[],
    experience: string,
    // rate: string,
    // image: string
}

export type TestimonialItem = {
  id: number;
  name: string;
  role?: string;
  image: string;
  review: string;
};

export type TrustBuilderDataType = {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export type FAQItem = {
  question: string;
  answer: string;
}

export type RegisterInterpreterFormType = {
  id: number;
  name: string;
  email: string;
  password: string;
  language: "Dari" | "Pashto";
  phone: string;
  experience: string;
  field: string;
}

export type InterpreterContextType = {
  registerInterpreter: (data: Omit<RegisterInterpreterFormType, "id">) => void;
  loading: boolean;
  error: string | null;
}