import "./footer.css";
const Footer = ({ blurValue }: { blurValue: number }) => {
  return (
    <footer className="footer" style={{ filter: `blur(${blurValue}px)` }}>
      <p>©Wemanity {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
