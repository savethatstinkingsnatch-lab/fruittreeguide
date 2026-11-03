import type { Chapter } from "./types";

export const chapters: Chapter[] = [
  {
    id: "start-here",
    part: "Front matter",
    num: "Go",
    title: "Start here",
    lede: "New to fruit trees? Do these in order.",
    blocks: [
      {
        t: "ol",
        items: [
          "Find your USDA zone and your chill hours (ask your county extension office).",
          "Pick fruits that fit your winter. Check whether they need a pollination partner.",
          "Buy grafted trees from a nursery. Seeds from store fruit will not grow the same fruit.",
          "Plant in full sun, in soil that drains, with the graft bump above the soil.",
          "Water deeply every week the first summer. Keep grass away from the trunk.",
          "Prune in late winter. Thin the fruit in early summer.",
          "Want to grow from seed for fun or for rootstock? See “Waking a seed.”",
        ],
      },
      { t: "jump", label: "Waking a seed", to: "waking-seed" },
      { t: "jump", label: "Words used in this guide", to: "glossary" },
    ],
  },
  {
    id: "how-to-use",
    part: "Front matter",
    num: "00",
    title: "How to use this almanac",
    lede: "A book for the person who wants a tree, a jar, and a seed worth planting again.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "Seed to seed means the long loop: you take seed from fruit that ripened where you live, you grow the tree, you eat, you put up what you cannot eat, and you save seed again with a label that still means something in five years. Some fruits cooperate. Apples mostly do not. This book says which is which, and it does not pretend a pip is a named variety.",
      },
      {
        t: "p",
        text: "Read it in order once. After that, use it as a bench book. The twelve trees are a field guide. The calendar is a year. The pantry chapters are the methods. The recipes are the pots and jars those methods allow. Two bonus chapters sit at the back on purpose: the hibiscus, which is only sometimes a tree, and the animals, who will eat your windfalls whether you planned for them or not.",
      },
      { t: "jump", label: "Start with what seed can and cannot do", to: "what-seed-means" },
    ],
  },
  {
    id: "safety",
    part: "Front matter",
    num: "01",
    title: "Plain cautions",
    lede: "The short list that keeps a good harvest from becoming a bad week.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "Fruit is gentler to preserve than green beans or meat, because most ripe fruit is acid enough for a boiling-water bath. Gentler is not the same as casual. The failures that matter are a jar that was never processed, a pit left in the feed pan, a moldy apple “mostly cut away,” and a plant you could not name.",
      },
      {
        t: "h",
        text: "In the kitchen",
      },
      {
        t: "ul",
        items: [
          "Water-bath can high-acid fruit. Do not water-bath vegetables, meat, or soup in a fruit jar beside them.",
          "Use tested times for canned peaches, pears, plums, and applesauce. The jams, jellies, butters, and conserves in this book are not tested canning formulas. Store them in the refrigerator and use them within 3 weeks, or freeze them.",
          "Do not seal jars with paraffin, cloth, or an inverted lid and a hope. The pantry picture in this book is a mood. The seal is a two-piece lid and a boil.",
          "White-flesh peaches are not for boiling-water canning.",
          "Figs need bottled lemon juice in any jar you process. Their acidity wanders.",
          "If a seal fails on the shelf, do not taste the food. Do not feed it out.",
        ],
      },
      {
        t: "h",
        text: "In the orchard and the feed pan",
      },
      {
        t: "ul",
        items: [
          "Stone-fruit pits and kernels are not food for you or for animals. Wilted leaves and prunings of cherry, peach, plum, and apricot do not go into a paddock.",
          "Apple seeds are not a tea and not a mash. The flesh is the food.",
          "Moldy or fermented windfalls are compost, not treats. Horses and a bucket of foamy apples are a bad match.",
          "Persimmons and horses do not share a field.",
          "Only cook ripe black or blue elderberry. Not red elder, not leaves, not raw bunches you are unsure of.",
          "Hibiscus for the cup is roselle you grew or a flower you can name, unsprayed. Florist stems are not ingredients.",
        ],
      },
      {
        t: "h",
        text: "Stay safe in the orchard",
      },
      {
        t: "ul",
        items: [
          "Ladders: Use a 3-legged orchard ladder on soft ground, or a stepladder fully open and locked. Never stand on the top two steps. Don't reach so far that your belt buckle passes the side rail. Have someone nearby.",
          "Sprays: Even organic sprays can hurt you. Read the whole label. The label is the law. Wear gloves, long sleeves, and eye protection. Never spray open blossoms, because it kills bees. Wait the number of days the label says before you pick.",
          "Seeds and pits: Never eat, grind, or brew apple seeds or the kernels inside cherry, peach, plum, or apricot pits. They can release cyanide.",
          "Wild trees: Never eat fruit from a tree or shrub you can't name for sure. Wild cherry leaves are poisonous to livestock. Yew, buckthorn, and nightshade berries are poisonous.",
          "If someone eats something poisonous, call Poison Control at 1-800-222-1222.",
        ],
      },
      {
        t: "note",
        label: "Not a clinic",
        text: "This is husbandry and home preserving, not veterinary medicine and not medical advice. If a person or an animal is ill after a meal, call a professional. When a plant is unfamiliar, the answer is not to try a little on the smallest hen.",
      },
    ],
  },
  {
    id: "what-seed-means",
    part: "The tree",
    num: "02",
    title: "What seed to seed means",
    lede: "A seedling is a new individual. A graft is a promise. Both belong in a home orchard.",
    blocks: [
      {
        t: "fig",
        src: "orchard",
        alt: "A small home orchard of fruit trees, a ladder, and a basket of apples.",
        caption: "Four trees, a ladder, and a basket. Plant fewer than you imagine, and water the ones you plant.",
      },
      {
        t: "p",
        drop: true,
        text: "A named apple is a clone. Every Honeycrisp is a piece of one tree, kept alive by grafting. The pips inside that apple are its children, and children are not copies. If you plant them you may get something sharp and small, or something you will name yourself. You will not get Honeycrisp.",
      },
      {
        t: "p",
        text: "Seed to seed, in this book, is honest about that. For apples and pears, saving seed means you are breeding, or you are growing a rootstock onto which you will graft wood from a tree whose fruit you have eaten. For peaches, quince, pomegranate, citrus, and pawpaw, the seedling is often the tree you keep. For figs, the seed is usually a dead end, and a cutting is the true copy.",
      },
      {
        t: "p",
        text: "The loop still closes. You choose fruit that ripened in your weather, you clean the seed, you give it the winter it expects, you plant it where it can live ten years, and you write the parent’s name on a label that will outlast the pot. That is the work. The jar on the shelf is the middle of the same loop, not a different hobby.",
      },
      {
        t: "pull",
        text: "Buy one grafted tree of a fruit you already love. Grow three seedlings of a fruit that comes reasonably true. Learn from the difference.",
      },
      {
        t: "h",
        text: "Plant patents",
      },
      {
        t: "p",
        text: "Many new fruit varieties are patented. The tag will show “PP” and a number. It is against the law to graft or root copies of a patented tree to give away or sell until the patent runs out, usually 20 years. Older varieties are free to graft and share.",
      },
    ],
  },
  {
    id: "comes-true",
    part: "The tree",
    num: "03",
    title: "Which fruits come true",
    lede: "A working sort, not a botany exam.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "“Comes true” means the fruit is close enough to the parent that a family would recognize it. It does not mean a nursery guarantee. Climate, the other tree that donated pollen, and plain luck all sit in the seed.",
      },
      {
        t: "table",
        caption: "What to expect from a seed",
        headers: ["Fruit", "From seed", "Surer path to the same fruit"],
        rows: [
          ["Apple, pear, sweet cherry", "A new variety", "Graft a twig of the parent"],
          ["Peach, apricot, plum", "Often similar, still a gamble", "A named tree, or budwood"],
          ["Quince, pomegranate", "Fairly close", "Cuttings or a seedling you taste"],
          ["Citrus", "Often a copy, by nucellar seed", "Keep the vigorous seedlings"],
          ["Pawpaw, American persimmon", "The species, not the cultivar", "Graft if you need a named fruit"],
          ["Fig", "Usually no viable seed", "A hardwood cutting"],
          ["Mulberry", "Unpredictable", "A cutting from a tree you like"],
        ],
      },
      {
        t: "p",
        text: "Pollen is half the seed. A peach in a row of peaches is a better bet than a peach beside a wild plum. An apple seed’s father is whatever bloomed that week within a bee’s flight. That is why cider orchards full of seedlings were once ordinary, and why a single backyard apple tree’s children are a lottery.",
      },
      {
        t: "note",
        label: "Supermarket seed",
        text: "A seed from grocery fruit can sprout. It may also be from a variety that needs a winter you do not have, or a summer long enough to ripen fruit you will never see. Prefer seed from a tree that already fruits on your road.",
      },
    ],
  },
  {
    id: "waking-seed",
    part: "The tree",
    num: "04",
    title: "Waking a seed",
    lede: "Cold, moisture, and a label. Most of the rest is patience.",
    blocks: [
      {
        t: "fig",
        src: "seeds",
        alt: "A natural-history plate of fruit seeds, a cracked stone, leaves, and pomegranate arils.",
        caption: "Every seed in the orchard is a different kind of patience. Some must never dry. Some must sleep cold and damp.",
      },
      {
        t: "p",
        drop: true,
        text: "Most temperate fruit seed will not sprout the week you eat the fruit. It expects a winter. You can let the weather be the winter, and sow outdoors in autumn where rodents and rot will take a tax. Or you can counterfeit winter in a refrigerator, which is slower to explain and kinder to a dozen precious pits.",
      },
      {
        t: "h",
        text: "The fridge method",
      },
      {
        t: "ol",
        items: [
          "Clean the seed. Sugar left on it molds. A pit can stay intact, or be opened carefully so the kernel is not cut.",
          "Mix with barely moist sand, vermiculite, or a wrung-out paper towel. Squeeze the medium. If water drips, it is too wet.",
          "Seal it in a bag or tub. Write the fruit, the parent if you know it, and the date on the outside.",
          "Refrigerate, not freeze, between about 34 and 40°F. Check every two weeks. If it dries, mist the towel. If it molds, rinse the seed and start the medium over.",
          "When the time for that species has passed, or when a root tip just shows, sow. Do not wait for a long root in the bag. It snaps.",
        ],
      },
      {
        t: "table",
        caption: "A starting chill, moist, just above freezing",
        headers: ["Seed", "Time", "Drying"],
        rows: [
          ["Apple, pear", "60–90 days", "May dry briefly if you will chill later"],
          ["Quince", "30–90 days", "Keep it from going bone dry"],
          ["Peach, plum, apricot, cherry", "90–120 days", "Pits store dry, then need the chill"],
          ["Persimmon", "60–90 days", "Chill while still moist"],
          ["Pawpaw", "90–120 days", "Never let it dry"],
          ["Citrus", "None", "Sow fresh; do not dry"],
          ["Pomegranate", "Little or none", "Fresh is best"],
          ["Mulberry", "30–90 days", "Tiny; do not bury deep"],
        ],
      },
      {
        t: "p",
        text: "Warmth after the chill should be steady, not a sunny windowsill that bakes by noon and goes cold at night. A deep pot matters more than a rich one. Fruit trees germinate in ordinary seed-starting mix. The fertility comes later, outside.",
      },
      {
        t: "note",
        label: "Recalcitrant seed",
        text: "Pawpaw, many citrus, and fresh loquat die if they dry. They are not packet seed. If you cannot sow them soon, keep them cool and slightly moist, and check them. Orthodox seed — apple, the stone fruits once dried — can sit cool and dry, then be waked with moisture and cold.",
      },
    ],
  },
  {
    id: "nursery",
    part: "The tree",
    num: "05",
    title: "The nursery year",
    lede: "A seedling’s first job is a root, not a crop.",
    blocks: [
      {
        t: "fig",
        src: "nursery",
        alt: "Young fruit trees in clay pots on a wooden bench.",
        caption: "The nursery year is pots, water, and a label. Fruit comes later.",
      },
      {
        t: "p",
        drop: true,
        text: "Sow one seed to a deep pot if you can spare the space. A community pot is fine for citrus and mulberry, which transplant small. Pawpaw and persimmon hate a broken taproot; give them a tall pot and plant them out before the root circles.",
      },
      {
        t: "ul",
        items: [
          "Cover seed about twice its thickness. Mulberry and fig seed, if viable, want light; press them onto the surface.",
          "Water from below until the top darkens, then let the surface go a little dull before you water again. Constant sop breeds damping-off.",
          "The first leaves after the seed leaves are the ones that should look like the tree. If they do not, you may be growing a weed. Do not be proud. Pull it.",
          "Pot on when roots show at the drainage hole. A slightly larger pot, not a bucket.",
          "Full sun once they are sturdy, with water the same day if the leaves flag. A seedling that falls over from thirst is telling you the pot is too small or the wind is too constant.",
        ],
      },
      {
        t: "h",
        text: "When seed is the root and not the fruit",
      },
      {
        t: "p",
        text: "An apple seedling can become the rootstock for a whip of the apple you actually wanted. In late winter, cut a dormant scion with three buds from a healthy tree. Cut a matching tongue on the seedling stem, fit the green layers under the bark together, and bind them with grafting tape. The upper part becomes the named apple. The roots remain the child of the pip. That is still seed to fruit. It is simply honest about which half is which.",
      },
      {
        t: "p",
        text: "Summer budding is the other common lesson: a single bud slipped under the bark of a leafy stock. Learn one method and do it ten times. The first failures are the tuition.",
      },
    ],
  },
  {
    id: "planting",
    part: "The tree",
    num: "06",
    title: "Planting the orchard",
    lede: "Sun, drainage, and the graft above the soil.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "Fruit trees want sun, moving air, and soil that does not stay soggy. A low pocket that smells sweet after rain is a place for a plum only if you are willing to lose it. Six hours of direct sun is a minimum you will feel at harvest. Eight is better. A fig will take reflected heat from a wall. A pawpaw wants shade while it is young and light when it is tall.",
      },
      {
        t: "h",
        text: "Chill hours",
      },
      {
        t: "p",
        text: "Most fruit trees need a certain number of winter hours between 32 and 45°F before they will bloom. This is called chill hours. A tree that needs 800 hours will not fruit well in a warm-winter area that only gets 300. In the South, buy low-chill varieties. Your county extension office can tell you your area's chill hours.",
      },
      {
        t: "h",
        text: "The hole",
      },
      {
        t: "ol",
        items: [
          "Dig a hole as deep as the roots and twice as wide. Do not dig a sump in heavy clay that fills with water. On clay, plant slightly high, on a broad mound.",
          "Set the tree so the soil line matches the nursery line. If there is a graft — a swollen or angled scar low on the trunk — it stays several inches above the soil. Buried grafts put the variety on its own roots or rot.",
          "Spread the roots. Cut only those that are broken or circling hard.",
          "Backfill with the soil you took out. Fancy compost in the hole makes a soft pocket the roots refuse to leave. Compost belongs on the surface, as mulch, after the tree is in.",
          "Water until the soil settles against the roots. Stake only if the site is windy, and tie with a loose loop. A tree that never moves grows a lazy trunk.",
        ],
      },
      {
        t: "p",
        text: "Distance is the part people cheat. A standard apple wants a room of its own, on the order of 20 feet. A peach wants 15. A quince or a pomegranate can live closer. Roots share more politely than branches do. Crowded crowns stay wet, and wet blossoms get brown rot and scab.",
      },
      {
        t: "h",
        text: "Spacing by tree size",
      },
      {
        t: "p",
        text: "Tree size depends on the rootstock, the roots it was grafted onto.",
      },
      {
        t: "ul",
        items: [
          "Dwarf: about 8 to 10 feet apart. Fruits in 2 to 3 years. Often needs a stake.",
          "Semi-dwarf: about 12 to 15 feet apart.",
          "Standard: about 20 feet or more apart. Fruits in 5 to 8 years.",
          "The nursery tag names the rootstock. Ask for it.",
        ],
      },
      {
        t: "note",
        label: "The first summer",
        text: "A newly planted tree is a jar of roots in open ground. Water deeply once or twice a week if rain does not. Mulch in a wide ring, never piled on the bark. Pull grass back. Lawn is a competitor, not a carpet.",
      },
    ],
  },
  {
    id: "care",
    part: "The tree",
    num: "07",
    title: "The bearing years",
    lede: "Prune for light, feed with a light hand, and pick on time.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "A fruit tree is not a rose. It does not want a fist of fertilizer every month. Nitrogen pushes leaves at the expense of fruit and invites fire blight on pears and quince. If the tree grew a foot or two of healthy shoot last year, it is fed. Compost under the mulch in spring is enough for many home trees. Pale leaves and almost no growth are the signal to look at water, pH, and only then at a modest feeding.",
      },
      {
        t: "h",
        text: "Pruning, in one page",
      },
      {
        t: "ul",
        items: [
          "Apples and pears: late winter. Take out dead wood, branches that cross, and water sprouts you do not need. Open the center so light reaches fruiting wood.",
          "Peaches: around bloom, not in the deep of winter. They fruit on last year’s shoots, so a peach that is never cut becomes a tangle of dead twigs at the top.",
          "Cherries and plums: light cuts in dry weather, in summer if you can, to avoid the worst of silver-leaf and canker weather.",
          "Never leave a stub and never cut flush through the collar. The swollen ring at the base of a branch is the tree’s own bandage.",
        ],
      },
      {
        t: "h",
        text: "Tree shapes",
      },
      {
        t: "ul",
        items: [
          "Apples and pears: “central leader.” One main trunk in the middle, with layers of branches like a Christmas tree.",
          "Peaches, nectarines, and plums: “open center.” No middle trunk. Three or four main branches growing out like a vase, so sun reaches the middle.",
          "Do most pruning while trees are dormant, in late winter, except as noted above.",
        ],
      },
      {
        t: "h",
        text: "Thinning fruit",
      },
      {
        t: "p",
        text: "When fruit is about the size of a marble, after the natural early drop, pick off extras. Leave one apple or peach every 6 to 8 inches along the branch. It feels wasteful, but you get bigger, better fruit, fewer broken branches, and a crop every year instead of every other year.",
      },
      {
        t: "h",
        text: "Pollination partners",
      },
      {
        t: "p",
        text: "Some trees need a second, different variety nearby (within about 50 feet) that blooms at the same time. Two trees of the same named variety do not count.",
      },
      {
        t: "ul",
        items: [
          "Needs a partner: most apples, most pears, Asian pears, most sweet cherries, Japanese plums, pawpaw, many persimmons.",
          "Usually fine alone: peaches, most apricots, sour (pie) cherries, European plums like Stanley, figs, quince, citrus, pomegranate.",
          "Crabapples make good pollen partners for apples.",
          "Always check the nursery tag for “self-fertile” or a list of partners.",
        ],
      },
      {
        t: "h",
        text: "Pests without a panic",
      },
      {
        t: "p",
        text: "Some fruit will be imperfect. A wormy apple is a lesson, not a scandal. Pick up drops so the next generation of insects does not finish growing under the tree. Sticky traps tell you who is flying; they are not a harvest strategy. Dormant oil has a place on scale. Netting has a place on cherries. A broad spray on open blossom is how you lose the bees that were doing the work. If a disease repeats — scab, brown rot, fire blight — remove the infected fruit and twigs, choose a more resistant variety next time, and read a local extension note for the spray that belongs in your county. This almanac will not invent one.",
      },
      {
        t: "h",
        text: "Picking",
      },
      {
        t: "p",
        text: "Apples for storage come off when the background color has yellowed under the blush, the seeds are brown, and the fruit lifts with a twist. Taste one. Pears for keeping are picked firm, then ripened in a cool room. Peaches are ready when the ground color is warm and the fruit gives slightly. Figs are ready when they droop, often with a split of nectar at the eye. Quince stays hard and turns fragrant. Persimmons of the astringent kinds are ready when they are soft as a pudding. Unripe is not “keeping well.” It is not ripe.",
      },
    ],
  },
  {
    id: "twelve-trees",
    part: "The tree",
    num: "08",
    title: "Twelve trees",
    lede: "What the seed wants, what the fruit is for, and where people go wrong.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "These twelve cover a home orchard in a temperate climate, plus the tub trees — citrus, pomegranate, fig — that earn a place indoors where winters are hard. Open a tree for the seed, the years, and the caution. The ones that follow the twelve are real fruits with shorter notes, not leftovers.",
      },
      { t: "fruits" },
      { t: "jump", label: "How to save the seed once it fruits", to: "saving-seed" },
    ],
  },
  {
    id: "saving-seed",
    part: "Back to seed",
    num: "09",
    title: "Saving seed",
    lede: "The fruit is the easy half. The label is the point.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "Save seed from fruit you would serve. Disease, drought-shriveled samples, and the grocery’s most anonymous apple are poor parents. Pick a fruit that ripened fully on the tree, tasted right, and came from a plant that looked healthy in a year that was not kind.",
      },
      {
        t: "ol",
        items: [
          "Separate seed from flesh the day you process the fruit. Jam day is seed day.",
          "Rinse in a sieve until the seed is not sticky. Skip fermenting; that is a tomato trick, not an apple one.",
          "For orthodox seed you will store, dry it on a plate out of the sun until it is no longer cool to the cheek. Then jar it.",
          "For pawpaw, citrus, and other seed that must not dry, go straight to moist cold or to a pot.",
          "Label with the kind of fruit, the parent tree or place, and the date. “Apple, north fence, 2026” beats “pips.”",
          "Store dry seed cool and dark. A closed jar in the refrigerator is better than a drawer above the stove. A little dry milk or a paper towel can buffer moisture; replace it if it cakes.",
        ],
      },
      {
        t: "table",
        caption: "How long dry, cool seed is worth sowing",
        headers: ["Seed", "Reasonable hope"],
        rows: [
          ["Apple, pear", "A few years, better the first"],
          ["Peach and other stone fruit", "A year or two if the pit stayed dry"],
          ["Pomegranate", "A year or two"],
          ["Citrus, pawpaw", "Do not store dry"],
          ["Roselle", "Two or three years, dry and cool"],
        ],
      },
      {
        t: "p",
        text: "Viability is a slope, not a cliff. Sow more than you need, and throw away the weak seedlings rather than nurse them into disappointing trees. One strong plant in a deep pot is the whole goal.",
      },
      {
        t: "pull",
        text: "The seed you can name in five years is the seed that closes the loop. The seed in a film canister with no date is compost that has not admitted it yet.",
      },
    ],
  },
  {
    id: "calendar",
    part: "Back to seed",
    num: "10",
    title: "A year in the orchard",
    lede: "Twelve months, sized for someone with a job and a few trees.",
    blocks: [
      {
        t: "p",
        text: "This is a temperate-year sketch. If your last frost is in May, slide the planting notes later. If you have no frost, citrus and hibiscus stay outside and the “bring the pots in” line does not apply. The month already open is the one you are standing in.",
      },
      { t: "calendar" },
    ],
  },
  {
    id: "storage",
    part: "The pantry",
    num: "11",
    title: "Storing the harvest",
    lede: "Cold, a little moisture, and the courage to throw out the first soft apple.",
    blocks: [
      {
        t: "fig",
        src: "pantry",
        alt: "Cellar shelves of preserves, dried apple rings, and a basket of pears.",
        caption: "The shelves are the goal. Cloth tied over a jar is not a seal — when you can, use lids and a boiling-water bath.",
      },
      {
        t: "p",
        drop: true,
        text: "Not every fruit wants a jar. A good storage apple, kept cold and a little humid, will outlast a careless canning. The enemy is a warm room, a bruised spot, and ethylene — the gas ripe apples breathe — shared with anything you did not mean to ripen.",
      },
      {
        t: "h",
        text: "A cool room",
      },
      {
        t: "ul",
        items: [
          "Apples keep best near 32–40°F, humid enough that they do not shrivel, in crates or perforated bags. Do not wash them first. Water is how rot gets a door.",
          "Use late keepers if you can: a Winesap, an Arkansas Black, a GoldRush, an Ashmead’s Kernel. An early apple is for eating in its month.",
          "Pears for storage are picked underripe and held cold, then brought into a warmer room to finish. A pear that ripens on the tree often goes mealy.",
          "Quince keeps a few weeks in the cold, and smells so strongly it will scent butter in the same cupboard. Give it a box of its own.",
          "Check the store every week. One rotten fruit is not thrifty. It is how you lose the crate.",
          "Keep apples away from potatoes and carrots. The gas spoils the vegetables. Keep them away from onions, which share the favor by smell.",
        ],
      },
      {
        t: "h",
        text: "Cold that is a freezer",
      },
      {
        t: "p",
        text: "Freezing stops the clock without a boil. Spread berries and sliced fruit in a single layer, freeze, then pack the pieces so they do not become one brick. A dry pack keeps flavor for about eight months to a year. A light sugar pack or a syrup pack protects color. Label the bag. Fruit that smells fermented when it thaws was either too ripe or too slow to freeze. Cook it only if it still smells clean; otherwise it is compost.",
      },
      {
        t: "p",
        text: "Pits and cores come out before the bag goes in the freezer. Future you, making a crisp in January, will not want to meet a peach stone with a dull knife.",
      },
      { t: "jump", label: "Dry the rest", to: "drying" },
    ],
  },
  {
    id: "canning",
    part: "The pantry",
    num: "12",
    title: "Canning fruit",
    lede: "A boiling-water bath, acid fruit, and a clock you do not shorten.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "Most ripe orchard fruit is acid enough to can in a boiling-water bath. You do not need a pressure canner for peaches, pears, plums, and applesauce. You do need one if someone asks you to “throw in a few beans.” Low-acid food does not belong in this chapter at all.",
      },
      {
        t: "h",
        text: "What the bath is doing",
      },
      {
        t: "p",
        text: "Heat drives air from the jar and kills the yeasts, molds, and bacteria that would spoil acid fruit. The cooling lid pulls down and stays down. Botulism is the terror of low-acid canning; it does not grow in properly acid fruit. The ordinary failures here are mold, fermentation, and a lid that never sealed because the rim was sticky or the boil was short.",
      },
      {
        t: "h",
        text: "The order of work",
      },
      {
        t: "ol",
        items: [
          "Use jars without chips. Use new flat lids. Rings may be reused if they are not rusty. Wash everything.",
          "Prepare fruit. Keep cut fruit in water with a little bottled lemon juice so it does not brown. Lemon in the holding water is not a substitute for lemon a recipe requires inside the jar.",
          "Pack hot, unless a recipe gives a raw-pack time. Cover with boiling syrup, juice, or water. Leave 1/2 inch headspace for these fruits.",
          "Slide a spatula down the inside to free bubbles. Wipe the rim with a clean damp cloth. Set the lid, and screw the ring down until it resists, not until your wrist hurts.",
          "Lower jars onto a rack in a canner of hot water. Water should cover the lids by one to two inches. Put the lid on the canner.",
          "When the water returns to a full boil, start the clock. Keep it boiling. If it stops, bring it back and do not count the sag.",
          "Turn off the heat, wait five minutes, lift the jars out, and set them on a towel. Leave them alone for 12–24 hours.",
          "Take off the rings. A sealed lid does not flex. Wipe the jars, label them with the month and year, and store them cool and dark, without the rings.",
        ],
      },
      {
        t: "table",
        caption: "Syrups, from the National Center for Home Food Preservation. Sugar is taste, not safety. Juice or water may replace syrup.",
        headers: ["Syrup", "Sugar", "For 9 pints", "For 7 quarts", "Useful for"],
        rows: [
          ["Very light, ~10%", "Least", "6 1/2 c water, 3/4 c sugar", "10 1/2 c water, 1 1/4 c sugar", "Keeping the fruit’s own sugar"],
          ["Light, ~20%", "Little", "5 3/4 c water, 1 1/2 c sugar", "9 c water, 2 1/4 c sugar", "Very sweet fruit"],
          ["Medium, ~30%", "Middle", "5 1/4 c water, 2 1/4 c sugar", "8 1/4 c water, 3 3/4 c sugar", "Sweet apples, sweet cherries"],
          ["Heavy, ~40%", "More", "5 c water, 3 1/4 c sugar", "7 3/4 c water, 5 1/4 c sugar", "Peaches, pears, plums, tart apples"],
        ],
      },
      {
        t: "table",
        caption: "Boiling-water times at 0–1,000 feet. Add 5, 10, 15, or 20 minutes for the altitude bands in the safety note on each recipe.",
        headers: ["Food", "Pack", "Pints", "Quarts"],
        rows: [
          ["Peaches, yellow flesh", "Hot", "20 min", "25 min"],
          ["Peaches, yellow flesh", "Raw", "25 min", "30 min"],
          ["Pears, European", "Hot", "20 min", "25 min"],
          ["Plums", "Hot", "20 min", "25 min"],
          ["Applesauce", "Hot", "15 min", "20 min"],
        ],
      },
      {
        t: "note",
        label: "Do not",
        text: "Do not can white-flesh peaches this way. Do not can Asian pears on the European pear time without a recipe that acidifies them. Do not shorten a time because the jars “looked done.” Do not use canned fruit that spurts, smells wrong, or has mold. Do not feed those jars to animals to avoid waste.",
      },
      {
        t: "recipes",
        ids: ["peaches-in-syrup", "pears-in-syrup", "applesauce", "canned-plums"],
      },
    ],
  },
  {
    id: "jams",
    part: "The pantry",
    num: "13",
    title: "Jams, jellies, and butters",
    lede: "Pectin, acid, sugar, and a boil you can see.",
    blocks: [
      {
        t: "fig",
        src: "jam",
        alt: "A copper pot of jam on a stove, with a quince and an apple.",
        caption: "Gel is a temperature and a texture, not a color. Quince and apple are the friends that help a shy fruit set.",
      },
      {
        t: "p",
        drop: true,
        text: "Jam is fruit cooked with sugar until it holds. Jelly is the juice alone, clear if you were patient. A butter is fruit cooked down until it is dense, with less sugar and more watching. A conserve is jam that has admitted peel, ginger, or a nut. They are different pots. They are the same promise: a small jar, a real seal, and fruit that was worth picking.",
      },
      {
        t: "h",
        text: "Pectin is not a personality",
      },
      {
        t: "p",
        text: "Pectin is in the cell walls, richest in underripe fruit, cores, peels, and certain species. Acid helps it set. Sugar helps it set and keeps the color. If you remove most of the sugar from a traditional recipe, you do not get a “lighter jam.” You get a sauce that molds. Low-sugar preserving wants a pectin made for that job, and the sheet that comes in the box. This book’s jams are the long-cook, full-sugar kind.",
      },
      {
        t: "table",
        caption: "Who brings the pectin",
        headers: ["High", "Middling", "Shy — give them a partner"],
        rows: [
          [
            "Tart apple, crabapple, quince, cranberry, citrus peel and pith, roselle",
            "Ripe apple, plum, sour cherry",
            "Peach, pear, sweet cherry, strawberry, pomegranate juice",
          ],
        ],
      },
      {
        t: "h",
        text: "The gel tests",
      },
      {
        t: "ul",
        items: [
          "Temperature: gel is about 8°F above the boiling point of water where you are standing. At sea level that is 220°F. In the mountains, boil a little water first and add eight degrees. A thermometer that has never been checked is a rumor.",
          "Sheet: dip a cold metal spoon, lift it, and watch the edge. Separate drops are not ready. Drops that run together into a sheet are.",
          "Plate: a dab on a frozen plate, pushed with a finger after thirty seconds, should wrinkle.",
        ],
      },
      {
        t: "p",
        text: "Cook jam in a wide pot, no more than halfway full. A deep, crowded boil never reduces, then suddenly scorches. Stir as it thickens. Skim foam if you hate the look of it; the foam is not unsafe, only cloudy.",
      },
      {
        t: "p",
        text: "Cool the jars. Store in the refrigerator and use within 3 weeks, or freeze. These kitchen jams, jellies, butters, and conserves are not tested National Center for Home Food Preservation or USDA canning formulas, so they do not go on the pantry shelf. For a shelf jar, use that center’s recipe or a USDA recipe and follow it exactly.",
      },
      {
        t: "note",
        label: "Not a tested canning formula",
        text: "If a jam does not set, you have syrup. Call it syrup, keep it cold, and use it in tea or over yogurt. A sealed lid is not a license to store an untested recipe at room temperature.",
      },
      {
        t: "recipes",
        ids: [
          "quince-apple-jelly",
          "crabapple-jelly",
          "peach-jam",
          "mulberry-jam",
          "plum-butter",
          "fig-conserve",
          "pear-ginger",
          "marmalade",
          "roselle-jam",
        ],
      },
    ],
  },
  {
    id: "drying",
    part: "The pantry",
    num: "14",
    title: "Drying, syrups, and vinegar",
    lede: "The preserves that do not need a canner.",
    blocks: [
      {
        t: "p",
        drop: true,
        text: "Drying removes the water that molds and yeasts need. It does not forgive a thick slice with a wet heart. When the batch is done, condition it: pack the pieces loosely in a jar for a week and shake it every day. Moisture hiding in one slice will fog the glass. Those pieces go back to the dryer. Only then do you seal the jar and keep it dark.",
      },
      {
        t: "ul",
        items: [
          "Apples: rings or slices a quarter inch thick, about 135°F, until leathery.",
          "Pears: a little thicker slice is all right if you give them time. They are done when they bend without a wet break.",
          "Plums and apricots: halve, pop out the pit, dry cut side up. They take longer than apples.",
          "Figs: halve. They are sticky when done and should not glisten in the center.",
          "Citrus peel: scrape the pith if it is bitter, dry until brittle, and keep it for tea.",
          "Roselle: the method is in the hibiscus kitchen. Shade, not sun, if you care about the red.",
        ],
      },
      {
        t: "p",
        text: "A refrigerator syrup is a different thing from a canned one. Pomegranate syrup and hibiscus syrup in the recipe chapter are boiled, bottled, and kept cold or frozen. They are not shelf jars. A shrub — fruit, sugar, and vinegar — is a drink mixer, also kept cold. Vinegar helps, and it is not a magic seal.",
      },
      {
        t: "p",
        text: "Fruit vinegar of your own is a longer project: scraps and peels covered with live vinegar or a vinegar mother, kept dark and stirred, then strained and used when it smells clean and sharp. If it smells rotten rather than sour, it is not vinegar. Compost it. This almanac would rather you buy a bottle of cider vinegar for the shrub than trust a crock you have doubts about.",
      },
      {
        t: "recipes",
        ids: ["dried-apples", "dried-hibiscus", "pomegranate-syrup", "mulberry-shrub", "hibiscus-syrup"],
      },
    ],
  },
  {
    id: "recipes",
    part: "The table",
    num: "15",
    title: "Recipes",
    lede: "Every pot in the book, in one place.",
    blocks: [
      {
        t: "p",
        text: "Filter by what you are doing today. Canning recipes for peaches, pears, plums, and applesauce follow National Center for Home Food Preservation boiling-water times. Jams, jellies, and conserves are refrigerated or frozen. Animal cards are treats, not rations. The full rules for those sit in the last chapter.",
      },
      { t: "recipe-index" },
    ],
  },
  {
    id: "hibiscus",
    part: "Bonus · Hibiscus",
    num: "16",
    title: "The hibiscus tree",
    lede: "Four plants share a name. Only some of them are trees, and only one of them is the red tea.",
    blocks: [
      {
        t: "fig",
        src: "hibiscus",
        alt: "A hibiscus trained as a standard in a terracotta pot, with dried calyces and a glass of red tea.",
        caption: "A standard in a pot is the hibiscus tree most people can actually grow. The dried calyces beside it are roselle — a different plant.",
      },
      {
        t: "p",
        drop: true,
        text: "People say hibiscus and mean a flower the size of a saucer on a shrub trained to one trunk. They also mean the crimson tea that stains a glass. Those are not the same plant. If you want the tea, the jam, and the dried jar, you want roselle. If you want a tree with a head of flowers, you want a tropical hibiscus trained as a standard, or a rose of Sharon that has been allowed to become a small tree, or — in a frost-free place — a true sea hibiscus. This chapter grows all four and refuses to mix up their kitchens.",
      },
      {
        t: "table",
        caption: "Which hibiscus you are holding",
        headers: ["Plant", "Shape", "What is edible", "From seed"],
        rows: [
          [
            "Roselle, Hibiscus sabdariffa",
            "Annual shrub in a long summer, not a tree",
            "The fleshy red calyx after the flower drops",
            "Easy, warm soil, no chill",
          ],
          [
            "Tropical hibiscus, H. rosa-sinensis",
            "Shrub you can train as a standard",
            "Fresh flowers, mildly tart",
            "Slow; hybrids may not match the parent",
          ],
          [
            "Rose of Sharon, H. syriacus",
            "Hardy shrub or small tree",
            "Fresh flowers, milder still",
            "A cold rest helps",
          ],
          [
            "Sea hibiscus, hau, H. tiliaceus",
            "A real coastal tree",
            "Young leaves and flowers, in places that already cook them",
            "Fresh tropical seed",
          ],
        ],
      },
      {
        t: "h",
        text: "Roselle from seed",
      },
      {
        t: "p",
        text: "Sow after the soil is genuinely warm, half an inch deep, or start indoors six to eight weeks before the last frost in a short season. The seed is small and does not need a winter. Give it full sun. It wants heat the way a tomato wants heat, and it will sit and sulk if you set it out into cold nights. Pinch once if you want branches. Flowers open, drop, and leave a red calyx. That calyx is the crop. Let a few pods ripen to brown if you want seed for next year; those pods are not the part you dry for tea.",
      },
      {
        t: "h",
        text: "A tropical hibiscus trained as a tree",
      },
      {
        t: "ol",
        items: [
          "Start with a plant that has one strong stem, or choose the strongest shoot and cut the others away.",
          "Stake it. Rub off buds that appear low on the trunk until the bare stem is as tall as you want the trunk — often two or three feet in a pot.",
          "Pinch the tip. The shoots that break near the top become the head. Keep rubbing buds off the trunk.",
          "In a frost climate this tree lives in a pot. Bring it in before a hard freeze, to the brightest window you have, and water less. It may drop leaves. That is sulking, not always death.",
          "From seed: nick the coat, sow warm, around 75–85°F, and be patient. A seedling of a hybrid will not repeat the flower you admired. A cutting will. Take a cutting if the flower is the thing you must keep.",
        ],
      },
      {
        t: "h",
        text: "Rose of Sharon",
      },
      {
        t: "p",
        text: "This is the hardy one. It will grow into a small tree if you remove the lower limbs and refuse to let it sucker into a thicket. Seedlings appear where the flowers fell. Move them young. Give the seed a moist chill if it is slow to sprout. The flowers are edible in the mild way, more garnish than fruit. They will not give you ruby tea. Do not expect them to.",
      },
      {
        t: "h",
        text: "Sea hibiscus",
      },
      {
        t: "p",
        text: "Hau is a tree, salt-tolerant and fast, in tropical coasts. Flowers open yellow and age toward orange. In the places it is native, young leaves are cooked and flowers are eaten. It is not a houseplant that becomes a timber tree in a dark living room. Unless you garden without frost, treat seed of it as a curiosity in a tub, and do not plan the year’s tea around it.",
      },
      {
        t: "note",
        label: "Names on a nursery tag",
        text: "If the tag does not give a species, ask. A “hibiscus tree” at a garden center is almost always rosa-sinensis on a single stem. Beautiful, and the wrong plant for a jar of dried red calyces.",
      },
      { t: "jump", label: "Cook, dry, and brew it", to: "hibiscus-kitchen" },
    ],
  },
  {
    id: "hibiscus-kitchen",
    part: "Bonus · Hibiscus",
    num: "17",
    title: "Cooking, drying, and tea",
    lede: "Calyces for the jar. Petals for the same day. Neither one is a florist stem.",
    blocks: [
      {
        t: "fig",
        src: "tea",
        alt: "Dried red hibiscus calyces beside a glass cup of ruby tea and lemon peel.",
        caption: "Dried roselle, a short steep, and lemon if you want it. The color is the calyx, not the flower of the pot tree.",
      },
      {
        t: "p",
        drop: true,
        text: "Harvest roselle when the flower has fallen and the calyx is plump, juicy, and still easy to pierce with a thumbnail. Leave it too long and it gets woody and dull. Pull the red calyx away from the green seed pod at the center. The pod, if you want plants next year, stays on a few stems until it browns. Everything you mean to eat or dry is the calyx alone.",
      },
      {
        t: "h",
        text: "Drying",
      },
      {
        t: "ol",
        items: [
          "Rinse, and pat the calyces dry. Wet bunches mold.",
          "Spread them in a dehydrator around 135°F, or on screens in moving air and shade. Direct sun fades the red that you are trying to keep.",
          "They are done when a piece snaps or crumbles, with no soft center.",
          "Condition them in a jar for several days. If the glass sweats, dry them further.",
          "Store airtight, labeled, in the dark. Color is a year. Flavor fades after that even when the jar is still safe and dry.",
        ],
      },
      {
        t: "h",
        text: "Tea, two ways",
      },
      {
        t: "p",
        text: "An infusion is water just off the boil, calyces in, lid on, ten minutes, then strain. A decoction is a short simmer, about five minutes, which pulls a deeper color and a tarter cup. Both are right. Boiling them for half an hour is how the cup goes muddy. Fresh calyces want a looser handful than dried; drying concentrates them. Lemon brightens it. Sugar is optional and belongs in the cup, not in a jar you intended to keep unsweetened on the shelf.",
      },
      {
        t: "p",
        text: "Iced tea is the hot brew made a little stronger, cooled, and poured over ice. It keeps in the refrigerator about three days if you did not sweeten it into a nectar. The orchard blend — dried apple and pear peel, roselle, a little dried citrus zest — is for peels you would have eaten, from fruit that was not sprayed with something you would not drink.",
      },
      {
        t: "h",
        text: "Flowers on the day",
      },
      {
        t: "p",
        text: "Pick rosa-sinensis or rose of Sharon in the morning, from plants you know and did not spray. Shake out the insects. Petals are the part. The base of the petal and the stamen column can be tougher and slightly bitter; taste, and trim what you do not like. Use them raw, the same day, in a salad or on a plate of fruit. They do not dry into roselle. A few petals in a pot of ordinary tea will not turn it red.",
      },
      {
        t: "p",
        text: "Cooking flowers: a quick turn in a syrup, or petals folded into a batter at the last moment, is as far as they want to go. Long heat blacks them. If the raw petal tastes soapy, bitter, or like nothing you want, stop. Not every ornamental seedling is a pleasure, even in a genus that has edible members.",
      },
      {
        t: "note",
        label: "How much tea",
        text: "A cup with a meal is food. A medicinal dose, every day, is not what these recipes are. Roselle can matter to people who are pregnant or watching their blood pressure. Ask a clinician before it becomes a habit rather than a pitcher in August.",
      },
      {
        t: "recipes",
        ids: [
          "dried-hibiscus",
          "hibiscus-hot",
          "hibiscus-iced",
          "orchard-blend",
          "hibiscus-syrup",
          "roselle-jam",
          "flower-salad",
        ],
      },
    ],
  },
  {
    id: "animals",
    part: "Bonus · Animals",
    num: "18",
    title: "The animals’ share",
    lede: "What the orchard can spare, and what it must never offer.",
    blocks: [
      {
        t: "fig",
        src: "animals",
        alt: "Hens foraging under an apple tree, with a hibiscus in flower nearby.",
        caption: "Sound fruit, in pieces, as a treat. The rules below are stricter than the picture.",
      },
      {
        t: "p",
        drop: true,
        text: "Animals already know about fruit. A hen will find a windfall before you do. A goat will stand on another goat to reach a peach leaf. The job of this chapter is not to invent a livestock ration out of jam. It is to sort the harvest into three piles: flesh that can be a treat, pits and leaves that are poison, and rot that is nobody’s food.",
      },
      {
        t: "h",
        text: "The sort, under the tree",
      },
      {
        t: "ol",
        items: [
          "Sound fruit, freshly fallen or picked, with no mold and no smell of fermentation: flesh may be a treat for some animals, after you remove seeds and stones.",
          "Bruised but not moldy: cook it for people, or compost it. A bruise is where rot starts by evening.",
          "Moldy, foamy, sour, or already half liquid: compost it hot, where animals cannot scratch it back out. Do not “cut the bad part off” for a horse or a hen.",
          "Prunings of cherry, peach, plum, and apricot, especially wilted ones: burn, trash, or a compost the livestock cannot reach. Never the fence line.",
        ],
      },
      {
        t: "table",
        caption: "A hard no, for every animal in this chapter",
        headers: ["Do not feed", "Why"],
        rows: [
          ["Pits and kernels of peach, plum, apricot, cherry", "Cyanogenic glycosides"],
          ["Wilted leaves and prunings of those same trees", "The same poison, and a classic livestock kill"],
          ["Apple seeds by the handful, or crushed", "Amygdalin; the flesh is the part that was offered"],
          ["Moldy or fermented windfalls", "Toxins, alcohol, colic, acidosis"],
          ["Persimmons, for horses", "Seeds and calyxes can cause impaction"],
          ["Jam, jelly, syrup, shrub, or sweetened tea", "Sugar, and sometimes xylitol in a human sweetener nearby"],
          ["Raw or cooked elder leaves, stems, unripe or red elder", "Not feed"],
          ["Any plant recently sprayed with a systemic pesticide", "The chemical is in the leaf and the fruit"],
        ],
      },
      {
        t: "h",
        text: "Hens and ducks",
      },
      {
        t: "p",
        text: "Chickens may have chopped apple or pear flesh, ripe mulberries, serviceberries, and a little soft persimmon pulp with the seeds picked out. A few times a week, mixed with their real scratch or layer ration, is the shape of the gift. Fruit is water and sugar. It does not replace feed, grit, oyster shell, or clean water. Ducks follow the same fruit rules and make more mud; don’t turn the water dish into a jam pot.",
      },
      {
        t: "p",
        text: "Roselle leaves from an unsprayed plant, and spent calyces from unsweetened tea, can go into that same treat in a small amount. If the flock leaves them, compost the leftovers the same day. Do not offer ornamental hibiscus that has been sprayed, and do not assume every hibiscus leaf is a green they need. Flowers of rosa-sinensis are a nibble at most, petals only, from a plant you would put in your own salad.",
      },
      {
        t: "h",
        text: "Goats",
      },
      {
        t: "p",
        text: "Goats are the reason the pruning rule is in bold voice. A goat can be killed by wilted cherry or peach leaves that a person thought were brush. Sound apple flesh, seeds removed, in a small amount, is a common treat. A bushel of windfalls is not a meal. Stone fruit flesh with every pit accounted for is occasional, not a bucket. Hibiscus is not goat browse in this book. They do not need it, and a bored goat does not need encouragement.",
      },
      {
        t: "h",
        text: "Pigs",
      },
      {
        t: "p",
        text: "Pigs were the old orchard gleaners. They still do not get moldy fruit, and they do not get pits. Sound flesh can be part of their food if their real ration is already balanced. Fermented drops make pigs drunk and sick. If you would not eat the fruit yourself after cutting away the damage, do not throw the damaged half to the pig.",
      },
      {
        t: "h",
        text: "Horses",
      },
      {
        t: "p",
        text: "A slice or two of apple flesh, seeds out, is a treat for a horse that already knows apples. A pail of fallen apples is a colic story, especially if some have started to ferment. No stone-fruit trees in the pasture, no prunings over the fence, no persimmons overhead. Hibiscus is not horse feed. When a horse has more sense than the person holding the apple, believe the horse.",
      },
      {
        t: "h",
        text: "Rabbits and dogs",
      },
      {
        t: "p",
        text: "Rabbits are not fruit animals. A pea-sized piece of apple flesh, rare, seeds nowhere near the hutch, is as far as this book goes. Do not experiment with hibiscus leaves on a rabbit. Dogs may have a bite of apple or pear flesh, or a bit of stone-fruit flesh with the pit in the trash, not in the grass where they will find it later. No mold, no fermented drops, no tea, no jam. Fruit is not dog food. It is a small extra on a day you are already in the orchard.",
      },
      {
        t: "h",
        text: "Bees",
      },
      {
        t: "p",
        text: "The animals’ share for a honey bee is the flower, not the fruit. Do not spray open blossom. Fruit trees and unsprayed hibiscus are already the feed. Roselle flowers help some bees; the famous red tea is what you make after the petal falls. Do not set out fruit juice, jam water, or honey from another yard. Juice ferments, and foreign honey can carry disease. A shallow dish of clean water with stones to stand on is the help that does not backfire.",
      },
      {
        t: "pull",
        text: "If you cannot remove the pit, you cannot offer the fruit. If you would not eat it because of mold, neither will they.",
      },
      {
        t: "recipes",
        ids: ["hen-scratch", "spent-calyx"],
      },
      {
        t: "p",
        text: "What you do not feed, compost. A heap that heats will deal with a modest amount of spoiled fruit. Do not leave the pile where hens can mine it or where last year’s apple scab returns as mulch under the same tree. The loop closes with seed you meant to save, not with rot you meant to forget.",
      },
    ],
  },
  {
    id: "glossary",
    part: "The words",
    num: "AZ",
    title: "Glossary",
    lede: "The short meanings of the words this guide keeps using.",
    blocks: [
      {
        t: "table",
        headers: ["Word", "Meaning"],
        rows: [
          ["Graft", "Joining a twig of one tree onto the roots of another."],
          ["Scion", "The twig of the variety you want."],
          ["Rootstock", "The roots a tree is grafted onto. They control tree size."],
          ["Graft union", "The bump on the trunk where the graft was made."],
          ["Chill hours", "Winter cold hours a tree needs before it will bloom."],
          ["Pollination partner", "A different variety that blooms at the same time."],
          ["Self-fertile", "A tree that can set fruit with its own pollen."],
          ["Central leader", "A tree shape with one main trunk."],
          ["Open center", "A vase-shaped tree with no middle trunk."],
          ["Thinning", "Removing extra small fruit."],
          ["Stratify", "Chilling damp seeds so they will sprout."],
          ["Amygdalin", "A natural chemical in fruit seeds that can turn into cyanide."],
        ],
      },
    ],
  },
];

export function chapterById(id: string | undefined): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === id);
}

export function chapterIndex(id: string): number {
  return chapters.findIndex((chapter) => chapter.id === id);
}

export function parts(): { name: string; chapters: Chapter[] }[] {
  const order: string[] = [];
  const map = new Map<string, Chapter[]>();
  for (const chapter of chapters) {
    if (!map.has(chapter.part)) {
      map.set(chapter.part, []);
      order.push(chapter.part);
    }
    map.get(chapter.part)?.push(chapter);
  }
  return order.map((name) => ({ name, chapters: map.get(name) ?? [] }));
}
