import { Size } from "../../App";
import logo from "../../assets/logo-outline-vertical-bleucorpo.png";
import { handleCases } from "../../helper";
import "./header.css";

const commonStyle = (textColor: string, size: string) => ({
  color: textColor,
  fontSize: size,
});

const Header = ({
  textColor,
  blurValue,
  typography,
  textCase,
  size,
}: {
  textColor: string;
  blurValue: number;
  textCase: string;
  typography: string;
  size: Size;
}) => {
  return (
    <header className="header" style={{ filter: `blur(${blurValue}px)` }}>
      <img src={logo} width={100} height={80} alt="le logo de wemanity" />
      <nav className="topnav">
        <a href="#home" style={commonStyle(textColor, size.text)}>
          {handleCases(textCase, "acceuil")}
        </a>
        <a href="#history" style={commonStyle(textColor, size.text)}>
          {handleCases(textCase, "notre histoire")}
        </a>
        <a href="#services" style={commonStyle(textColor, size.text)}>
          {handleCases(textCase, "nos services")}
        </a>
        <a href="#team" style={commonStyle(textColor, size.text)}>
          {handleCases(textCase, "notre équipe")}
        </a>
      </nav>
      <div className="button_container">
        <button style={{ fontFamily: typography, fontSize: size.text }}>
          {handleCases(textCase, "Contact")}
        </button>
      </div>
    </header>
  );
};

export default Header;
