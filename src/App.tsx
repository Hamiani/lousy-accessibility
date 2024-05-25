/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Col, Row } from "antd";

import RemoteControl from "./components/remoteControl";
import Team from "./components/team";
import Services from "./components/services";
import Home from "./components/home";
import History from "./components/history";
import Header from "./components/header";
import Footer from "./components/footer";
import Career from "./components/career";

import { State, ThemeContext } from "./context";
import { checkAccessibility, ApiResponse } from "./api";

import "./App.css";

const App = () => {
  const { state, setState } = useContext(ThemeContext);
  const { background, textColor, typography, size } = state;

  useEffect(() => {
    checkAccessibility({
      fcolor: textColor.replace("#", ""),
      bcolor: background.replace("#", ""),
    })
      .then((data: ApiResponse) =>
        // @ts-ignore
        setState((val: State) => ({ ...val, score: data }))
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
        fontSize: size.text,
      }}
    >
      <Row justify="space-between">
        <Col xs={24} lg={21} xl={22} xxl={21}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/team" element={<Team />} />
              <Route path="/career" element={<Career />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </BrowserRouter>
        </Col>
        <Col xs={24} lg={4} xl={4} xxl={4}>
          <RemoteControl />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default App;
