import { kindLabel } from "@/content/recipes";
import type { Recipe } from "@/content/types";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article
      id={`recipe-${recipe.id}`}
      className="scroll-mt-24 border border-line bg-sheet"
    >
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-4 py-3">
        <h3 className="font-display text-2xl text-ink">{recipe.title}</h3>
        <p className="text-xs tracking-wide text-fruit uppercase">{kindLabel[recipe.kind]}</p>
      </header>
      <div className="grid gap-4 px-4 py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <div>
          <p className="text-sm text-muted">
            {recipe.makes}
            <span className="px-2 text-line">/</span>
            {recipe.time}
          </p>
          <h4 className="mt-3 font-display text-base text-leaf">Ingredients</h4>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
            {recipe.ingredients.map((item) => (
              <li key={item} className="pl-3 border-l border-line">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-leaf">Method</h4>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      {recipe.note ? (
        <p className="border-t border-line px-4 py-3 text-sm leading-relaxed text-bark">{recipe.note}</p>
      ) : null}
    </article>
  );
}
