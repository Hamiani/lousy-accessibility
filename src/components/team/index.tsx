import { handleCases } from "../../helper";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const commonStyle = (textColor: string, size: string, typography: string) => ({
  color: textColor,
  fontSize: size,
  fontFamily: typography,
});

const Team = () => {
  const context = useContext(ThemeContext);
  const { state } = context;
  const { blurValue, textCase, typography, size, textColor } = state;
  return (
    <div className="content" style={{ filter: `blur(${blurValue}px)` }}>
      <h1
        style={{
          ...commonStyle(textColor, size.h1, typography),
          textAlign: "center",
        }}
      >
        {handleCases(textCase, "la répartition des équipes lilloises")}
      </h1>
      <p
        style={{
          ...commonStyle(textColor, size.text, typography),
          textAlign: "center",
        }}
      >
        {handleCases(textCase, "Mot de passe : ")}Lille2018 🔓
      </p>

      <iframe
        width={"100%"}
        style={{ borderRadius: "15px" }}
        height={"700"}
        src="https://view.genially.com/65797d850938f90014a7b6b8"
        title="Présentation de l'équipe lilloise par practice "
        loading="lazy"
      />
    </div>
  );
};

export default Team;
