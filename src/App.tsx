import Body from "./components/body";
import Header from "./components/header";
import "./App.css";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_SIZE,
} from "./constants";
import { checkAccessibility, ApiResponse } from "./api";

const App = () => {
  const [background, setBackround] = useState(DEFAULT_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [typography, setTypography] = useState("Roboto");
  const [size, setSize] = useState(DEFAULT_TEXT_SIZE);
  const [score, setScore] = useState<ApiResponse>({} as ApiResponse);
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    checkAccessibility([background, textColor])
      .then((data: ApiResponse) =>
        setScore({
          ...data,
          contrast: parseFloat(data.contrast).toPrecision(2),
        })
      )
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
        fontSize: size,
      }}
    >
      <Header
        textColor={textColor}
        blurValue={blurValue}
        typography={typography}
        size={size}
      />
      <Body
        {...{
          setSize,
          setTypography,
          setBackround,
          setTextColor,
          setBlurValue,
          score,
          size,
          typography,
          blurValue,
        }}
      />
      <Footer blurValue={blurValue} />
    </div>
  );
};

export default App;
