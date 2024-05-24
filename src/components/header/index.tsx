import { Size } from "../../App";
import logo from "../../assets/logo-outline-vertical-bleucorpo.png";
import { handleCases } from "../../helper";
import { Button, Modal } from "antd";
import "./header.css";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
        <Button
          style={{
            fontFamily: typography,
            fontSize: size.text,
          }}
          onClick={(e) => {
            e.stopPropagation();
            console.log(" aaaaaaaaa:>> ");
            setIsOpen(true);
          }}
        >
          contact
        </Button>
      </header>
      <Modal
        centered
        maskClosable={false}
        open={isOpen}
        width={"100%"}
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <iframe
          width={"100%"}
          height={"700"}
          src="https://careers.wemanity.com/fr/contact"
          title="Présentation de l'équipe lilloise par practice "
          loading="lazy"
        />
      </Modal>
    </>
  );
};

export default Header;
