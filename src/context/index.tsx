import { createContext, useState } from "react";
import {
  CAPITALIZE_FIRST_LETTER,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
  SIZE_90,
} from "../constants";
import { ApiResponse } from "../api";

export type Size = {
  h1: string;
  h2: string;
  h3: string;
  text: string;
};

export type State = {
  background: string;
  textColor: string;
  typography: string;
  size: Size;
  score: ApiResponse;
  blurValue: number;
  textCase: string;
};

type ContextType = {
  setState: (state: State) => void;
  state: State;
};

const INITIAL_STATE = {
  background: DEFAULT_BACKGROUND_COLOR,
  textColor: DEFAULT_TEXT_COLOR,
  typography: "Roboto",
  size: SIZE_90,
  score: {
    ratio: "2.13",
    status: {
      AA: "fail",
      AAA: "fail",
      AAALarge: "fail",
      AALarge: "fail",
    },
  },
  blurValue: 6,
  textCase: CAPITALIZE_FIRST_LETTER,
};

export const ThemeContext = createContext<ContextType>({
  state: INITIAL_STATE,
  setState: () => {},
});

const ThemeProvider = ({ children }: any) => {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
