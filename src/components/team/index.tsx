import { Col, Row } from "antd";
import { Size } from "../../App";
import { handleCases } from "../../helper";

const commonStyle = (textColor: string, size: string, typography: string) => ({
  color: textColor,
  fontSize: size,
  fontFamily: typography,
});

const Team = ({
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
    <div style={{ filter: `blur(${blurValue}px)` }}>
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
      <Row id="team" justify={"center"}>
        <Col span={20}>
          <iframe
            width={"90%"}
            height={"700"}
            src="https://view.genially.com/65797d850938f90014a7b6b8"
            title="Présentation de l'équipe lilloise par practice "
            loading="lazy"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Team;
