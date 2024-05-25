import { useContext } from "react";
import { ThemeContext } from "../../context";
import { handleCases } from "../../helper";
import "./footer.css";
const Footer = () => {
  const context = useContext(ThemeContext);
  const { state } = context;
  const { blurValue, textCase } = state;
  return (
    <footer className="footer" style={{ filter: `blur(${blurValue}px)` }}>
      <p>
        {handleCases(textCase, "©Wemanity") + " " + new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
