import Home from "./components/home";
import Header from "./components/header";
import "./App.css";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import {
  CAPITALIZE_FIRST_LETTER,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
  SIZE_100,
} from "./constants";
import { checkAccessibility, ApiResponse } from "./api";
import History from "./components/history";
import RemoteControl from "./components/remoteControl";
import Team from "./components/team";
import Services from "./components/services";

export type Size = {
  h1: string;
  h2: string;
  h3: string;
  text: string;
};
const App = () => {
  const [background, setBackround] = useState(DEFAULT_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [typography, setTypography] = useState("Roboto");
  const [size, setSize] = useState(SIZE_100);
  const [score, setScore] = useState<ApiResponse>({} as ApiResponse);
  const [blurValue, setBlurValue] = useState(0);
  const [textCase, setTextCase] = useState(CAPITALIZE_FIRST_LETTER);

  useEffect(() => {
    checkAccessibility({
      fcolor: textColor.replace("#", ""),
      bcolor: background.replace("#", ""),
    })
      .then((data: ApiResponse) => setScore(data))
      .catch(() => {
        console.log(
          "une erreur est produite lors de la vérification de contrast"
        );
      });
  }, [background, textColor]);
  return (
    <div
      className="App"
      style={{
        backgroundColor: background,
        color: textColor,
        fontFamily: typography,
        fontSize: size.text,
      }}
    >
      <Header
        textColor={textColor}
        blurValue={blurValue}
        typography={typography}
        size={size}
        textCase={textCase}
      />
      <div className="content">
        <Home
          {...{
            setSize,
            setTypography,
            setBackround,
            setTextColor,
            setBlurValue,
            setTextCase,
            textCase,
            score,
            size,
            typography,
            blurValue,
          }}
        />
        <RemoteControl
          {...{
            setSize,
            setTypography,
            setBackround,
            setTextColor,
            setBlurValue,
            setTextCase,
            textCase,
            score,
            size,
            typography,
            blurValue,
          }}
        />
        <History
          {...{
            textCase,
            size,
            typography,
            blurValue,
            textColor,
          }}
        />
        <Team
          {...{
            textCase,
            size,
            typography,
            blurValue,
            textColor,
          }}
        />
        <Services
          {...{
            textCase,
            size,
            typography,
            blurValue,
            textColor,
          }}
        />
      </div>

      <Footer blurValue={blurValue} textCase={textCase} />
    </div>
  );
};

export default App;
