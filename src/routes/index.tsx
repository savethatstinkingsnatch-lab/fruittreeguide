import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BookApp } from "@/components/book/BookApp";

const searchSchema = z.object({
  c: z.string().optional(),
  r: z.string().optional(),
});

export const Route = createFileRoute("/")({
  validateSearch: searchSchema,
  component: Home,
});

function Home() {
  const { c, r } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <BookApp
      chapterId={c}
      recipeId={r}
      onOpen={(chapterId, recipeId) => {
        const search: { c?: string; r?: string } = {};
        if (chapterId !== "cover") search.c = chapterId;
        if (recipeId) search.r = recipeId;
        void navigate({ to: "/", search });
      }}
    />
  );
}
