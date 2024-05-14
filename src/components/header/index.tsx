import logo from "../../assets/logo-outline-vertical-bleucorpo.png";
import "./header.css";

const Header = ({
  textColor,
  blurValue,
}: {
  textColor: string;
  blurValue: number;
}) => {
  return (
    <header className="header" style={{ filter: `blur(${blurValue}px)` }}>
      <img src={logo} width={100} height={80} alt="le logo de wemanity" />
      <nav className="topnav">
        <a href="#home" style={{ color: textColor }}>
          acceuil
        </a>
        <a href="#history" style={{ color: textColor }}>
          notre histoire
        </a>
        <a href="#services" style={{ color: textColor }}>
          nos services
        </a>
        <a href="#team" style={{ color: textColor }}>
          notre équipe
        </a>
      </nav>
      <div className="button_container">
        <button>Contact</button>
      </div>
    </header>
  );
};

export default Header;
