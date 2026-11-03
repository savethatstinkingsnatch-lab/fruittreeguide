import type { ArtKey } from "./art";

export type RecipeKind =
  | "jam"
  | "jelly"
  | "butter"
  | "can"
  | "dry"
  | "fresh"
  | "tea"
  | "syrup"
  | "animal";

export type Recipe = {
  id: string;
  title: string;
  kind: RecipeKind;
  makes: string;
  time: string;
  fruits: string[];
  ingredients: string[];
  steps: string[];
  note?: string;
};

export type Fruit = {
  id: string;
  name: string;
  latin: string;
  plate?: ArtKey;
  comesTrue: string;
  chill: string;
  sow: string;
  years: string;
  seed: string;
  kitchen: string;
  caution?: string;
};

export type MonthPlan = {
  id: string;
  name: string;
  tasks: string[];
};

export type Block =
  | { t: "p"; text: string; drop?: boolean }
  | { t: "h"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "note"; label: string; text: string }
  | { t: "pull"; text: string }
  | { t: "fig"; src: ArtKey; alt: string; caption: string }
  | { t: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { t: "recipes"; ids: string[] }
  | { t: "jump"; label: string; to: string }
  | { t: "fruits" }
  | { t: "calendar" }
  | { t: "recipe-index" };

export type Chapter = {
  id: string;
  part: string;
  num: string;
  title: string;
  lede: string;
  blocks: Block[];
};
