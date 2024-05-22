import { handleCases } from "../../helper";
import "./footer.css";
const Footer = ({
  blurValue,
  textCase,
}: {
  textCase: string;
  blurValue: number;
}) => {
  return (
    <footer className="footer" style={{ filter: `blur(${blurValue}px)` }}>
      <p>
        {handleCases(textCase, "©Wemanity") + " " + new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
