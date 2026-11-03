import { chapters } from "./chapters";
import { fruits } from "./fruits";
import { recipes } from "./recipes";
import type { Block } from "./types";

export type Hit = {
  key: string;
  title: string;
  detail: string;
  chapterId: string;
  recipeId?: string;
};

function blockText(block: Block): string {
  switch (block.t) {
    case "p":
    case "h":
    case "pull":
      return block.text;
    case "note":
      return `${block.label} ${block.text}`;
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "table":
      return [...block.headers, ...block.rows.flat()].join(" ");
    case "fig":
      return block.caption;
    default:
      return "";
  }
}

export function searchBook(query: string): Hit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: Hit[] = [];

  for (const chapter of chapters) {
    const hay = `${chapter.title} ${chapter.lede} ${chapter.blocks.map(blockText).join(" ")}`.toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        key: `c-${chapter.id}`,
        title: chapter.title,
        detail: chapter.part,
        chapterId: chapter.id,
      });
    }
  }

  for (const recipe of recipes) {
    const hay = `${recipe.title} ${recipe.ingredients.join(" ")} ${recipe.steps.join(" ")}`.toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        key: `r-${recipe.id}`,
        title: recipe.title,
        detail: "Recipe",
        chapterId: "recipes",
        recipeId: recipe.id,
      });
    }
  }

  for (const fruit of fruits) {
    const hay = `${fruit.name} ${fruit.latin} ${fruit.seed} ${fruit.kitchen} ${fruit.caution ?? ""}`.toLowerCase();
    if (hay.includes(q)) {
      hits.push({
        key: `f-${fruit.id}`,
        title: fruit.name,
        detail: "Tree",
        chapterId: "twelve-trees",
      });
    }
  }

  return hits.slice(0, 24);
}
