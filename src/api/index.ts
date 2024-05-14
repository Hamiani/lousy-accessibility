import { BASE_URL } from "../constants";

export const checkAccessibility = async (colors: string[]) =>
  await fetch(BASE_URL, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify({ colors }),
  }).then((response) => response.json());

export type ApiResponse = {
  small: string;
  bold: string;
  large: string;
  overall: string;
  contrast: string;
};

