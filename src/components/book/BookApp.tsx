import { useEffect, useMemo, useState } from "react";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Menu,
  Search,
  Type,
  X,
} from "lucide-react";
import { art } from "@/content/art";
import { months } from "@/content/calendar";
import { chapterIndex, chapters, parts } from "@/content/chapters";
import { alsoFruits, fruits } from "@/content/fruits";
import {
  recipeById,
  recipeFilters,
  recipeMatches,
  recipes,
  type RecipeFilter,
} from "@/content/recipes";
import { searchBook } from "@/content/search";
import type { Block, Chapter } from "@/content/types";
import { RecipeCard } from "./RecipeCard";

const READ_KEY = "sts-read";
const SIZE_KEY = "sts-size";
const MARK_KEY = "sts-mark";

type Size = "sm" | "md" | "lg";

export function BookApp({
  chapterId,
  recipeId,
  onOpen,
}: {
  chapterId?: string;
  recipeId?: string;
  onOpen: (chapterId: string, recipeId?: string) => void;
}) {
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [size, setSize] = useState<Size>("md");
  const [read, setRead] = useState<string[]>([]);
  const [mark, setMark] = useState<string | null>(null);
  const [fruitQuery, setFruitQuery] = useState("");
  const [openFruit, setOpenFruit] = useState<string | null>("apple");
  const [filter, setFilter] = useState<RecipeFilter>("all");
  const [monthId, setMonthId] = useState(months[new Date().getMonth()]?.id ?? "jan");

  useEffect(() => {
    const storedSize = localStorage.getItem(SIZE_KEY);
    if (storedSize === "sm" || storedSize === "md" || storedSize === "lg") setSize(storedSize);
    const storedMark = localStorage.getItem(MARK_KEY);
    if (storedMark) setMark(storedMark);
    try {
      const parsed = JSON.parse(localStorage.getItem(READ_KEY) ?? "[]") as unknown;
      if (Array.isArray(parsed)) setRead(parsed.filter((item) => typeof item === "string"));
    } catch {
      setRead([]);
    }
  }, []);

  useEffect(() => {
    if (!chapterId) return;
    setRead((current) => {
      if (current.includes(chapterId)) return current;
      const next = [...current, chapterId];
      localStorage.setItem(READ_KEY, JSON.stringify(next));
      return next;
    });
  }, [chapterId]);

  useEffect(() => {
    const node = document.getElementById("reader-scroll");
    if (recipeId) {
      document.getElementById(`recipe-${recipeId}`)?.scrollIntoView({ block: "start" });
      return;
    }
    node?.scrollTo({ top: 0 });
  }, [chapterId, recipeId]);

  const chapter = chapters.find((item) => item.id === chapterId);
  const index = chapter ? chapterIndex(chapter.id) : -1;
  const previous = index > 0 ? chapters[index - 1] : undefined;
  const next = index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined;
  const hits = useMemo(() => searchBook(query), [query]);
  const progress = Math.round((read.length / chapters.length) * 100);
  const sizeClass = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";

  function openChapter(id: string, recipe?: string) {
    setMenu(false);
    setSearchOpen(false);
    onOpen(id, recipe);
  }

  function cycleSize() {
    const order: Size[] = ["sm", "md", "lg"];
    const nextSize = order[(order.indexOf(size) + 1) % order.length] ?? "md";
    setSize(nextSize);
    localStorage.setItem(SIZE_KEY, nextSize);
  }

  function toggleMark() {
    if (!chapter) return;
    const nextMark = mark === chapter.id ? null : chapter.id;
    setMark(nextMark);
    if (nextMark) localStorage.setItem(MARK_KEY, nextMark);
    else localStorage.removeItem(MARK_KEY);
  }

  return (
    <div className="flex h-dvh bg-paper text-ink">
      <aside className="no-print hidden w-72 shrink-0 flex-col border-r border-line bg-sheet md:flex">
        <Sidebar
          progress={progress}
          activeId={chapter?.id}
          mark={mark}
          onOpen={openChapter}
        />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="no-print flex items-center gap-2 border-b border-line bg-sheet px-3 py-2">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center md:hidden"
            aria-label="Open contents"
            onClick={() => setMenu(true)}
          >
            <Menu className="size-5" />
          </button>
          <button
            type="button"
            className="min-w-0 flex-1 truncate text-left font-display text-lg"
            onClick={() => openChapter("cover")}
          >
            Pip to Orchard
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
            aria-label="Search the book"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
            aria-label="Change type size"
            onClick={cycleSize}
          >
            <Type className="size-5" />
          </button>
          {chapter ? (
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center"
              aria-label={mark === chapter.id ? "Remove bookmark" : "Bookmark this chapter"}
              aria-pressed={mark === chapter.id}
              onClick={toggleMark}
            >
              <Bookmark className={`size-5 ${mark === chapter.id ? "fill-fruit text-fruit" : ""}`} />
            </button>
          ) : null}
        </header>

        <main id="reader-scroll" className="min-h-0 flex-1 overflow-y-auto">
          {chapter ? (
            <article className={`reader mx-auto max-w-3xl px-5 pt-8 pb-16 ${sizeClass}`}>
              <p className="text-xs tracking-[0.18em] text-leaf uppercase">
                {chapter.part}
                <span className="px-2 text-line">/</span>
                {chapter.num}
              </p>
              <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">{chapter.title}</h1>
              <p className="mt-3 text-muted italic">{chapter.lede}</p>
              <div className="mt-8 space-y-5">
                {chapter.blocks.map((block, i) => (
                  <BlockView
                    key={`${chapter.id}-${i}`}
                    block={block}
                    onOpen={openChapter}
                    fruitQuery={fruitQuery}
                    setFruitQuery={setFruitQuery}
                    openFruit={openFruit}
                    setOpenFruit={setOpenFruit}
                    filter={filter}
                    setFilter={setFilter}
                    monthId={monthId}
                    setMonthId={setMonthId}
                  />
                ))}
              </div>
              <footer className="mt-12 flex items-stretch justify-between gap-3 border-t border-line pt-6">
                {previous ? (
                  <button type="button" className="min-h-11 max-w-[46%] text-left" onClick={() => openChapter(previous.id)}>
                    <span className="flex items-center gap-1 text-xs tracking-wide text-muted uppercase">
                      <ChevronLeft className="size-4" /> Previous
                    </span>
                    <span className="mt-1 block font-display text-lg leading-tight">{previous.title}</span>
                  </button>
                ) : (
                  <span />
                )}
                {next ? (
                  <button type="button" className="min-h-11 max-w-[46%] text-right" onClick={() => openChapter(next.id)}>
                    <span className="flex items-center justify-end gap-1 text-xs tracking-wide text-muted uppercase">
                      Next <ChevronRight className="size-4" />
                    </span>
                    <span className="mt-1 block font-display text-lg leading-tight">{next.title}</span>
                  </button>
                ) : (
                  <span />
                )}
              </footer>
            </article>
          ) : chapterId ? (
            <Missing onOpen={openChapter} />
          ) : (
            <Cover mark={mark} onOpen={openChapter} />
          )}
        </main>
        <footer className="shrink-0 border-t border-line bg-sheet px-4 py-3 text-xs leading-relaxed text-muted">
          Privacy: This guide does not collect your name, email, or any personal information. Your choices are
          saved only on your own device.
        </footer>
      </div>

      {menu ? (
        <div className="no-print fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label="Close contents"
            onClick={() => setMenu(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col bg-sheet">
            <div className="flex justify-end px-2 py-2">
              <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center" aria-label="Close" onClick={() => setMenu(false)}>
                <X className="size-5" />
              </button>
            </div>
            <Sidebar progress={progress} activeId={chapter?.id} mark={mark} onOpen={openChapter} />
          </div>
        </div>
      ) : null}

      {searchOpen ? (
        <div className="no-print fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-16">
          <div className="w-full max-w-xl border border-line bg-sheet shadow-sm">
            <div className="flex items-center gap-2 border-b border-line px-3">
              <Search className="size-4 text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search trees, jars, tea…"
                className="min-h-12 w-full bg-transparent py-3 text-base outline-none"
              />
              <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center" aria-label="Close search" onClick={() => setSearchOpen(false)}>
                <X className="size-5" />
              </button>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto">
              {query.trim().length >= 2 && hits.length === 0 ? (
                <li className="px-4 py-6 text-sm text-muted">Nothing in the book matches that.</li>
              ) : null}
              {hits.map((hit) => (
                <li key={hit.key} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    className="flex min-h-11 w-full items-baseline justify-between gap-3 px-4 py-3 text-left"
                    onClick={() => openChapter(hit.chapterId, hit.recipeId)}
                  >
                    <span className="font-display text-lg">{hit.title}</span>
                    <span className="shrink-0 text-xs tracking-wide text-muted uppercase">{hit.detail}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Sidebar({
  progress,
  activeId,
  mark,
  onOpen,
}: {
  progress: number;
  activeId?: string;
  mark: string | null;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-line px-4 py-4">
        <button type="button" className="flex items-center gap-2 text-left" onClick={() => onOpen("cover")}>
          <Leaf className="size-5 text-leaf" />
          <span>
            <span className="block font-display text-lg leading-tight">Fruit Trees: Pip to Orchard</span>
            <span className="mt-1 block text-xs tracking-wide text-muted uppercase">
              Pocket Guide, Volume 11
            </span>
          </span>
        </button>
        <div className="mt-4">
          <div className="h-1 bg-paper-deep">
            <div className="h-1 bg-leaf" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-1 text-xs text-muted">{progress}% of the chapters opened</p>
        </div>
      </div>
      <nav className="min-h-0 flex-1 overflow-y-auto px-2 py-3" aria-label="Contents">
        {parts().map((part) => (
          <div key={part.name} className="mb-4">
            <p className="px-2 pb-1 text-xs tracking-[0.16em] text-muted uppercase">{part.name}</p>
            <ul>
              {part.chapters.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onOpen(item.id)}
                    className={`flex min-h-11 w-full items-center gap-2 px-2 py-2 text-left text-sm leading-snug ${
                      activeId === item.id ? "bg-leaf-soft text-leaf" : "hover:bg-paper"
                    }`}
                  >
                    <span className="w-6 shrink-0 text-xs text-muted">{item.num}</span>
                    <span className="flex-1">{item.title}</span>
                    {mark === item.id ? <Bookmark className="size-3.5 fill-fruit text-fruit" /> : null}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}

function Cover({
  mark,
  onOpen,
}: {
  mark: string | null;
  onOpen: (id: string) => void;
}) {
  const marked = chapters.find((chapter) => chapter.id === mark);
  return (
    <div className="mx-auto max-w-5xl px-5 pt-6 pb-16">
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <img
          src={art.cover}
          alt="Apple, quince, peach, pomegranate, fig, a jar of jam, and a hibiscus branch on linen."
          className="w-full border border-line"
        />
        <div>
          <p className="text-xs tracking-[0.16em] text-leaf uppercase">
            The Education Revolution Pocket Guide, Volume 11
          </p>
          <h1 className="mt-2 font-display text-5xl leading-none text-ink sm:text-6xl">
            Fruit Trees: Pip to Orchard
          </h1>
          <p className="mt-3 font-display text-xl text-bark">by Blue and the Awesome Dudes</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">
            Fruit trees grown, eaten, put up, and planted again. Canning, jams and jellies, storage, and the
            recipes that use them. A bonus on the hibiscus — the tree, the calyx, the tea — and a second bonus
            on what the animals may have from the orchard.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center bg-leaf px-4 font-display text-sheet"
              onClick={() => onOpen("start-here")}
            >
              Open the book
            </button>
            {marked ? (
              <button type="button" className="inline-flex min-h-11 items-center px-2 text-leaf" onClick={() => onOpen(marked.id)}>
                Continue · {marked.title}
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {parts().map((part) => (
          <section key={part.name}>
            <h2 className="font-display text-2xl">{part.name}</h2>
            <ul className="mt-2">
              {part.chapters.map((chapter) => (
                <li key={chapter.id}>
                  <button
                    type="button"
                    className="flex min-h-11 w-full items-baseline gap-3 border-b border-line py-2 text-left"
                    onClick={() => onOpen(chapter.id)}
                  >
                    <span className="w-8 text-xs text-muted">{chapter.num}</span>
                    <span>{chapter.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function Missing({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="mx-auto max-w-xl px-5 py-20">
      <h1 className="font-display text-4xl">That page is not in the book</h1>
      <button type="button" className="mt-6 inline-flex min-h-11 items-center text-leaf" onClick={() => onOpen("cover")}>
        Return to the cover
      </button>
    </div>
  );
}

function BlockView({
  block,
  onOpen,
  fruitQuery,
  setFruitQuery,
  openFruit,
  setOpenFruit,
  filter,
  setFilter,
  monthId,
  setMonthId,
}: {
  block: Block;
  onOpen: (id: string, recipeId?: string) => void;
  fruitQuery: string;
  setFruitQuery: (value: string) => void;
  openFruit: string | null;
  setOpenFruit: (id: string | null) => void;
  filter: RecipeFilter;
  setFilter: (filter: RecipeFilter) => void;
  monthId: string;
  setMonthId: (id: string) => void;
}) {
  if (block.t === "p") {
    return <p className={block.drop ? "drop" : undefined}>{block.text}</p>;
  }
  if (block.t === "h") {
    return <h2 className="pt-4 font-display text-3xl leading-tight">{block.text}</h2>;
  }
  if (block.t === "ul") {
    return (
      <ul className="space-y-2 pl-1">
        {block.items.map((item) => (
          <li key={item} className="border-l-2 border-leaf pl-3">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.t === "ol") {
    return (
      <ol className="list-decimal space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ol>
    );
  }
  if (block.t === "note") {
    return (
      <aside className="border border-line bg-fruit-soft px-4 py-3">
        <p className="text-xs tracking-[0.16em] text-fruit uppercase">{block.label}</p>
        <p className="mt-1">{block.text}</p>
      </aside>
    );
  }
  if (block.t === "pull") {
    return <blockquote className="border-l-4 border-leaf py-1 pl-4 font-display text-2xl leading-snug">{block.text}</blockquote>;
  }
  if (block.t === "fig") {
    return (
      <figure className="-mx-1 sm:mx-0">
        <img src={art[block.src]} alt={block.alt} className="w-full border border-line" />
        <figcaption className="mt-2 text-sm leading-relaxed text-muted">{block.caption}</figcaption>
      </figure>
    );
  }
  if (block.t === "table") {
    return (
      <figure className="overflow-x-auto border border-line">
        {block.caption ? <figcaption className="border-b border-line bg-paper-deep px-3 py-2 text-sm text-bark">{block.caption}</figcaption> : null}
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-leaf-soft text-leaf">
            <tr>
              {block.headers.map((header) => (
                <th key={header} className="px-3 py-2 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("|")} className="border-t border-line align-top">
                {row.map((cell) => (
                  <td key={cell} className="px-3 py-2 leading-relaxed">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    );
  }
  if (block.t === "jump") {
    return (
      <button type="button" className="inline-flex min-h-11 items-center font-display text-leaf" onClick={() => onOpen(block.to)}>
        {block.label}
        <ChevronRight className="size-4" />
      </button>
    );
  }
  if (block.t === "recipes") {
    return (
      <div className="space-y-4">
        {block.ids.map((id) => {
          const recipe = recipeById[id];
          return recipe ? <RecipeCard key={id} recipe={recipe} /> : null;
        })}
      </div>
    );
  }
  if (block.t === "fruits") return (
    <FruitDeck
      query={fruitQuery}
      setQuery={setFruitQuery}
      openId={openFruit}
      setOpenId={setOpenFruit}
    />
  );
  if (block.t === "calendar") return <CalendarView monthId={monthId} setMonthId={setMonthId} />;
  if (block.t === "recipe-index") return <RecipeIndex filter={filter} setFilter={setFilter} />;
  return null;
}

function FruitDeck({
  query,
  setQuery,
  openId,
  setOpenId,
}: {
  query: string;
  setQuery: (value: string) => void;
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const q = query.trim().toLowerCase();
  const shown = fruits.filter((fruit) =>
    q.length === 0
      ? true
      : `${fruit.name} ${fruit.latin} ${fruit.kitchen} ${fruit.caution ?? ""}`.toLowerCase().includes(q),
  );
  return (
    <div>
      <label className="block text-sm text-muted" htmlFor="fruit-find">
        Find a tree
      </label>
      <input
        id="fruit-find"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Apple, pawpaw, citrus…"
        className="mt-1 min-h-11 w-full border border-line bg-sheet px-3"
      />
      <div className="mt-4 space-y-3">
        {shown.map((fruit) => {
          const open = openId === fruit.id;
          return (
            <section key={fruit.id} className="border border-line bg-sheet">
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3 text-left"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : fruit.id)}
              >
                <span>
                  <span className="block font-display text-2xl">{fruit.name}</span>
                  <span className="text-sm text-muted italic">{fruit.latin}</span>
                </span>
                <ChevronRight className={`size-4 shrink-0 ${open ? "rotate-90" : ""}`} />
              </button>
              {open ? (
                <div className="space-y-3 border-t border-line px-4 py-4 text-base">
                  {fruit.plate ? (
                    <img src={art[fruit.plate]} alt="" className="w-full max-w-sm border border-line" />
                  ) : null}
                  <p><span className="font-display text-leaf">Comes true. </span>{fruit.comesTrue}</p>
                  <p><span className="font-display text-leaf">Chill. </span>{fruit.chill}</p>
                  <p><span className="font-display text-leaf">Sow. </span>{fruit.sow}</p>
                  <p><span className="font-display text-leaf">Years. </span>{fruit.years}</p>
                  <p><span className="font-display text-leaf">Seed. </span>{fruit.seed}</p>
                  <p><span className="font-display text-leaf">Kitchen. </span>{fruit.kitchen}</p>
                  {fruit.caution ? (
                    <p className="border-l-2 border-fruit pl-3 text-bark">{fruit.caution}</p>
                  ) : null}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
      <h3 className="mt-8 font-display text-2xl">Also in the row</h3>
      <ul className="mt-3 space-y-3">
        {alsoFruits.map((fruit) => (
          <li key={fruit.name}>
            <span className="font-display text-leaf">{fruit.name}. </span>
            {fruit.note}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CalendarView({
  monthId,
  setMonthId,
}: {
  monthId: string;
  setMonthId: (id: string) => void;
}) {
  const current = months[new Date().getMonth()]?.id;
  const month = months.find((item) => item.id === monthId) ?? months[0];
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {months.map((item) => {
          const selected = item.id === month?.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setMonthId(item.id)}
              className={`min-h-11 border px-2 py-2 text-sm ${
                selected ? "border-leaf bg-leaf text-sheet" : "border-line bg-sheet"
              }`}
            >
              {item.name.slice(0, 3)}
              {item.id === current ? <span className="mt-0.5 block text-xs opacity-80">Now</span> : null}
            </button>
          );
        })}
      </div>
      {month ? (
        <div className="mt-4 border border-line bg-sheet p-4">
          <h3 className="font-display text-3xl">{month.name}</h3>
          <ul className="mt-3 space-y-3">
            {month.tasks.map((task) => (
              <li key={task} className="border-l-2 border-leaf pl-3">
                {task}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function RecipeIndex({
  filter,
  setFilter,
}: {
  filter: RecipeFilter;
  setFilter: (filter: RecipeFilter) => void;
}) {
  const shown = recipes.filter((recipe) => recipeMatches(recipe.kind, filter));
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {recipeFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`min-h-11 border px-3 text-sm ${
              filter === item.id ? "border-leaf bg-leaf text-sheet" : "border-line bg-sheet"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4 space-y-4">
        {shown.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export function chapterExists(id: string | undefined): id is string {
  return chapters.some((chapter: Chapter) => chapter.id === id);
}
