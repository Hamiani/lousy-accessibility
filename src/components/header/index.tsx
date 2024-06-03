/* eslint-disable jsx-a11y/alt-text */
import { Modal } from "antd";
import "./header.css";

import { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import { Link } from "react-router-dom";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ThemeContext);
  const {
    state: { blurValue },
  } = context;
  return (
    <>
      <header className="header" style={{ filter: `blur(${blurValue}px)` }}>
        <img
          src={"https://wemanity.com/img/menu/logo-wemanity-home-page.png"}
        />
        <nav className="topnav">
          <Link to="/">Acceuil</Link>
          <Link to="/history">Notre histoire</Link>
          <Link to="/services">Nos services</Link>
          <Link to="/team">Notre équipe</Link>
          <Link to="/career">Site carrière </Link>
        </nav>
        <button onClick={() => setIsOpen(true)}>contact</button>
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
          height={"850"}
          src="https://careers.wemanity.com/fr/contact/"
          title="Présentation de l'équipe lilloise par practice"
          loading="lazy"
        />
      </Modal>
    </>
  );
};

export default Headers;
