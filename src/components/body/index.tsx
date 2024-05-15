import { Button, ColorPicker, Tag, Slider, Row, Col } from "antd";
import { IoIosColorPalette } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

import "./body.css";
import {
  ACCESSIBILITY_STATUS,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
} from "../../constants";
import { ApiResponse } from "../../api";

const { KINDA, NOPE, YUP } = ACCESSIBILITY_STATUS;

const scoreColor = (status: string) => {
  const result = {
    [YUP.KEY]: YUP.COLOR,
    [KINDA.KEY]: KINDA.COLOR,
    [NOPE.KEY]: NOPE.COLOR,
  };
  return result[status];
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
  score,
  size,
  typography,
  blurValue,
}: {
  score: ApiResponse;
  typography: string;
  size: string;
  blurValue: number;
  setTextColor: (val: string) => void;
  setBackround: (val: string) => void;
  setTypography: (val: string) => void;
  setSize: (val: string) => void;
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
                  <h1 style={comonStyle(typography, size)}>titre</h1>
                  <article
                    className="article"
                    style={comonStyle(typography, size)}
                  >
                    contrary to popular belief, Lorem Ipsum is not simply random
                    text. tt has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
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
                  <h1 style={comonStyle(typography, size)}>
                    titre de la vidéo
                  </h1>
                  <article
                    className="article"
                    style={comonStyle(typography, size)}
                  >
                    contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more.
                  </article>
                  <h2 style={comonStyle(typography, size)}>retranscription</h2>
                  <article
                    className="article"
                    style={comonStyle(typography, size)}
                  >
                    it is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </article>
                </section>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} sm={24} md={7} lg={6} xl={4}>
          <aside className="aside">
            <Score score={score} />
            <div className="palette">
              <FontController
                setTypography={setTypography}
                typography={typography}
              />
              <SizeController setSize={setSize} size={size} />
              <BlurController setBlurValue={setBlurValue} />
              <ColorPallet
                onChange={setTextColor}
                defaultValue={DEFAULT_TEXT_COLOR}
                title="Couleur du Text"
              />
              <ColorPallet
                onChange={setBackround}
                defaultValue={DEFAULT_BACKGROUND_COLOR}
                title="Fond d'ecran"
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

const Score = ({ score }: { score: ApiResponse }) => {
  return (
    <output
      className="score"
      style={{ backgroundColor: scoreColor(score.overall) }}
    >{`votre score ${score?.contrast ?? 0}`}</output>
  );
};

const FontController = ({
  setTypography,
  typography,
}: {
  setTypography: (val: string) => void;
  typography: string;
}) => {
  const typoColor = (typo: string) => (typo === typography ? "blue" : "");
  return (
    <div className="fonts">
      <h3>Choix de la typo</h3>
      <div className="elements">
        <Tag
          onClick={() => setTypography("Roboto")}
          color={typoColor("Roboto")}
        >
          Roboto
        </Tag>
        <Tag
          onClick={() => setTypography("Platipy")}
          color={typoColor("Platipy")}
        >
          Platipy
        </Tag>
        <Tag
          onClick={() => setTypography("Cinzel")}
          color={typoColor("Cinzel")}
        >
          Cinzel
        </Tag>
        <Tag
          onClick={() => setTypography("Montserrat")}
          color={typoColor("Montserrat")}
        >
          Montserrat
        </Tag>
        <Tag
          onClick={() => setTypography("Noto Sans")}
          color={typoColor("Noto Sans")}
        >
          Noto Sans
        </Tag>
        <Tag
          onClick={() => setTypography("BhuTuka Expanded One")}
          color={typoColor("BhuTuka Expanded One")}
        >
          BhuTuka Expanded One
        </Tag>
      </div>
    </div>
  );
};
const SizeController = ({
  setSize,
  size,
}: {
  setSize: (val: string) => void;
  size: string;
}) => {
  const sizeColor = (selectedSize: string) =>
    selectedSize === size ? "blue" : "";

  return (
    <div className="sizes">
      <h3>Choix de la taille</h3>
      <div className="elements">
        <Tag onClick={() => setSize("50%")} color={sizeColor("50%")}>
          50%
        </Tag>
        <Tag onClick={() => setSize("90%")} color={sizeColor("90%")}>
          90%
        </Tag>
        <Tag onClick={() => setSize("120%")} color={sizeColor("120%")}>
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
export default Body;
