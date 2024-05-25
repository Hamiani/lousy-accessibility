import { CAPITALIZE_FIRST_LETTER, LOWERCASE, UPPERCASE } from "../constants";

export const capitalizeFirstLetter = (value: string) =>
  value.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, (m) => m.toUpperCase());

export const toUppercase = (value: string) => value.toUpperCase();

export const toLowercase = (value: string) => value.toLowerCase();

export const handleCases = (key: string, value: string) => {
  const result: Record<string, string> = {
    [LOWERCASE]: toLowercase(value),
    [UPPERCASE]: toUppercase(value),
    [CAPITALIZE_FIRST_LETTER]: capitalizeFirstLetter(value),
  };
  return result[key];
};

export const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, "");
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return { r, g, b };
};

export const rgbToHex = (r: number, g: number, b: number) => {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

export const decreaseBrightness = (hex: string, percent: number) => {
  let { r, g, b } = hexToRgb(hex);
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent / 100))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent / 100))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent / 100))));
  return rgbToHex(r, g, b);
};

interface DynamicObject {
  [key: number]: boolean;
}

export const createDynamicObject = (
  id?: number,
  length: number = 6
): DynamicObject => {
  let obj: DynamicObject = {};

  if (id === undefined || length === undefined) {
    for (let i = 1; i <= length; i++) {
      obj[i] = false;
    }

    return obj;
  }
  for (let i = 1; i <= length; i++) {
    obj[i] = i === id;
  }
  return obj;
};
