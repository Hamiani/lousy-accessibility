import { Button, ColorPicker, Tag, Slider } from "antd";
import { IoIosColorPalette } from "react-icons/io";

import {
  ACCESSIBILITY_STATUS,
  CAPITALIZE_FIRST_LETTER,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_TEXT_COLOR,
  SIZE_90,
  LOWERCASE,
  SIZE_110,
  SIZE_120,
  SIZE_50,
  TYPOGRAPHY,
  UPPERCASE,
  SIZE_70,
  SIZE_100,
  SIZE_150,
} from "../../constants";
import { ApiResponse, ScoreStatus } from "../../api";
import "./remoteControl.css";
import { Size } from "../../App";

const { PASS, FAIL } = ACCESSIBILITY_STATUS;
const {
  PLATIPY,
  CINZEL,
  BHUTUKA_EXPANDED_ONE,
  ROBOTO,
  MONTSERRAT,
  NOTO_SANS,
  PACIFICO,
  LOBSTER,
  CAVEAT,
} = TYPOGRAPHY;
const MALUS_TYPO = [
  PLATIPY,
  CINZEL,
  BHUTUKA_EXPANDED_ONE,
  PACIFICO,
  LOBSTER,
  CAVEAT,
];
const MALUS_CASE = [LOWERCASE, UPPERCASE];
const MALUS_SIZES = [SIZE_50, SIZE_150, SIZE_70, SIZE_90];

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

const Score = ({ score }: { score: ApiResponse }) => {
  return (
    <output
      className="score"
      style={{
        backgroundColor: scoreColor(score.status),
        fontSize: "16px !important",
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
        <Tag
          onClick={() => setTypography(PACIFICO)}
          color={typoColor(PACIFICO)}
        >
          {PACIFICO}
        </Tag>
        <Tag onClick={() => setTypography(CAVEAT)} color={typoColor(CAVEAT)}>
          {CAVEAT}
        </Tag>
        <Tag onClick={() => setTypography(LOBSTER)} color={typoColor(LOBSTER)}>
          {LOBSTER}
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
        <Tag onClick={() => setSize(SIZE_70)} color={sizeColor(SIZE_70)}>
          70%
        </Tag>

        <Tag onClick={() => setSize(SIZE_90)} color={sizeColor(SIZE_90)}>
          90%
        </Tag>
        <Tag onClick={() => setSize(SIZE_100)} color={sizeColor(SIZE_100)}>
          100%
        </Tag>
        <Tag onClick={() => setSize(SIZE_110)} color={sizeColor(SIZE_110)}>
          110%
        </Tag>
        <Tag onClick={() => setSize(SIZE_120)} color={sizeColor(SIZE_120)}>
          120%
        </Tag>
        <Tag onClick={() => setSize(SIZE_150)} color={sizeColor(SIZE_150)}>
          150%
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

const RemoteControl = ({
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
  return (
    <aside className="aside">
      <Score score={score} />
      <div className="palette">
        <FontController setTypography={setTypography} typography={typography} />
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
  );
};

export default RemoteControl;
