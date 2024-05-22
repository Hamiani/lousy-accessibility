import { CAPITALIZE_FIRST_LETTER, LOWERCASE, UPPERCASE } from "../constants";

export const capitalizeFirstLetter = (value: string) =>
  value.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());

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
