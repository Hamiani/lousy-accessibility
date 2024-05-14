import logo from "../../assets/logo-outline-vertical-bleucorpo.png";
import "./header.css";

const commonStyle = (textColor: string, size: string) => ({
  color: textColor,
  fontSize: size,
});

const Header = ({
  textColor,
  blurValue,
  typography,
  size,
}: {
  textColor: string;
  blurValue: number;
  typography: string;
  size: string;
}) => {
  return (
    <header className="header" style={{ filter: `blur(${blurValue}px)` }}>
      <img src={logo} width={100} height={80} alt="le logo de wemanity" />
      <nav className="topnav">
        <a href="#home" style={commonStyle(textColor, size)}>
          acceuil
        </a>
        <a href="#history" style={commonStyle(textColor, size)}>
          notre histoire
        </a>
        <a href="#services" style={commonStyle(textColor, size)}>
          nos services
        </a>
        <a href="#team" style={commonStyle(textColor, size)}>
          notre équipe
        </a>
      </nav>
      <div className="button_container">
        <button style={{ fontFamily: typography, fontSize: size }}>
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
