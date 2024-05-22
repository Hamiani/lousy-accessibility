import { BASE_URL } from "../constants";

export const checkAccessibility = async (params: any) =>
  await fetch(
    BASE_URL +
      "?" +
      new URLSearchParams({ fcolor: params.fcolor, bcolor: params.bcolor }) +
      "&api",
    {
      mode: "cors",
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then(({ ratio, ...data }) => ({
      ratio: parseFloat(ratio).toPrecision(2),
      status: {
        ...data,
      },
    }));

export type ApiResponse = {
  ratio: string;
  status: ScoreStatus;
};

export type ScoreStatus = {
  AA: string;
  AALarge: string;
  AAA: string;
  AAALarge: string;
};
