import runChat from "@/config/Gemini";
import { createContext, useState } from "react";

type StateType = {
  onSent: () => Promise<void>;
  recent: string;
  setRecent: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  prevPrompts: string[];
  setPrevPrompts: React.Dispatch<React.SetStateAction<string[]>>;
  showResult: boolean;
  loading: boolean;
  resultData: string;
};

export const Response = {
  id: "",
  name: "",
  email: "",
  username: "",
  imageUrl: "",
  bio: "",
};

const State = {
  onSent: async () => {},
  recent: "",
  setRecent: () => {},
  input: "",
  setInput: () => {},
  prevPrompts: [],
  setPrevPrompts: () => {},
  showResult: false,
  loading: false,
  resultData: "",
};

export const Context = createContext<StateType>(State);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [input, setInput] = useState("");
  const [recent, setRecent] = useState("");
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async () => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecent(input);
    const response = await runChat(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const value = {
    onSent,
    recent,
    setRecent,
    input,
    setInput,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
