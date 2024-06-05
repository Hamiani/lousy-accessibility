/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import "./header.css";

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onCloseMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setMenuOpen]);

  return (
    <>
      <header className="header">
        <img src="https://wemanity.com/img/menu/logo-wemanity-home-page.png" />
        <nav ref={menuRef} className={`topnav ${menuOpen ? "responsive" : ""}`}>
          <div>
            <Link to="/" onClick={onCloseMenu}>
              Accueil
            </Link>
            <Link to="/history" onClick={onCloseMenu}>
              Notre histoire
            </Link>
            <Link to="/services" onClick={onCloseMenu}>
              Nos services
            </Link>
            <Link to="/team" onClick={onCloseMenu}>
              Notre équipe
            </Link>
            <Link to="/career" onClick={onCloseMenu}>
              Site carrière
            </Link>
          </div>
          <div>
            <button onClick={() => setIsOpen(true)}>Contact</button>
          </div>
        </nav>
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </header>
      <Modal
        centered
        maskClosable={false}
        open={isOpen}
        width="100%"
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <iframe
          width="100%"
          height="850"
          src="https://careers.wemanity.com/fr/contact/"
          loading="lazy"
        />
      </Modal>
    </>
  );
};

export default Header;
