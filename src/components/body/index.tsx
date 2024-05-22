import { Button, ColorPicker, Tag, Slider, Row, Col } from "antd";
import { IoIosColorPalette } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import {
  ACCESSIBILITY_STATUS,
  CAPITALIZE_FIRST_LETTER,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_SIZE,
  LOWERCASE,
  SIZE_120,
  SIZE_50,
  TYPOGRAPHY,
  UPPERCASE,
} from "../../constants";
import { ApiResponse, ScoreStatus } from "../../api";
import { handleCases } from "../../helper";
import "./body.css";
import { Size } from "../../App";

const { PASS, FAIL } = ACCESSIBILITY_STATUS;
const { PLATIPY, CINZEL, BHUTUKA_EXPANDED_ONE, ROBOTO, MONTSERRAT, NOTO_SANS } =
  TYPOGRAPHY;
const MALUS_TYPO = [PLATIPY, CINZEL, BHUTUKA_EXPANDED_ONE];
const MALUS_CASE = [LOWERCASE, UPPERCASE];
const MALUS_SIZES = [SIZE_120, SIZE_50];

const scoreColor = (score: ScoreStatus) => {
  if (score && Object.values(score).some((val) => val === FAIL.KEY)) {
    return FAIL.COLOR;
  }
  return PASS.COLOR;
};
const comonStyle = (typography: string, size: string) => ({
  fontFamily: typography,
  fontSize: size,
});

const Body = ({
  setBackround,
  setTypography,
  setTextColor,
  setSize,
  setBlurValue,
  setTextCase,
  textCase,
  score,
  size,
  typography,
  blurValue,
}: {
  score: ApiResponse;
  typography: string;
  size: Size;
  blurValue: number;
  textCase: string;
  setTextColor: (val: string) => void;
  setTextCase: (val: string) => void;
  setBackround: (val: string) => void;
  setTypography: (val: string) => void;
  setSize: (val: Size) => void;
  setBlurValue: (val: number) => void;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 425 });

  return (
    <main>
      <Row justify={"space-between"} align={"middle"}>
        <Col xs={24} sm={24} md={15} lg={18} xl={20}>
          <div className="left" style={{ filter: `blur(${blurValue}px)` }}>
            <Row justify={"space-between"} align={"middle"}>
              <Col xl={8} xxl={8}>
                <img
                  width={isMobile ? 300 : 400}
                  height={isMobile ? 300 : 400}
                  src="https://wemanity.com/img/technological-capabilities/TechCapabilities-header-desktop.svg"
                  alt="Illustration graphique représentant des personnes qui développent des programmes informatique"
                />
              </Col>
              <Col xl={12} xxl={14}>
                <section>
                  <h1 style={comonStyle(typography, size.h1)}>
                    {handleCases(textCase, "titre")}
                  </h1>
                  <article
                    className="article"
                    style={comonStyle(typography, size.text)}
                  >
                    {handleCases(textCase, imageString)}
                  </article>
                </section>
              </Col>
            </Row>
            <Row justify={"space-between"} align={"middle"}>
              <Col xl={8} xxl={8}>
                <iframe
                  allowFullScreen
                  height={isMobile ? 250 : 300}
                  width={isMobile ? 320 : 400}
                  src="https://www.youtube.com/embed/il_t1WVLNxk"
                  title="Amazon Interview Questions - 1 | GeeksforGeeks"
                ></iframe>
              </Col>
              <Col xl={12} xxl={14}>
                <section>
                  <h1 style={comonStyle(typography, size.h1)}>
                    {handleCases(textCase, "titre de la vidéo")}
                  </h1>
                  <article
                    className="article"
                    style={comonStyle(typography, size.text)}
                  >
                    {handleCases(textCase, videoString1)}
                  </article>
                  <h2 style={comonStyle(typography, size.h2)}>
                    {handleCases(textCase, "retranscription")}
                  </h2>
                  <article
                    className="article"
                    style={comonStyle(typography, size.text)}
                  >
                    {handleCases(textCase, videoString2)}
                  </article>
                </section>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} sm={24} md={7} lg={6} xl={4}>
          <aside className="aside">
            <Score score={score} typography={typography} textCase={textCase} />
            <div className="palette">
              <FontController
                setTypography={setTypography}
                typography={typography}
              />
              <SizeController setSize={setSize} size={size} />
              <BlurController setBlurValue={setBlurValue} />
              <CaseController setTextCase={setTextCase} textCase={textCase} />
              <ColorPallet
                onChange={setTextColor}
                defaultValue={DEFAULT_TEXT_COLOR}
                title="Couleur du Text"
              />
              <ColorPallet
                onChange={setBackround}
                defaultValue={DEFAULT_BACKGROUND_COLOR}
                title="Fond d'écran"
              />
            </div>
          </aside>
        </Col>
      </Row>
    </main>
  );
};

const ColorPallet = ({
  onChange,
  defaultValue,
  title,
}: {
  onChange: (value: string) => void;
  defaultValue: string;
  title: string;
}) => {
  return (
    <ColorPicker
      defaultValue={defaultValue}
      size="large"
      onChange={(_, b) => onChange(b)}
      onClear={() => onChange(defaultValue)}
      allowClear
      disabledAlpha
      showText
      children={
        <Button
          size="large"
          shape="round"
          style={{
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
            width: "100%",
            background: "linear-gradient(in hsl longer hue 45deg, red 0 0)",
          }}
        >
          <IoIosColorPalette size={25} />
          <span>{title}</span>
        </Button>
      }
    />
  );
};

const Score = ({
  score,
  typography,
  textCase,
}: {
  score: ApiResponse;
  typography: string;
  textCase: string;
}) => {
  return (
    <output
      className="score"
      style={{
        backgroundColor: scoreColor(score.status),
      }}
    >{`votre score ${score?.ratio ?? 0}`}</output>
  );
};

const FontController = ({
  setTypography,
  typography,
}: {
  setTypography: (val: string) => void;
  typography: string;
}) => {
  const typoColor = (typo: string) => {
    if (typo === typography) {
      if (MALUS_TYPO.includes(typo)) {
        return FAIL.COLOR;
      }
      return PASS.COLOR;
    }
    return "";
  };
  return (
    <div className="fonts">
      <h3>Choix de la typo</h3>
      <div className="elements">
        <Tag onClick={() => setTypography(ROBOTO)} color={typoColor(ROBOTO)}>
          {ROBOTO}
        </Tag>
        <Tag onClick={() => setTypography(PLATIPY)} color={typoColor(PLATIPY)}>
          {PLATIPY}
        </Tag>
        <Tag onClick={() => setTypography(CINZEL)} color={typoColor(CINZEL)}>
          {CINZEL}
        </Tag>
        <Tag
          onClick={() => setTypography(MONTSERRAT)}
          color={typoColor(MONTSERRAT)}
        >
          {MONTSERRAT}
        </Tag>
        <Tag
          onClick={() => setTypography(NOTO_SANS)}
          color={typoColor(NOTO_SANS)}
        >
          {NOTO_SANS}
        </Tag>
        <Tag
          onClick={() => setTypography(BHUTUKA_EXPANDED_ONE)}
          color={typoColor(BHUTUKA_EXPANDED_ONE)}
        >
          {BHUTUKA_EXPANDED_ONE}
        </Tag>
      </div>
    </div>
  );
};
const SizeController = ({
  setSize,
  size,
}: {
  setSize: (val: Size) => void;
  size: Size;
}) => {
  const sizeColor = (selectedSize: Size) => {
    if (selectedSize === size) {
      if (MALUS_SIZES.includes(selectedSize)) return FAIL.COLOR;
      return PASS.COLOR;
    }
    return "";
  };

  return (
    <div className="sizes">
      <h3>Choix de la taille</h3>
      <div className="elements">
        <Tag onClick={() => setSize(SIZE_50)} color={sizeColor(SIZE_50)}>
          50%
        </Tag>
        <Tag
          onClick={() => setSize(DEFAULT_TEXT_SIZE)}
          color={sizeColor(DEFAULT_TEXT_SIZE)}
        >
          90%
        </Tag>
        <Tag onClick={() => setSize(SIZE_120)} color={sizeColor(SIZE_120)}>
          120%
        </Tag>
      </div>
    </div>
  );
};

const BlurController = ({
  setBlurValue,
}: {
  setBlurValue: (val: number) => void;
}) => {
  return (
    <div className="blur">
      <h3>Choix de flou</h3>
      <Slider
        max={20}
        min={0}
        onChange={(blurValue) => setBlurValue(blurValue)}
      />
    </div>
  );
};

const CaseController = ({
  setTextCase,
  textCase,
}: {
  setTextCase: (val: string) => void;
  textCase: string;
}) => {
  const getSelectedCase = (selectedCase: string) => {
    if (selectedCase === textCase) {
      if (MALUS_CASE.includes(selectedCase)) return FAIL.COLOR;
      return PASS.COLOR;
    }
    return "";
  };

  return (
    <div className="sizes">
      <h3>Choix de la casse</h3>
      <div className="elements">
        <Tag
          onClick={() => setTextCase(LOWERCASE)}
          color={getSelectedCase(LOWERCASE)}
        >
          aa
        </Tag>
        <Tag
          onClick={() => setTextCase(UPPERCASE)}
          color={getSelectedCase(UPPERCASE)}
        >
          AA
        </Tag>
        <Tag
          onClick={() => setTextCase(CAPITALIZE_FIRST_LETTER)}
          color={getSelectedCase(CAPITALIZE_FIRST_LETTER)}
        >
          Aa
        </Tag>
      </div>
    </div>
  );
};
export default Body;

const imageString =
  "contrary to popular belief, Lorem Ipsum is not simply random text. tt has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form,accompanied by English versions from the 1914 translation by H. Rackham.";

const videoString1 =
  "contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more.";
const videoString2 =
  "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
