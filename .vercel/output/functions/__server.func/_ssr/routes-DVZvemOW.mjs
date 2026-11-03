import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as ChevronLeft, i as Search, l as Bookmark, n as Type, o as Leaf, s as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-CodXdq5Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DVZvemOW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var art = {
	animals: "/assets/animals-DGfp8IdX.jpg",
	apple: "/assets/apple-BcodSAhM.jpg",
	citrus: "/assets/citrus-Be3fUOT6.jpg",
	cover: "/assets/cover-Bj2TIBwU.jpg",
	hibiscus: "/assets/hibiscus-DpVQAFaS.jpg",
	jam: "/assets/jam-DJoZBn8R.jpg",
	nursery: "/assets/nursery-B5oo5jSP.jpg",
	orchard: "/assets/orchard-BwGhp0qh.jpg",
	pantry: "/assets/pantry-C2RbmeUC.jpg",
	seeds: "/assets/seeds-BxOtuZtP.jpg",
	stone: "/assets/stone-CoInuIE0.jpg",
	tea: "/assets/tea-CqaClZO8.jpg"
};
var months = [
	{
		id: "jan",
		name: "January",
		tasks: [
			"Prune apples and pears on a dry, mild day. Leave stone fruit until closer to bloom, so the wounds are not open all winter.",
			"Check every bag of stratifying seed. Damp, not wet, and no mold. Label anything that has started to sprout.",
			"Open the apple store. One soft fruit comes out. Wipe the shelf."
		]
	},
	{
		id: "feb",
		name: "February",
		tasks: [
			"Graft apples and pears while the sap is still quiet. A whip-and-tongue on a pencil-thick stock is enough to learn.",
			"Order less than you want. Two trees planted well beat ten in a weekend of regret.",
			"Sow citrus indoors if you saved fresh seed and have a warm, bright place."
		]
	},
	{
		id: "mar",
		name: "March",
		tasks: [
			"Plant bare-root trees as soon as the soil can be worked. Water them in. Do not bury the graft.",
			"Start roselle indoors where summers are short, six to eight weeks before the last frost.",
			"Pull weeds from the pots of last year’s seedlings before they become the crop."
		]
	},
	{
		id: "apr",
		name: "April",
		tasks: [
			"Finish planting. Mulch after the soil has warmed a little, kept a hand’s width off the trunk.",
			"Have frost cloth ready for stone fruit in bloom. A clear night will take a peach crop.",
			"Sow pomegranate and any finished stratification. Nick hibiscus seed you are starting warm."
		]
	},
	{
		id: "may",
		name: "May",
		tasks: [
			"Water new trees deeply once or twice a week, not a sprinkle every day.",
			"Set roselle out only after nights stay warm. It stalls in cold soil.",
			"Watch blossom-time insects. Spray is the last tool, never the first, and never on open flowers the bees are using."
		]
	},
	{
		id: "jun",
		name: "June",
		tasks: [
			"Thin apples and peaches so the fruit has room. On an apple spur, one fruit is often enough.",
			"First mulberries and serviceberries. Net, or decide the birds own this tree.",
			"Take softwood cuttings of figs if a friend will miss one."
		]
	},
	{
		id: "jul",
		name: "July",
		tasks: [
			"Cherries, early plums, and the first jam. Pit before the pot.",
			"Bud-graft if that is your method, when the bark slips.",
			"Water the young orchard through a dry spell. A fruit tree’s first three summers decide the roots."
		]
	},
	{
		id: "aug",
		name: "August",
		tasks: [
			"Peaches, figs, early apples. Can, dry, and eat. Do not store bruised fruit “to see.”",
			"Save seed only from fruit that ripened on the tree and tasted like something.",
			"Pinch roselle if it is all leaf and no branch. The calyces come on short days later."
		]
	},
	{
		id: "sep",
		name: "September",
		tasks: [
			"Main apple and pear harvest. Pick pears firm. Let storage apples come off with a lift and a tilt, not a yank.",
			"Sort in the shade the same day. Windfalls that are sound can be cooked. Windfalls that are soft go to compost, not the crate.",
			"Pull roselle calyces as each flower drops and the calyx plumps."
		]
	},
	{
		id: "oct",
		name: "October",
		tasks: [
			"Quince, late apples, pomegranates where they color, the first persimmons.",
			"Plant garlic or nothing under the trees — do not dig a new bed through fresh roots.",
			"Rake and remove apple leaves if scab was bad. Do not feed those leaves to animals."
		]
	},
	{
		id: "nov",
		name: "November",
		tasks: [
			"Bring potted citrus and tropical hibiscus inside before a hard frost. A bright window, less water, no fertilizer until spring.",
			"Persimmons soften. Keep horses out from under the tree.",
			"Wash jars you will actually use next year. Throw out lids with dried gaskets you do not trust."
		]
	},
	{
		id: "dec",
		name: "December",
		tasks: [
			"Oil tools, sharpen the pruners, and write down what fruited. Memory is a poor label.",
			"Check seed bags again. This is the month people forget them.",
			"Plan next year’s two trees. Read the chapter on what does not come true before you order twenty apples from seed."
		]
	}
];
var chapters = [
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
				text: "Seed to seed means the long loop: you take seed from fruit that ripened where you live, you grow the tree, you eat, you put up what you cannot eat, and you save seed again with a label that still means something in five years. Some fruits cooperate. Apples mostly do not. This book says which is which, and it does not pretend a pip is a named variety."
			},
			{
				t: "p",
				text: "Read it in order once. After that, use it as a bench book. The twelve trees are a field guide. The calendar is a year. The pantry chapters are the methods. The recipes are the pots and jars those methods allow. Two bonus chapters sit at the back on purpose: the hibiscus, which is only sometimes a tree, and the animals, who will eat your windfalls whether you planned for them or not."
			},
			{
				t: "jump",
				label: "Start with what seed can and cannot do",
				to: "what-seed-means"
			}
		]
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
				text: "Fruit is gentler to preserve than green beans or meat, because most ripe fruit is acid enough for a boiling-water bath. Gentler is not the same as casual. The failures that matter are a jar that was never processed, a pit left in the feed pan, a moldy apple “mostly cut away,” and a plant you could not name."
			},
			{
				t: "h",
				text: "In the kitchen"
			},
			{
				t: "ul",
				items: [
					"Water-bath can high-acid fruit. Do not water-bath vegetables, meat, or soup in a fruit jar beside them.",
					"Use tested times for canned fruit. Jam in this book is the traditional long-cook kind, processed in small jars. If you want a boxed-pectin formula, follow the box.",
					"Do not seal jars with paraffin, cloth, or an inverted lid and a hope. The pantry picture in this book is a mood. The seal is a two-piece lid and a boil.",
					"White-flesh peaches are not for boiling-water canning.",
					"Figs need bottled lemon juice in any jar you process. Their acidity wanders.",
					"If a seal fails on the shelf, do not taste the food. Do not feed it out."
				]
			},
			{
				t: "h",
				text: "In the orchard and the feed pan"
			},
			{
				t: "ul",
				items: [
					"Stone-fruit pits and kernels are not food for you or for animals. Wilted leaves and prunings of cherry, peach, plum, and apricot do not go into a paddock.",
					"Apple seeds are not a tea and not a mash. The flesh is the food.",
					"Moldy or fermented windfalls are compost, not treats. Horses and a bucket of foamy apples are a bad match.",
					"Persimmons and horses do not share a field.",
					"Only cook ripe black or blue elderberry. Not red elder, not leaves, not raw bunches you are unsure of.",
					"Hibiscus for the cup is roselle you grew or a flower you can name, unsprayed. Florist stems are not ingredients."
				]
			},
			{
				t: "note",
				label: "Not a clinic",
				text: "This is husbandry and home preserving, not veterinary medicine and not medical advice. If a person or an animal is ill after a meal, call a professional. When a plant is unfamiliar, the answer is not to try a little on the smallest hen."
			}
		]
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
				caption: "Four trees, a ladder, and a basket. Plant fewer than you imagine, and water the ones you plant."
			},
			{
				t: "p",
				drop: true,
				text: "A named apple is a clone. Every Honeycrisp is a piece of one tree, kept alive by grafting. The pips inside that apple are its children, and children are not copies. If you plant them you may get something sharp and small, or something you will name yourself. You will not get Honeycrisp."
			},
			{
				t: "p",
				text: "Seed to seed, in this book, is honest about that. For apples and pears, saving seed means you are breeding, or you are growing a rootstock onto which you will graft wood from a tree whose fruit you have eaten. For peaches, quince, pomegranate, citrus, and pawpaw, the seedling is often the tree you keep. For figs, the seed is usually a dead end, and a cutting is the true copy."
			},
			{
				t: "p",
				text: "The loop still closes. You choose fruit that ripened in your weather, you clean the seed, you give it the winter it expects, you plant it where it can live ten years, and you write the parent’s name on a label that will outlast the pot. That is the work. The jar on the shelf is the middle of the same loop, not a different hobby."
			},
			{
				t: "pull",
				text: "Buy one grafted tree of a fruit you already love. Grow three seedlings of a fruit that comes reasonably true. Learn from the difference."
			}
		]
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
				text: "“Comes true” means the fruit is close enough to the parent that a family would recognize it. It does not mean a nursery guarantee. Climate, the other tree that donated pollen, and plain luck all sit in the seed."
			},
			{
				t: "table",
				caption: "What to expect from a seed",
				headers: [
					"Fruit",
					"From seed",
					"Surer path to the same fruit"
				],
				rows: [
					[
						"Apple, pear, sweet cherry",
						"A new variety",
						"Graft a twig of the parent"
					],
					[
						"Peach, apricot, plum",
						"Often similar, still a gamble",
						"A named tree, or budwood"
					],
					[
						"Quince, pomegranate",
						"Fairly close",
						"Cuttings or a seedling you taste"
					],
					[
						"Citrus",
						"Often a copy, by nucellar seed",
						"Keep the vigorous seedlings"
					],
					[
						"Pawpaw, American persimmon",
						"The species, not the cultivar",
						"Graft if you need a named fruit"
					],
					[
						"Fig",
						"Usually no viable seed",
						"A hardwood cutting"
					],
					[
						"Mulberry",
						"Unpredictable",
						"A cutting from a tree you like"
					]
				]
			},
			{
				t: "p",
				text: "Pollen is half the seed. A peach in a row of peaches is a better bet than a peach beside a wild plum. An apple seed’s father is whatever bloomed that week within a bee’s flight. That is why cider orchards full of seedlings were once ordinary, and why a single backyard apple tree’s children are a lottery."
			},
			{
				t: "note",
				label: "Supermarket seed",
				text: "A seed from grocery fruit can sprout. It may also be from a variety that needs a winter you do not have, or a summer long enough to ripen fruit you will never see. Prefer seed from a tree that already fruits on your road."
			}
		]
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
				caption: "Every seed in the orchard is a different kind of patience. Some must never dry. Some must sleep cold and damp."
			},
			{
				t: "p",
				drop: true,
				text: "Most temperate fruit seed will not sprout the week you eat the fruit. It expects a winter. You can let the weather be the winter, and sow outdoors in autumn where rodents and rot will take a tax. Or you can counterfeit winter in a refrigerator, which is slower to explain and kinder to a dozen precious pits."
			},
			{
				t: "h",
				text: "The fridge method"
			},
			{
				t: "ol",
				items: [
					"Clean the seed. Sugar left on it molds. A pit can stay intact, or be opened carefully so the kernel is not cut.",
					"Mix with barely moist sand, vermiculite, or a wrung-out paper towel. Squeeze the medium. If water drips, it is too wet.",
					"Seal it in a bag or tub. Write the fruit, the parent if you know it, and the date on the outside.",
					"Refrigerate, not freeze, between about 34 and 40°F. Check every two weeks. If it dries, mist the towel. If it molds, rinse the seed and start the medium over.",
					"When the time for that species has passed, or when a root tip just shows, sow. Do not wait for a long root in the bag. It snaps."
				]
			},
			{
				t: "table",
				caption: "A starting chill, moist, just above freezing",
				headers: [
					"Seed",
					"Time",
					"Drying"
				],
				rows: [
					[
						"Apple, pear",
						"60–90 days",
						"May dry briefly if you will chill later"
					],
					[
						"Quince",
						"30–90 days",
						"Keep it from going bone dry"
					],
					[
						"Peach, plum, apricot, cherry",
						"90–120 days",
						"Pits store dry, then need the chill"
					],
					[
						"Persimmon",
						"60–90 days",
						"Chill while still moist"
					],
					[
						"Pawpaw",
						"90–120 days",
						"Never let it dry"
					],
					[
						"Citrus",
						"None",
						"Sow fresh; do not dry"
					],
					[
						"Pomegranate",
						"Little or none",
						"Fresh is best"
					],
					[
						"Mulberry",
						"30–90 days",
						"Tiny; do not bury deep"
					]
				]
			},
			{
				t: "p",
				text: "Warmth after the chill should be steady, not a sunny windowsill that bakes by noon and goes cold at night. A deep pot matters more than a rich one. Fruit trees germinate in ordinary seed-starting mix. The fertility comes later, outside."
			},
			{
				t: "note",
				label: "Recalcitrant seed",
				text: "Pawpaw, many citrus, and fresh loquat die if they dry. They are not packet seed. If you cannot sow them soon, keep them cool and slightly moist, and check them. Orthodox seed — apple, the stone fruits once dried — can sit cool and dry, then be waked with moisture and cold."
			}
		]
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
				caption: "The nursery year is pots, water, and a label. Fruit comes later."
			},
			{
				t: "p",
				drop: true,
				text: "Sow one seed to a deep pot if you can spare the space. A community pot is fine for citrus and mulberry, which transplant small. Pawpaw and persimmon hate a broken taproot; give them a tall pot and plant them out before the root circles."
			},
			{
				t: "ul",
				items: [
					"Cover seed about twice its thickness. Mulberry and fig seed, if viable, want light; press them onto the surface.",
					"Water from below until the top darkens, then let the surface go a little dull before you water again. Constant sop breeds damping-off.",
					"The first leaves after the seed leaves are the ones that should look like the tree. If they do not, you may be growing a weed. Do not be proud. Pull it.",
					"Pot on when roots show at the drainage hole. A slightly larger pot, not a bucket.",
					"Full sun once they are sturdy, with water the same day if the leaves flag. A seedling that falls over from thirst is telling you the pot is too small or the wind is too constant."
				]
			},
			{
				t: "h",
				text: "When seed is the root and not the fruit"
			},
			{
				t: "p",
				text: "An apple seedling can become the rootstock for a whip of the apple you actually wanted. In late winter, cut a dormant scion with three buds from a healthy tree. Cut a matching tongue on the seedling stem, fit the green layers under the bark together, and bind them with grafting tape. The upper part becomes the named apple. The roots remain the child of the pip. That is still seed to fruit. It is simply honest about which half is which."
			},
			{
				t: "p",
				text: "Summer budding is the other common lesson: a single bud slipped under the bark of a leafy stock. Learn one method and do it ten times. The first failures are the tuition."
			}
		]
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
				text: "Fruit trees want sun, moving air, and soil that does not stay soggy. A low pocket that smells sweet after rain is a place for a plum only if you are willing to lose it. Six hours of direct sun is a minimum you will feel at harvest. Eight is better. A fig will take reflected heat from a wall. A pawpaw wants shade while it is young and light when it is tall."
			},
			{
				t: "h",
				text: "The hole"
			},
			{
				t: "ol",
				items: [
					"Dig a hole as deep as the roots and twice as wide. Do not dig a sump in heavy clay that fills with water. On clay, plant slightly high, on a broad mound.",
					"Set the tree so the soil line matches the nursery line. If there is a graft — a swollen or angled scar low on the trunk — it stays several inches above the soil. Buried grafts put the variety on its own roots or rot.",
					"Spread the roots. Cut only those that are broken or circling hard.",
					"Backfill with the soil you took out. Fancy compost in the hole makes a soft pocket the roots refuse to leave. Compost belongs on the surface, as mulch, after the tree is in.",
					"Water until the soil settles against the roots. Stake only if the site is windy, and tie with a loose loop. A tree that never moves grows a lazy trunk."
				]
			},
			{
				t: "p",
				text: "Distance is the part people cheat. A standard apple wants a room of its own, on the order of 20 feet. A peach wants 15. A quince or a pomegranate can live closer. Roots share more politely than branches do. Crowded crowns stay wet, and wet blossoms get brown rot and scab."
			},
			{
				t: "note",
				label: "The first summer",
				text: "A newly planted tree is a jar of roots in open ground. Water deeply once or twice a week if rain does not. Mulch in a wide ring, never piled on the bark. Pull grass back. Lawn is a competitor, not a carpet."
			}
		]
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
				text: "A fruit tree is not a rose. It does not want a fist of fertilizer every month. Nitrogen pushes leaves at the expense of fruit and invites fire blight on pears and quince. If the tree grew a foot or two of healthy shoot last year, it is fed. Compost under the mulch in spring is enough for many home trees. Pale leaves and almost no growth are the signal to look at water, pH, and only then at a modest feeding."
			},
			{
				t: "h",
				text: "Pruning, in one page"
			},
			{
				t: "ul",
				items: [
					"Apples and pears: late winter. Take out dead wood, branches that cross, and water sprouts you do not need. Open the center so light reaches fruiting wood.",
					"Peaches: around bloom, not in the deep of winter. They fruit on last year’s shoots, so a peach that is never cut becomes a tangle of dead twigs at the top.",
					"Cherries and plums: light cuts in dry weather, in summer if you can, to avoid the worst of silver-leaf and canker weather.",
					"Never leave a stub and never cut flush through the collar. The swollen ring at the base of a branch is the tree’s own bandage."
				]
			},
			{
				t: "h",
				text: "Pests without a panic"
			},
			{
				t: "p",
				text: "Some fruit will be imperfect. A wormy apple is a lesson, not a scandal. Pick up drops so the next generation of insects does not finish growing under the tree. Sticky traps tell you who is flying; they are not a harvest strategy. Dormant oil has a place on scale. Netting has a place on cherries. A broad spray on open blossom is how you lose the bees that were doing the work. If a disease repeats — scab, brown rot, fire blight — remove the infected fruit and twigs, choose a more resistant variety next time, and read a local extension note for the spray that belongs in your county. This almanac will not invent one."
			},
			{
				t: "h",
				text: "Picking"
			},
			{
				t: "p",
				text: "Apples for storage come off when the background color has yellowed under the blush, the seeds are brown, and the fruit lifts with a twist. Taste one. Pears for keeping are picked firm, then ripened in a cool room. Peaches are ready when the ground color is warm and the fruit gives slightly. Figs are ready when they droop, often with a split of nectar at the eye. Quince stays hard and turns fragrant. Persimmons of the astringent kinds are ready when they are soft as a pudding. Unripe is not “keeping well.” It is not ripe."
			}
		]
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
				text: "These twelve cover a home orchard in a temperate climate, plus the tub trees — citrus, pomegranate, fig — that earn a place indoors where winters are hard. Open a tree for the seed, the years, and the caution. The ones that follow the twelve are real fruits with shorter notes, not leftovers."
			},
			{ t: "fruits" },
			{
				t: "jump",
				label: "How to save the seed once it fruits",
				to: "saving-seed"
			}
		]
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
				text: "Save seed from fruit you would serve. Disease, drought-shriveled samples, and the grocery’s most anonymous apple are poor parents. Pick a fruit that ripened fully on the tree, tasted right, and came from a plant that looked healthy in a year that was not kind."
			},
			{
				t: "ol",
				items: [
					"Separate seed from flesh the day you process the fruit. Jam day is seed day.",
					"Rinse in a sieve until the seed is not sticky. Skip fermenting; that is a tomato trick, not an apple one.",
					"For orthodox seed you will store, dry it on a plate out of the sun until it is no longer cool to the cheek. Then jar it.",
					"For pawpaw, citrus, and other seed that must not dry, go straight to moist cold or to a pot.",
					"Label with the kind of fruit, the parent tree or place, and the date. “Apple, north fence, 2026” beats “pips.”",
					"Store dry seed cool and dark. A closed jar in the refrigerator is better than a drawer above the stove. A little dry milk or a paper towel can buffer moisture; replace it if it cakes."
				]
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
					["Roselle", "Two or three years, dry and cool"]
				]
			},
			{
				t: "p",
				text: "Viability is a slope, not a cliff. Sow more than you need, and throw away the weak seedlings rather than nurse them into disappointing trees. One strong plant in a deep pot is the whole goal."
			},
			{
				t: "pull",
				text: "The seed you can name in five years is the seed that closes the loop. The seed in a film canister with no date is compost that has not admitted it yet."
			}
		]
	},
	{
		id: "calendar",
		part: "Back to seed",
		num: "10",
		title: "A year in the orchard",
		lede: "Twelve months, sized for someone with a job and a few trees.",
		blocks: [{
			t: "p",
			text: "This is a temperate-year sketch. If your last frost is in May, slide the planting notes later. If you have no frost, citrus and hibiscus stay outside and the “bring the pots in” line does not apply. The month already open is the one you are standing in."
		}, { t: "calendar" }]
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
				caption: "The shelves are the goal. Cloth tied over a jar is not a seal — when you can, use lids and a boiling-water bath."
			},
			{
				t: "p",
				drop: true,
				text: "Not every fruit wants a jar. A good storage apple, kept cold and a little humid, will outlast a careless canning. The enemy is a warm room, a bruised spot, and ethylene — the gas ripe apples breathe — shared with anything you did not mean to ripen."
			},
			{
				t: "h",
				text: "A cool room"
			},
			{
				t: "ul",
				items: [
					"Apples keep best near 32–40°F, humid enough that they do not shrivel, in crates or perforated bags. Do not wash them first. Water is how rot gets a door.",
					"Use late keepers if you can: a Winesap, an Arkansas Black, a GoldRush, an Ashmead’s Kernel. An early apple is for eating in its month.",
					"Pears for storage are picked underripe and held cold, then brought into a warmer room to finish. A pear that ripens on the tree often goes mealy.",
					"Quince keeps a few weeks in the cold, and smells so strongly it will scent butter in the same cupboard. Give it a box of its own.",
					"Check the store every week. One rotten fruit is not thrifty. It is how you lose the crate.",
					"Keep apples away from potatoes and carrots. The gas spoils the vegetables. Keep them away from onions, which share the favor by smell."
				]
			},
			{
				t: "h",
				text: "Cold that is a freezer"
			},
			{
				t: "p",
				text: "Freezing stops the clock without a boil. Spread berries and sliced fruit in a single layer, freeze, then pack the pieces so they do not become one brick. A dry pack keeps flavor for about eight months to a year. A light sugar pack or a syrup pack protects color. Label the bag. Fruit that smells fermented when it thaws was either too ripe or too slow to freeze. Cook it only if it still smells clean; otherwise it is compost."
			},
			{
				t: "p",
				text: "Pits and cores come out before the bag goes in the freezer. Future you, making a crisp in January, will not want to meet a peach stone with a dull knife."
			},
			{
				t: "jump",
				label: "Dry the rest",
				to: "drying"
			}
		]
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
				text: "Most ripe orchard fruit is acid enough to can in a boiling-water bath. You do not need a pressure canner for peaches, pears, plums, and applesauce. You do need one if someone asks you to “throw in a few beans.” Low-acid food does not belong in this chapter at all."
			},
			{
				t: "h",
				text: "What the bath is doing"
			},
			{
				t: "p",
				text: "Heat drives air from the jar and kills the yeasts, molds, and bacteria that would spoil acid fruit. The cooling lid pulls down and stays down. Botulism is the terror of low-acid canning; it does not grow in properly acid fruit. The ordinary failures here are mold, fermentation, and a lid that never sealed because the rim was sticky or the boil was short."
			},
			{
				t: "h",
				text: "The order of work"
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
					"Take off the rings. A sealed lid does not flex. Wipe the jars, label them with the month and year, and store them cool and dark, without the rings."
				]
			},
			{
				t: "table",
				caption: "Syrups, from the National Center for Home Food Preservation. Sugar is taste, not safety. Juice or water may replace syrup.",
				headers: [
					"Syrup",
					"Sugar",
					"For 9 pints",
					"For 7 quarts",
					"Useful for"
				],
				rows: [
					[
						"Very light, ~10%",
						"Least",
						"6 1/2 c water, 3/4 c sugar",
						"10 1/2 c water, 1 1/4 c sugar",
						"Keeping the fruit’s own sugar"
					],
					[
						"Light, ~20%",
						"Little",
						"5 3/4 c water, 1 1/2 c sugar",
						"9 c water, 2 1/4 c sugar",
						"Very sweet fruit"
					],
					[
						"Medium, ~30%",
						"Middle",
						"5 1/4 c water, 2 1/4 c sugar",
						"8 1/4 c water, 3 3/4 c sugar",
						"Sweet apples, sweet cherries"
					],
					[
						"Heavy, ~40%",
						"More",
						"5 c water, 3 1/4 c sugar",
						"7 3/4 c water, 5 1/4 c sugar",
						"Peaches, pears, plums, tart apples"
					]
				]
			},
			{
				t: "table",
				caption: "Boiling-water times at 0–1,000 feet. Add 5, 10, 15, or 20 minutes for the altitude bands in the safety note on each recipe.",
				headers: [
					"Food",
					"Pack",
					"Pints",
					"Quarts"
				],
				rows: [
					[
						"Peaches, yellow flesh",
						"Hot",
						"20 min",
						"25 min"
					],
					[
						"Peaches, yellow flesh",
						"Raw",
						"25 min",
						"30 min"
					],
					[
						"Pears, European",
						"Hot",
						"20 min",
						"25 min"
					],
					[
						"Plums",
						"Hot",
						"20 min",
						"25 min"
					],
					[
						"Applesauce",
						"Hot",
						"15 min",
						"20 min"
					]
				]
			},
			{
				t: "note",
				label: "Do not",
				text: "Do not can white-flesh peaches this way. Do not can Asian pears on the European pear time without a recipe that acidifies them. Do not shorten a time because the jars “looked done.” Do not use canned fruit that spurts, smells wrong, or has mold. Do not feed those jars to animals to avoid waste."
			},
			{
				t: "recipes",
				ids: [
					"peaches-in-syrup",
					"pears-in-syrup",
					"applesauce",
					"canned-plums"
				]
			}
		]
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
				caption: "Gel is a temperature and a texture, not a color. Quince and apple are the friends that help a shy fruit set."
			},
			{
				t: "p",
				drop: true,
				text: "Jam is fruit cooked with sugar until it holds. Jelly is the juice alone, clear if you were patient. A butter is fruit cooked down until it is dense, with less sugar and more watching. A conserve is jam that has admitted peel, ginger, or a nut. They are different pots. They are the same promise: a small jar, a real seal, and fruit that was worth picking."
			},
			{
				t: "h",
				text: "Pectin is not a personality"
			},
			{
				t: "p",
				text: "Pectin is in the cell walls, richest in underripe fruit, cores, peels, and certain species. Acid helps it set. Sugar helps it set and keeps the color. If you remove most of the sugar from a traditional recipe, you do not get a “lighter jam.” You get a sauce that molds. Low-sugar preserving wants a pectin made for that job, and the sheet that comes in the box. This book’s jams are the long-cook, full-sugar kind."
			},
			{
				t: "table",
				caption: "Who brings the pectin",
				headers: [
					"High",
					"Middling",
					"Shy — give them a partner"
				],
				rows: [[
					"Tart apple, crabapple, quince, cranberry, citrus peel and pith, roselle",
					"Ripe apple, plum, sour cherry",
					"Peach, pear, sweet cherry, strawberry, pomegranate juice"
				]]
			},
			{
				t: "h",
				text: "The gel tests"
			},
			{
				t: "ul",
				items: [
					"Temperature: gel is about 8°F above the boiling point of water where you are standing. At sea level that is 220°F. In the mountains, boil a little water first and add eight degrees. A thermometer that has never been checked is a rumor.",
					"Sheet: dip a cold metal spoon, lift it, and watch the edge. Separate drops are not ready. Drops that run together into a sheet are.",
					"Plate: a dab on a frozen plate, pushed with a finger after thirty seconds, should wrinkle."
				]
			},
			{
				t: "p",
				text: "Cook jam in a wide pot, no more than halfway full. A deep, crowded boil never reduces, then suddenly scorches. Stir as it thickens. Skim foam if you hate the look of it; the foam is not unsafe, only cloudy."
			},
			{
				t: "p",
				text: "Ladle hot jam into hot jars at 1/4 inch headspace. Process half-pints and pints 10 minutes in a boiling-water bath at 0–1,000 feet, and add the same altitude minutes as for canned fruit. Butters are thicker, so this book processes them 15 minutes in half-pints only, and tells you to freeze a butter too stiff to settle in the jar."
			},
			{
				t: "note",
				label: "A traditional recipe",
				text: "The jams here are kitchen recipes in the old style, with a modern boiling-water time on small jars. They are not a substitute for the fine print on a pectin box. If a jam does not set, you have syrup. Call it syrup, keep the seal, and use it in tea or over yogurt. If the seal fails, refrigerate that jar and eat it."
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
					"roselle-jam"
				]
			}
		]
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
				text: "Drying removes the water that molds and yeasts need. It does not forgive a thick slice with a wet heart. When the batch is done, condition it: pack the pieces loosely in a jar for a week and shake it every day. Moisture hiding in one slice will fog the glass. Those pieces go back to the dryer. Only then do you seal the jar and keep it dark."
			},
			{
				t: "ul",
				items: [
					"Apples: rings or slices a quarter inch thick, about 135°F, until leathery.",
					"Pears: a little thicker slice is all right if you give them time. They are done when they bend without a wet break.",
					"Plums and apricots: halve, pop out the pit, dry cut side up. They take longer than apples.",
					"Figs: halve. They are sticky when done and should not glisten in the center.",
					"Citrus peel: scrape the pith if it is bitter, dry until brittle, and keep it for tea.",
					"Roselle: the method is in the hibiscus kitchen. Shade, not sun, if you care about the red."
				]
			},
			{
				t: "p",
				text: "A refrigerator syrup is a different thing from a canned one. Pomegranate syrup and hibiscus syrup in the recipe chapter are boiled, bottled, and kept cold or frozen. They are not shelf jars. A shrub — fruit, sugar, and vinegar — is a drink mixer, also kept cold. Vinegar helps, and it is not a magic seal."
			},
			{
				t: "p",
				text: "Fruit vinegar of your own is a longer project: scraps and peels covered with live vinegar or a vinegar mother, kept dark and stirred, then strained and used when it smells clean and sharp. If it smells rotten rather than sour, it is not vinegar. Compost it. This almanac would rather you buy a bottle of cider vinegar for the shrub than trust a crock you have doubts about."
			},
			{
				t: "recipes",
				ids: [
					"dried-apples",
					"dried-hibiscus",
					"pomegranate-syrup",
					"mulberry-shrub",
					"hibiscus-syrup"
				]
			}
		]
	},
	{
		id: "recipes",
		part: "The table",
		num: "15",
		title: "Recipes",
		lede: "Every pot in the book, in one place.",
		blocks: [{
			t: "p",
			text: "Filter by what you are doing today. Canning recipes follow the boiling-water times in the canning chapter. Jams are traditional long-cook recipes with a 10-minute bath on half-pints unless a card says otherwise. Animal cards are treats, not rations. The full rules for those sit in the last chapter."
		}, { t: "recipe-index" }]
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
				caption: "A standard in a pot is the hibiscus tree most people can actually grow. The dried calyces beside it are roselle — a different plant."
			},
			{
				t: "p",
				drop: true,
				text: "People say hibiscus and mean a flower the size of a saucer on a shrub trained to one trunk. They also mean the crimson tea that stains a glass. Those are not the same plant. If you want the tea, the jam, and the dried jar, you want roselle. If you want a tree with a head of flowers, you want a tropical hibiscus trained as a standard, or a rose of Sharon that has been allowed to become a small tree, or — in a frost-free place — a true sea hibiscus. This chapter grows all four and refuses to mix up their kitchens."
			},
			{
				t: "table",
				caption: "Which hibiscus you are holding",
				headers: [
					"Plant",
					"Shape",
					"What is edible",
					"From seed"
				],
				rows: [
					[
						"Roselle, Hibiscus sabdariffa",
						"Annual shrub in a long summer, not a tree",
						"The fleshy red calyx after the flower drops",
						"Easy, warm soil, no chill"
					],
					[
						"Tropical hibiscus, H. rosa-sinensis",
						"Shrub you can train as a standard",
						"Fresh flowers, mildly tart",
						"Slow; hybrids may not match the parent"
					],
					[
						"Rose of Sharon, H. syriacus",
						"Hardy shrub or small tree",
						"Fresh flowers, milder still",
						"A cold rest helps"
					],
					[
						"Sea hibiscus, hau, H. tiliaceus",
						"A real coastal tree",
						"Young leaves and flowers, in places that already cook them",
						"Fresh tropical seed"
					]
				]
			},
			{
				t: "h",
				text: "Roselle from seed"
			},
			{
				t: "p",
				text: "Sow after the soil is genuinely warm, half an inch deep, or start indoors six to eight weeks before the last frost in a short season. The seed is small and does not need a winter. Give it full sun. It wants heat the way a tomato wants heat, and it will sit and sulk if you set it out into cold nights. Pinch once if you want branches. Flowers open, drop, and leave a red calyx. That calyx is the crop. Let a few pods ripen to brown if you want seed for next year; those pods are not the part you dry for tea."
			},
			{
				t: "h",
				text: "A tropical hibiscus trained as a tree"
			},
			{
				t: "ol",
				items: [
					"Start with a plant that has one strong stem, or choose the strongest shoot and cut the others away.",
					"Stake it. Rub off buds that appear low on the trunk until the bare stem is as tall as you want the trunk — often two or three feet in a pot.",
					"Pinch the tip. The shoots that break near the top become the head. Keep rubbing buds off the trunk.",
					"In a frost climate this tree lives in a pot. Bring it in before a hard freeze, to the brightest window you have, and water less. It may drop leaves. That is sulking, not always death.",
					"From seed: nick the coat, sow warm, around 75–85°F, and be patient. A seedling of a hybrid will not repeat the flower you admired. A cutting will. Take a cutting if the flower is the thing you must keep."
				]
			},
			{
				t: "h",
				text: "Rose of Sharon"
			},
			{
				t: "p",
				text: "This is the hardy one. It will grow into a small tree if you remove the lower limbs and refuse to let it sucker into a thicket. Seedlings appear where the flowers fell. Move them young. Give the seed a moist chill if it is slow to sprout. The flowers are edible in the mild way, more garnish than fruit. They will not give you ruby tea. Do not expect them to."
			},
			{
				t: "h",
				text: "Sea hibiscus"
			},
			{
				t: "p",
				text: "Hau is a tree, salt-tolerant and fast, in tropical coasts. Flowers open yellow and age toward orange. In the places it is native, young leaves are cooked and flowers are eaten. It is not a houseplant that becomes a timber tree in a dark living room. Unless you garden without frost, treat seed of it as a curiosity in a tub, and do not plan the year’s tea around it."
			},
			{
				t: "note",
				label: "Names on a nursery tag",
				text: "If the tag does not give a species, ask. A “hibiscus tree” at a garden center is almost always rosa-sinensis on a single stem. Beautiful, and the wrong plant for a jar of dried red calyces."
			},
			{
				t: "jump",
				label: "Cook, dry, and brew it",
				to: "hibiscus-kitchen"
			}
		]
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
				caption: "Dried roselle, a short steep, and lemon if you want it. The color is the calyx, not the flower of the pot tree."
			},
			{
				t: "p",
				drop: true,
				text: "Harvest roselle when the flower has fallen and the calyx is plump, juicy, and still easy to pierce with a thumbnail. Leave it too long and it gets woody and dull. Pull the red calyx away from the green seed pod at the center. The pod, if you want plants next year, stays on a few stems until it browns. Everything you mean to eat or dry is the calyx alone."
			},
			{
				t: "h",
				text: "Drying"
			},
			{
				t: "ol",
				items: [
					"Rinse, and pat the calyces dry. Wet bunches mold.",
					"Spread them in a dehydrator around 135°F, or on screens in moving air and shade. Direct sun fades the red that you are trying to keep.",
					"They are done when a piece snaps or crumbles, with no soft center.",
					"Condition them in a jar for several days. If the glass sweats, dry them further.",
					"Store airtight, labeled, in the dark. Color is a year. Flavor fades after that even when the jar is still safe and dry."
				]
			},
			{
				t: "h",
				text: "Tea, two ways"
			},
			{
				t: "p",
				text: "An infusion is water just off the boil, calyces in, lid on, ten minutes, then strain. A decoction is a short simmer, about five minutes, which pulls a deeper color and a tarter cup. Both are right. Boiling them for half an hour is how the cup goes muddy. Fresh calyces want a looser handful than dried; drying concentrates them. Lemon brightens it. Sugar is optional and belongs in the cup, not in a jar you intended to keep unsweetened on the shelf."
			},
			{
				t: "p",
				text: "Iced tea is the hot brew made a little stronger, cooled, and poured over ice. It keeps in the refrigerator about three days if you did not sweeten it into a nectar. The orchard blend — dried apple and pear peel, roselle, a little dried citrus zest — is for peels you would have eaten, from fruit that was not sprayed with something you would not drink."
			},
			{
				t: "h",
				text: "Flowers on the day"
			},
			{
				t: "p",
				text: "Pick rosa-sinensis or rose of Sharon in the morning, from plants you know and did not spray. Shake out the insects. Petals are the part. The base of the petal and the stamen column can be tougher and slightly bitter; taste, and trim what you do not like. Use them raw, the same day, in a salad or on a plate of fruit. They do not dry into roselle. A few petals in a pot of ordinary tea will not turn it red."
			},
			{
				t: "p",
				text: "Cooking flowers: a quick turn in a syrup, or petals folded into a batter at the last moment, is as far as they want to go. Long heat blacks them. If the raw petal tastes soapy, bitter, or like nothing you want, stop. Not every ornamental seedling is a pleasure, even in a genus that has edible members."
			},
			{
				t: "note",
				label: "How much tea",
				text: "A cup with a meal is food. A medicinal dose, every day, is not what these recipes are. Roselle can matter to people who are pregnant or watching their blood pressure. Ask a clinician before it becomes a habit rather than a pitcher in August."
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
					"flower-salad"
				]
			}
		]
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
				caption: "Sound fruit, in pieces, as a treat. The rules below are stricter than the picture."
			},
			{
				t: "p",
				drop: true,
				text: "Animals already know about fruit. A hen will find a windfall before you do. A goat will stand on another goat to reach a peach leaf. The job of this chapter is not to invent a livestock ration out of jam. It is to sort the harvest into three piles: flesh that can be a treat, pits and leaves that are poison, and rot that is nobody’s food."
			},
			{
				t: "h",
				text: "The sort, under the tree"
			},
			{
				t: "ol",
				items: [
					"Sound fruit, freshly fallen or picked, with no mold and no smell of fermentation: flesh may be a treat for some animals, after you remove seeds and stones.",
					"Bruised but not moldy: cook it for people, or compost it. A bruise is where rot starts by evening.",
					"Moldy, foamy, sour, or already half liquid: compost it hot, where animals cannot scratch it back out. Do not “cut the bad part off” for a horse or a hen.",
					"Prunings of cherry, peach, plum, and apricot, especially wilted ones: burn, trash, or a compost the livestock cannot reach. Never the fence line."
				]
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
					["Any plant recently sprayed with a systemic pesticide", "The chemical is in the leaf and the fruit"]
				]
			},
			{
				t: "h",
				text: "Hens and ducks"
			},
			{
				t: "p",
				text: "Chickens may have chopped apple or pear flesh, ripe mulberries, serviceberries, and a little soft persimmon pulp with the seeds picked out. A few times a week, mixed with their real scratch or layer ration, is the shape of the gift. Fruit is water and sugar. It does not replace feed, grit, oyster shell, or clean water. Ducks follow the same fruit rules and make more mud; don’t turn the water dish into a jam pot."
			},
			{
				t: "p",
				text: "Roselle leaves from an unsprayed plant, and spent calyces from unsweetened tea, can go into that same treat in a small amount. If the flock leaves them, compost the leftovers the same day. Do not offer ornamental hibiscus that has been sprayed, and do not assume every hibiscus leaf is a green they need. Flowers of rosa-sinensis are a nibble at most, petals only, from a plant you would put in your own salad."
			},
			{
				t: "h",
				text: "Goats"
			},
			{
				t: "p",
				text: "Goats are the reason the pruning rule is in bold voice. A goat can be killed by wilted cherry or peach leaves that a person thought were brush. Sound apple flesh, seeds removed, in a small amount, is a common treat. A bushel of windfalls is not a meal. Stone fruit flesh with every pit accounted for is occasional, not a bucket. Hibiscus is not goat browse in this book. They do not need it, and a bored goat does not need encouragement."
			},
			{
				t: "h",
				text: "Pigs"
			},
			{
				t: "p",
				text: "Pigs were the old orchard gleaners. They still do not get moldy fruit, and they do not get pits. Sound flesh can be part of their food if their real ration is already balanced. Fermented drops make pigs drunk and sick. If you would not eat the fruit yourself after cutting away the damage, do not throw the damaged half to the pig."
			},
			{
				t: "h",
				text: "Horses"
			},
			{
				t: "p",
				text: "A slice or two of apple flesh, seeds out, is a treat for a horse that already knows apples. A pail of fallen apples is a colic story, especially if some have started to ferment. No stone-fruit trees in the pasture, no prunings over the fence, no persimmons overhead. Hibiscus is not horse feed. When a horse has more sense than the person holding the apple, believe the horse."
			},
			{
				t: "h",
				text: "Rabbits and dogs"
			},
			{
				t: "p",
				text: "Rabbits are not fruit animals. A pea-sized piece of apple flesh, rare, seeds nowhere near the hutch, is as far as this book goes. Do not experiment with hibiscus leaves on a rabbit. Dogs may have a bite of apple or pear flesh, or a bit of stone-fruit flesh with the pit in the trash, not in the grass where they will find it later. No mold, no fermented drops, no tea, no jam. Fruit is not dog food. It is a small extra on a day you are already in the orchard."
			},
			{
				t: "h",
				text: "Bees"
			},
			{
				t: "p",
				text: "The animals’ share for a honey bee is the flower, not the fruit. Do not spray open blossom. Fruit trees and unsprayed hibiscus are already the feed. Roselle flowers help some bees; the famous red tea is what you make after the petal falls. Do not set out fruit juice, jam water, or honey from another yard. Juice ferments, and foreign honey can carry disease. A shallow dish of clean water with stones to stand on is the help that does not backfire."
			},
			{
				t: "pull",
				text: "If you cannot remove the pit, you cannot offer the fruit. If you would not eat it because of mold, neither will they."
			},
			{
				t: "recipes",
				ids: ["hen-scratch", "spent-calyx"]
			},
			{
				t: "p",
				text: "What you do not feed, compost. A heap that heats will deal with a modest amount of spoiled fruit. Do not leave the pile where hens can mine it or where last year’s apple scab returns as mulch under the same tree. The loop closes with seed you meant to save, not with rot you meant to forget."
			}
		]
	}
];
function chapterIndex(id) {
	return chapters.findIndex((chapter) => chapter.id === id);
}
function parts() {
	const order = [];
	const map = /* @__PURE__ */ new Map();
	for (const chapter of chapters) {
		if (!map.has(chapter.part)) {
			map.set(chapter.part, []);
			order.push(chapter.part);
		}
		map.get(chapter.part)?.push(chapter);
	}
	return order.map((name) => ({
		name,
		chapters: map.get(name) ?? []
	}));
}
var fruits = [
	{
		id: "apple",
		name: "Apple",
		latin: "Malus domestica",
		plate: "apple",
		comesTrue: "Almost never. A pip is a new variety. That is how many good apples began, and also how a lot of sharp, small ones did.",
		chill: "Moist cold, 60–90 days, just above freezing.",
		sow: "After the chill, 1/2 inch deep, in a deep pot. Keep the strongest, straightest seedling.",
		years: "A seedling may take 6–10 years to fruit. A grafted tree on a chosen rootstock is faster and stays the apple you named.",
		seed: "Save pips only from fully ripe, sound fruit. Rinse them. For the fridge method, tuck them in barely damp sand or a paper towel inside a labeled bag. They should be moist, not wet, and not molding.",
		kitchen: "Storage fruit, sauce, jelly, rings, and the pectin in a tart or underripe apple.",
		caution: "Seeds hold amygdalin. Swallowing one pip is not a story. Do not crush them into food, tea, or animal feed."
	},
	{
		id: "pear",
		name: "Pear",
		latin: "Pyrus communis",
		comesTrue: "No. Seedlings are rootstocks and experiments, not a second Bartlett.",
		chill: "Moist cold, 60–90 days.",
		sow: "As for apple. European pear seedlings can make large, delayed trees. Quince rootstock is the usual dwarfing choice for a grafted pear, not for every variety — some need an interstem.",
		years: "Seedlings often fruit in 6–10 years. Fire blight can take a young tree in a wet spring; choose a site with air, and don’t overfeed with nitrogen.",
		seed: "Ripe pears, seeds rinsed, then stratified. Label the parent. A seed from a tree that ripened in your climate is worth more than a supermarket seed from fruit grown a thousand miles away.",
		kitchen: "Pick firm, ripen indoors, then can, dry, or bake. Juice makes a quiet jelly with a pectin-rich partner."
	},
	{
		id: "peach",
		name: "Peach",
		latin: "Prunus persica",
		plate: "stone",
		comesTrue: "Closer than an apple, not a promise. Seedlings often resemble the parent in a rough way, especially from a self-fruitful tree, and still surprise you.",
		chill: "Moist cold, about 90–120 days. The pit can be cracked carefully so the kernel inside takes the chill; do not nick the kernel.",
		sow: "Deep pot, after chill, or plant the pit in a protected bed in autumn and let winter do the work where winters are real.",
		years: "Often 3–5 years. Peach trees are short-lived. Plant one knowing you may plant another before the decade is out.",
		seed: "Fully ripe fruit. Clean and dry the pit if you must store it, then rehydrate and chill before sowing. Eat or compost the flesh. The kernel is not a snack.",
		kitchen: "Yellow-flesh peaches can be water-bath canned. White-flesh peaches are for eating and freezing.",
		caution: "Pits, kernels, and leaves — especially wilted prunings — are cyanogenic. They do not go to goats, horses, or the compost the animals can reach."
	},
	{
		id: "plum",
		name: "Plum",
		latin: "Prunus domestica and others",
		plate: "stone",
		comesTrue: "Unreliable. European, Japanese, and wild plums cross. The fruit may be wonderful and may be astringent.",
		chill: "About 90 days moist cold.",
		sow: "Same pattern as peach. Many plums fruit better with a second variety nearby.",
		years: "Often 3–6 years.",
		seed: "Ripe fruit only. Clean the stone. One tree’s fruit is not a breed.",
		kitchen: "Jam, butter, and canned fruit. Prick skins if you can them whole.",
		caution: "Stones and leaves follow the peach rule. Never feed them."
	},
	{
		id: "cherry",
		name: "Cherry",
		latin: "Prunus avium and Prunus cerasus",
		comesTrue: "No. Sweet cherries usually need a pollen partner. Sour cherries are more self-fruitful and kinder to a small garden.",
		chill: "About 90–120 days moist cold.",
		sow: "Deep pots. Birds will have opinions once the tree fruits. Netting is part of growing cherries, not a failure of character.",
		years: "Often 4–7 years, longer for some sweet seedlings.",
		seed: "Spit pits from fully ripe fruit, rinse, chill. Sour-cherry seed from a tree that already fruits in your county is the sensible start.",
		kitchen: "Eat, pit, and then jam or freeze. Pits come out before the pot.",
		caution: "Wilted cherry leaves are a known livestock poison. Do not throw prunings into a paddock."
	},
	{
		id: "quince",
		name: "Quince",
		latin: "Cydonia oblonga",
		comesTrue: "Often close enough for a home tree. Named fruit still varies, but quince seedlings are one of the kinder gambles in this book.",
		chill: "30–90 days moist cold. Some lots sprout with little chill; cold steadies them.",
		sow: "Spring, 1/2 inch deep, after the chill. They like a steady moisture their first summer and dislike drought.",
		years: "Often 4–6 years. A quince can live in a hedge corner if it has sun.",
		seed: "Take seed from ripe, fragrant fruit, when the skin has lost its green. Rinse the slippery coat off.",
		kitchen: "The jelly fruit. Also paste, and slices poached until they turn pink. High pectin, high perfume, poor raw."
	},
	{
		id: "fig",
		name: "Fig",
		latin: "Ficus carica",
		comesTrue: "Usually you do not get a true seedling at all. Many common figs set fruit without pollination, and the “seeds” are empty. A fig with fertile seed needs the right wasp and the right climate, and the child will not match the parent.",
		chill: "None, if the seed is actually alive.",
		sow: "Surface-sow fresh, viable seed on a warm, damp mix and give it light. The ordinary way to keep a fig is a hardwood cutting in late winter: a pencil-thick stick, two nodes in the soil, one above.",
		years: "Cuttings often fruit in 1–3 years. Seedlings, when they exist, take longer and may never match the fig you ate.",
		seed: "If you are saving the variety, skip the seed and root a cutting. Label the parent tree, not a hope.",
		kitchen: "Fresh, dried, and a lemoned conserve. Figs are not as reliably acid as apples. Lemon juice stays in the jar recipe.",
		caution: "The white sap irritates some people’s skin. Wear gloves when you prune."
	},
	{
		id: "citrus",
		name: "Citrus",
		latin: "Citrus, in several species",
		plate: "citrus",
		comesTrue: "Often yes, by a back door. Many citrus seeds grow two or three seedlings. The vigorous, uniform ones are nucellar — copies of the mother. A weaker, different one may be the true sexual seedling. Keep the strong twins.",
		chill: "Do not chill, and do not dry the seed out. Sow it fresh, still moist, within days of eating the fruit.",
		sow: "1/2 inch deep, warm (about 75°F). A pot on a seed mat or the top of a refrigerator is the old trick. Several years in a pot before a frost-free bed, or a life indoors in a bright window with a summer outside.",
		years: "Often 4–8 years to a first fruit, sometimes sooner for lime and lemon types.",
		seed: "Save fat, fresh seed from ripe fruit. Rinse off sugar so it does not mold. If you must wait a week, keep the seed in a little damp paper in the fridge, not on the counter drying to a husk.",
		kitchen: "Marmalade, juice, and zest dried for tea. The peel you candy is the peel you did not spray."
	},
	{
		id: "pomegranate",
		name: "Pomegranate",
		latin: "Punica granatum",
		plate: "citrus",
		comesTrue: "Fairly often, in the way a home gardener means: a fruiting bush of the same general character. Named varieties still drift.",
		chill: "Little or none. A short cool rest does no harm.",
		sow: "Fresh seed, rinsed of pulp, 1/4 inch deep, kept warm and moist. They sprout unevenly over a month. In cold winters the plant is a shrub you wrap, a wall shrub, or a pot that comes indoors.",
		years: "Often 2–4 years. Fruit needs a long hot season to color and sweeten.",
		seed: "Eat the arils, spit the seeds into a sieve, rub the pulp off, sow soon. Dry seed keeps a year or two in a cool jar but fresh is livelier.",
		kitchen: "Juice, syrup for the fridge, and arils over plain food. The white membrane is bitter; keep it out of the pot."
	},
	{
		id: "mulberry",
		name: "Mulberry",
		latin: "Morus alba, rubra, nigra",
		comesTrue: "Variable. Red, white, and black mulberries hybridize. A seedling can be better than the parent or insipid. Cuttings clone the tree you already love.",
		chill: "Often 30–90 days. Some fresh seed sprouts with only a short chill.",
		sow: "Surface or barely covered. Do not let the tiny seed dry. Mark the pot; the seedlings look like weeds.",
		years: "Often 3–8 years, and then more fruit than you can pick. Place the tree where stains do not matter.",
		seed: "Ripe fruit, mashed through a sieve, pulp washed away, seed dried only if you will not sow it now.",
		kitchen: "Jam, shrub, and a handful eaten over the grass. Cook them if you are unsure of the species and they taste flat or odd raw; ripe fruit from a known tree is the ordinary snack.",
		caution: "Unripe fruit and quantities of leaves are not animal feed. Male pollen bothers some people; a fruiting tree is what you want anyway."
	},
	{
		id: "persimmon",
		name: "Persimmon",
		latin: "Diospyros virginiana and Diospyros kaki",
		comesTrue: "Species traits hold better than variety names. American persimmon seedlings are a reasonable native tree. Asian persimmons are often grafted, and seed may or may not match.",
		chill: "60–90 days moist cold. Do not let the seed dry hard before that rest.",
		sow: "Deep pots. American persimmon puts down a long root early. A taproot sulks if you break it.",
		years: "Often 4–8 years. Many types need a male nearby, or a grafted branch of one. Ask which kind of tree you are saving seed from.",
		seed: "Scoop seed from soft, fully ripe fruit — astringent varieties are not ripe when they are merely orange. Rinse and chill while still moist.",
		kitchen: "Eat soft, or freeze the pulp. Astringent fruit that still makes your mouth dry is not ready, and it is not a kindness to animals either.",
		caution: "Horses and persimmons do not mix. Seeds and calyxes have caused impactions. Do not pasture horses under a persimmon."
	},
	{
		id: "pawpaw",
		name: "Pawpaw",
		latin: "Asimina triloba",
		comesTrue: "Often recognizably pawpaw. Flavor and fruit size still vary. Named cultivars are grafted.",
		chill: "90–120 days moist cold. This seed is recalcitrant: if it dries, it dies.",
		sow: "Keep the seed in damp moss in the fridge, then sow 1 inch deep in a tall pot. Shade the seedling its first year. Pawpaws are understory youth and sun-lit adults. Most need a second, unrelated tree to set fruit.",
		years: "Often 5–8 years. They resent root disturbance. Plant once.",
		seed: "From fruit that has gone soft and fragrant, the skin often blotched. Never store the seed in a dry envelope.",
		kitchen: "Eat the custard and spit the seeds. They are not food, and neither is the skin. Pulp freezes well. Cook only if you like it cooked; raw ripe flesh is the usual way.",
		caution: "Seeds are not a nibble and not animal feed. A few people get an upset stomach from the flesh; the first serving should be small."
	}
];
var alsoFruits = [
	{
		name: "Apricot",
		note: "Treat the pit like a peach: a long moist chill, a short-lived tree, a kernel you do not eat. Seedlings are a fair home gamble in climates with spring that does not freeze the blossom every year."
	},
	{
		name: "Serviceberry",
		note: "Amelanchier. Seed needs a long chill, sometimes a warm spell and then cold. The berry is one of the kindest small fruits for people and, in moderation, for hens. Net it or share it with birds on purpose."
	},
	{
		name: "Elderberry",
		note: "Only ripe black or blue elder (Sambucus nigra or canadensis), and only cooked. Red elderberry is a different plant and not for the pot. Leaves, stems, and unripe fruit stay out of food and out of feed. Cuttings root more honestly than seed."
	},
	{
		name: "Guava",
		note: "Tropical. Seed from ripe fruit, washed, sown warm and fresh. It comes only roughly true. In a frost climate it is a tub plant. The musk of a ripe guava is the signal to eat or to jam it."
	},
	{
		name: "Loquat",
		note: "Large seeds, sown fresh and never fully dried, warm. A seedling can fruit in a few years where winters are mild. The pit is not food."
	}
];
var BATH = "Boiling-water bath, jars on a rack with an inch or two of water over the lids. Start timing when the water returns to a full rolling boil. Add 5 minutes at 1,001–3,000 feet, 10 at 3,001–6,000, 15 at 6,001–8,000, and 20 at 8,001–10,000. Cool jars upright and untouched for 12–24 hours. A sealed lid is firm and down in the center. Refrigerate any jar that does not seal. If a seal fails later in the cupboard, discard the food without tasting.";
var recipes = [
	{
		id: "quince-apple-jelly",
		title: "Quince and apple jelly",
		kind: "jelly",
		makes: "About 4 half-pints",
		time: "A long afternoon",
		fruits: ["Quince", "Apple"],
		ingredients: [
			"2 pounds quince, washed, chopped, cores included, seeds kept out of the finished jelly",
			"1 pound tart apples, chopped the same way",
			"Water to barely cover",
			"3/4 cup sugar for each cup of strained juice"
		],
		steps: [
			"Put the chopped fruit in a heavy pot and add water until you can just see it. Simmer, covered, until the fruit is soft and pale, about 45 minutes.",
			"Pour into a jelly bag or a fine cloth set over a sieve. Let it drip. Squeezing gives more juice and a cloudy jelly; not squeezing gives a clearer one.",
			"Measure the juice. Add 3/4 cup sugar per cup. Bring to a hard boil, stirring until the sugar dissolves, and cook to the gel point: 8°F above the temperature at which water boils in your kitchen, or until a cold spoon sheets instead of dripping in separate drops.",
			"Skim, ladle into hot half-pint jars, leave 1/4 inch headspace, wipe rims, and fit new lids.",
			`Process 10 minutes. ${BATH}`
		],
		note: "Quince carries the pectin. A very ripe, bland apple will not. If the jelly weeps in the jar, the boil was shy of gel; it is still good on toast, kept refrigerated if the seal is the thing you doubt."
	},
	{
		id: "crabapple-jelly",
		title: "Crabapple jelly",
		kind: "jelly",
		makes: "About 4 half-pints",
		time: "Half a day",
		fruits: ["Apple"],
		ingredients: [
			"3 pounds crabapples, stems off, blemishes cut away, chopped",
			"Water to cover",
			"3/4 to 1 cup sugar per cup of juice, to taste"
		],
		steps: [
			"Simmer the crabs until they fall apart. Strain as for quince jelly. Do not push the pulp through.",
			"Cook juice and sugar to the gel point. Crabapples are often so rich in pectin that the jelly sets suddenly — watch it.",
			`Jar at 1/4 inch headspace and process half-pints 10 minutes. ${BATH}`
		]
	},
	{
		id: "peach-jam",
		title: "Peach jam with a green apple",
		kind: "jam",
		makes: "About 5 half-pints",
		time: "Under two hours",
		fruits: ["Peach", "Apple"],
		ingredients: [
			"8 cups chopped ripe yellow-flesh peaches, skins off (about 4 pounds)",
			"1 small tart green apple, grated, skin on, core and seeds discarded",
			"1/4 cup bottled lemon juice",
			"4 cups sugar"
		],
		steps: [
			"Score the peaches, blanch a minute, and slip off the skins. Cut away every trace of the pit. Chop.",
			"Cook peaches, apple, and lemon juice over medium heat until the peaches soften, about 15 minutes, stirring so the bottom does not catch.",
			"Add the sugar. Boil, stirring often, to the gel point. Peach jam should mound on a cold plate and wrinkle when pushed.",
			`Ladle into hot half-pint jars, 1/4 inch headspace. Process 10 minutes. ${BATH}`
		],
		note: "The apple is there for pectin, the lemon for acid and brightness. This is a traditional long-cook jam, not a boxed-pectin formula. If you switch to commercial pectin, follow that package and keep the fruit fully ripe and yellow-fleshed."
	},
	{
		id: "mulberry-jam",
		title: "Mulberry jam",
		kind: "jam",
		makes: "About 4 half-pints",
		time: "One hour, plus picking",
		fruits: ["Mulberry"],
		ingredients: [
			"8 cups stemmed ripe mulberries, a few still red if you can find them",
			"1/4 cup bottled lemon juice",
			"4 cups sugar"
		],
		steps: [
			"Crush the berries in the pot with a potato masher. Add the lemon juice and bring to a simmer for 10 minutes.",
			"Add sugar and boil to a gel. Mulberries can stay loose; cook until a dab on a frozen plate wrinkles.",
			`Jar, 1/4 inch headspace, process half-pints 10 minutes. ${BATH}`
		],
		note: "Wear a dark apron. Mulberry stain is honest and lasting."
	},
	{
		id: "plum-butter",
		title: "Plum butter",
		kind: "butter",
		makes: "About 4 half-pints",
		time: "A slow evening",
		fruits: ["Plum"],
		ingredients: [
			"4 pounds plums, pitted",
			"1/2 cup water",
			"2 cups sugar, more if the plums are very tart",
			"2 tablespoons bottled lemon juice"
		],
		steps: [
			"Simmer plums with the water until they collapse. Mill them if you want no skin; small plum skins can stay.",
			"Add sugar and lemon juice. Cook low, stirring often, until a spoon drawn through leaves a trail. It should still settle in the jar, not stand up like paste.",
			`Pack hot half-pints, 1/4 inch headspace. Process 15 minutes so heat can reach the center of a thick preserve. ${BATH} If the butter is stiff enough to hold a spoon upright, freeze it instead.`
		]
	},
	{
		id: "fig-conserve",
		title: "Fig and lemon conserve",
		kind: "jam",
		makes: "About 4 half-pints",
		time: "One hour",
		fruits: ["Fig"],
		ingredients: [
			"2 pounds ripe figs, stems off, chopped",
			"1/3 cup bottled lemon juice",
			"Zest of one lemon, no white pith",
			"2 cups sugar",
			"A small handful of chopped toasted walnut, optional, added at the end"
		],
		steps: [
			"Combine figs, lemon juice, zest, and sugar. Rest 20 minutes.",
			"Boil gently, stirring, until thick and glossy, 20–30 minutes. Figs are not sharp fruit; the bottled lemon juice stays in the recipe.",
			`Jar at 1/4 inch and process half-pints 10 minutes. ${BATH}`
		],
		note: "Do not can whole figs from this chapter. Acidity varies, and the tested times are long. Lemon in a soft conserve, processed in small jars, is the method here. Skip the nuts if you want a smoother seal of fruit alone; if you add them, keep pieces small."
	},
	{
		id: "pear-ginger",
		title: "Pear and ginger conserve",
		kind: "jam",
		makes: "About 5 half-pints",
		time: "About an hour",
		fruits: ["Pear"],
		ingredients: [
			"8 cups peeled, cored, finely chopped ripe pears",
			"1/4 cup bottled lemon juice",
			"1 tablespoon finely grated fresh ginger",
			"3 cups sugar",
			"1 tart apple, grated, core discarded, if you want a firmer set"
		],
		steps: [
			"Cook pears, lemon, ginger, and apple if using, until the pears turn clear at the edges.",
			"Add sugar and boil to a soft gel. Pear conserve is allowed to be tender.",
			`Jar half-pints, 1/4 inch, process 10 minutes. ${BATH}`
		],
		note: "European pears. Asian pears are a different acidity question; use a tested recipe made for them."
	},
	{
		id: "marmalade",
		title: "Small-batch citrus marmalade",
		kind: "jam",
		makes: "About 3 half-pints",
		time: "A day, mostly waiting",
		fruits: ["Citrus"],
		ingredients: [
			"1 pound mixed citrus — orange, lemon, a grapefruit if you like it bitter",
			"Water, about 4 cups",
			"Sugar equal to the volume of the cooked pulp, often about 3 cups"
		],
		steps: [
			"Wash the fruit. Halve, squeeze the juice, and keep the seeds in a small cloth bag. Slice the peels thin. The white pith is part of marmalade; leave it.",
			"Soak peel, juice, and the seed bag in the water overnight. The seeds lend pectin.",
			"Simmer until the peel is tender, an hour or more. Remove the seed bag, squeezing it well.",
			"Measure the pulp and add the same volume of sugar. Boil to a gel. Marmalade sheets on a cold spoon when it is ready.",
			`Jar, 1/4 inch, process half-pints 10 minutes. ${BATH}`
		]
	},
	{
		id: "roselle-jam",
		title: "Roselle jam",
		kind: "jam",
		makes: "About 4 half-pints",
		time: "One hour",
		fruits: ["Hibiscus"],
		ingredients: [
			"4 cups roselle calyces, seed pods pulled out, roughly chopped",
			"1 cup water",
			"3 cups sugar",
			"A coin of fresh ginger, optional"
		],
		steps: [
			"Simmer the calyces in the water until they are soft and the liquid is deep red, about 15 minutes. Fish out the ginger if you used it.",
			"Add the sugar and boil to a gel. Roselle is acid and often sets willingly.",
			`Jar half-pints at 1/4 inch and process 10 minutes. ${BATH}`
		],
		note: "This is Hibiscus sabdariffa, the calyx, not the ornamental flower. See the hibiscus chapters before you pick."
	},
	{
		id: "peaches-in-syrup",
		title: "Peaches in light syrup",
		kind: "can",
		makes: "7 quarts or 9 pints, from a canner load",
		time: "An afternoon",
		fruits: ["Peach"],
		ingredients: [
			"About 17 pounds of ripe yellow-flesh freestone peaches for a full canner, less for a smaller batch",
			"Light syrup, or water, or unsweetened apple juice",
			"Bottled lemon juice or a crushed vitamin C tablet in the holding water, to slow browning"
		],
		steps: [
			"Use yellow-flesh peaches only. Wash, blanch, peel, halve, and pit. Hold the fruit in water with a little lemon juice.",
			"Make a light syrup if you want one: for a 9-pint load, 5 3/4 cups water and 1 1/2 cups sugar, heated until the sugar dissolves. Syrup is for taste. It is not what makes the jars safe.",
			"Hot pack: simmer the peaches in syrup or water for 2 minutes. Fill hot jars, pit cavities down, and cover with boiling liquid. Leave 1/2 inch headspace. Remove bubbles, wipe rims, put on new lids.",
			`Process hot-packed pints 20 minutes and quarts 25 minutes at 0–1,000 feet. Raw pack is 25 and 30. ${BATH}`
		],
		note: "Do not boiling-water can white-flesh peaches. Some of them are not acid enough. Freeze those, or eat them."
	},
	{
		id: "pears-in-syrup",
		title: "Pears in syrup",
		kind: "can",
		makes: "A canner load, or any smaller even number of jars",
		time: "An afternoon",
		fruits: ["Pear"],
		ingredients: [
			"Firm-ripe European pears, about 2 pounds per quart",
			"Light or medium syrup, juice, or water",
			"Lemon juice in the holding water"
		],
		steps: [
			"Peel, halve, and core. Drop into lemon water.",
			"Simmer in the hot liquid 5 minutes. Pack hot, cover with boiling liquid, 1/2 inch headspace.",
			`Process pints 20 minutes and quarts 25 minutes at 0–1,000 feet. ${BATH}`
		],
		note: "Pick pears when they lift off the spur with a tilt, still firm. Ripen them in a cool room, then can the ones that press slightly at the stem."
	},
	{
		id: "applesauce",
		title: "Canned applesauce",
		kind: "can",
		makes: "Depends on the apples; a peck is a good start",
		time: "A morning",
		fruits: ["Apple"],
		ingredients: [
			"Sound apples, mixed varieties if you have them",
			"A cup or two of water, only enough to keep the pot from scorching",
			"Sugar only if you want it — it is optional here"
		],
		steps: [
			"Wash, quarter, and cut away bruises. Leave skins on for the cook; they will be milled out. Keep seeds out of the finished sauce — quarter carefully and do not mill so hard that broken seeds pass through.",
			"Simmer with a little water until soft. Run through a food mill.",
			"Return the sauce to the pot, sweeten if you like, and bring it back to a boil.",
			`Hot pack, 1/2 inch headspace. Process pints 15 minutes and quarts 20 minutes at 0–1,000 feet. ${BATH}`
		]
	},
	{
		id: "canned-plums",
		title: "Plums in syrup",
		kind: "can",
		makes: "A canner load",
		time: "An afternoon",
		fruits: ["Plum"],
		ingredients: ["Firm ripe plums", "Medium or light syrup, or water"],
		steps: [
			"Wash. Prick each skin with a needle so the fruit does not burst. Halve and pit if the stone comes free; otherwise can them whole.",
			"Hot pack: heat plums in syrup for 2 minutes. Pack, cover with boiling liquid, 1/2 inch headspace.",
			`Process pints 20 minutes and quarts 25 minutes at 0–1,000 feet. ${BATH}`
		],
		note: "The pit stays out of anything you will store and later feed, cook down, or give away. If you can whole plums, tell the household the stone is still inside."
	},
	{
		id: "dried-apples",
		title: "Dried apple rings",
		kind: "dry",
		makes: "A string or two from a small basket",
		time: "Most of a day",
		fruits: ["Apple"],
		ingredients: ["Firm apples", "A bowl of water with a tablespoon of bottled lemon juice, optional, to keep the color"],
		steps: [
			"Peel or not, as you like. Core and slice into rings about 1/4 inch thick. Seeds go in the compost, not into the dryer.",
			"Dip if you want them pale. Arrange so pieces do not overlap.",
			"Dry at about 135°F until leathery and a piece snaps only after it bends — usually 6–12 hours. There should be no moist pocket in the center.",
			"Condition: pack loosely in a jar for a week, shake daily. If beads of moisture appear, dry again. Then seal, label, and keep dark and cool."
		],
		note: "Oven drying works with the door ajar and an oven thermometer you trust. The goal is warm moving air, not a roast."
	},
	{
		id: "dried-hibiscus",
		title: "Dried roselle for the jar",
		kind: "dry",
		makes: "A winter’s tea from a summer row",
		time: "A few hours to a couple of days",
		fruits: ["Hibiscus"],
		ingredients: ["Fresh roselle calyces, pods removed"],
		steps: [
			"Pick when the calyx is plump and still tender, after the flower has fallen and before it turns woody. Separate calyx from the green seed pod. Rinse and pat dry.",
			"Dry in a dehydrator around 135°F until brittle, or on screens in the shade with air moving. Sun bleaches the red. An oven on its lowest setting, door cracked, works if you stay nearby.",
			"Condition in a jar for several days. Any softness means more drying. Store airtight, dark, and labeled. Use within a year for the best color."
		],
		note: "Save a few pods on the plant until they go brown if you want seed. Those pods are not for the teapot."
	},
	{
		id: "baked-apples",
		title: "Baked apples",
		kind: "fresh",
		makes: "One apple each",
		time: "45 minutes",
		fruits: ["Apple"],
		ingredients: [
			"Large baking apples, cores taken out and seeds discarded",
			"A spoon of brown sugar or honey in each cavity",
			"A pinch of cinnamon, a dot of butter",
			"A splash of water or apple cider in the dish"
		],
		steps: [
			"Heat the oven to 375°F. Set the apples in a small dish so they hold each other up.",
			"Fill the cores. Pour a little liquid around them.",
			"Bake until a skewer meets no resistance, 35–50 minutes. Baste once with the juices."
		]
	},
	{
		id: "pear-crisp",
		title: "Pear crisp",
		kind: "fresh",
		makes: "One 8-inch dish",
		time: "One hour",
		fruits: ["Pear"],
		ingredients: [
			"6 ripe pears, peeled, cored, sliced",
			"1 tablespoon lemon juice",
			"2 tablespoons sugar",
			"1 cup rolled oats, 1/2 cup flour, 1/3 cup brown sugar, a pinch of salt",
			"6 tablespoons cold butter, cut in"
		],
		steps: [
			"Heat the oven to 375°F. Toss pears with lemon and sugar. Spread in a buttered dish.",
			"Work the butter into the dry topping until it clumps. Scatter it on.",
			"Bake until the pears are tender and the top is browned, about 40 minutes."
		]
	},
	{
		id: "fig-toast",
		title: "Warm figs on toast",
		kind: "fresh",
		makes: "Breakfast for two",
		time: "15 minutes",
		fruits: ["Fig"],
		ingredients: [
			"6 ripe figs, quartered",
			"Thick toast, buttered",
			"Soft cheese or ricotta",
			"Honey and a few thyme leaves, optional"
		],
		steps: ["Warm the figs in a small skillet with a dot of butter until they just slump.", "Spread cheese on the toast, spoon on the figs, and finish with honey if the figs are not already sweet."]
	},
	{
		id: "pomegranate-syrup",
		title: "Pomegranate syrup",
		kind: "syrup",
		makes: "About 1 cup",
		time: "40 minutes",
		fruits: ["Pomegranate"],
		ingredients: [
			"4 cups pomegranate arils, or 2 cups fresh juice",
			"1/2 cup sugar",
			"1 tablespoon lemon juice"
		],
		steps: [
			"If you start with arils, crush them and strain out the seeds. Do not include the bitter white membrane.",
			"Simmer juice, sugar, and lemon until it coats a spoon, 15–25 minutes. It will thicken more as it cools.",
			"Bottle and refrigerate. Use within a few weeks, or freeze in a small jar with headspace. This is a fridge syrup, not a canned one."
		]
	},
	{
		id: "mulberry-shrub",
		title: "Mulberry shrub",
		kind: "syrup",
		makes: "About a pint",
		time: "A day of waiting, then a week",
		fruits: ["Mulberry"],
		ingredients: [
			"2 cups crushed ripe mulberries",
			"2 cups sugar",
			"2 cups mild vinegar, cider vinegar is the usual choice"
		],
		steps: [
			"Stir berries and sugar. Cover and refrigerate a day, stirring once, until the sugar draws out the juice.",
			"Strain. Do not force the seeds through if you can help it.",
			"Stir in the vinegar. Bottle and keep cold. Shake before you use it. A spoonful in cold water is the drink."
		],
		note: "A shrub is a drinking vinegar. It is not shelf-stable canning. Keep it in the refrigerator and use it in a month or two."
	},
	{
		id: "hibiscus-hot",
		title: "Roselle tea, hot",
		kind: "tea",
		makes: "One pot, about a quart",
		time: "15 minutes",
		fruits: ["Hibiscus"],
		ingredients: [
			"1/3 cup dried roselle calyces, or a loose cup of fresh ones",
			"1 quart water",
			"Lemon and honey only if you want them"
		],
		steps: [
			"Bring the water to a boil and take it off the heat. Add the calyces, cover, and steep 10 minutes.",
			"For a deeper cup, simmer five minutes instead of steeping, then strain. Long boiling makes it dull.",
			"Strain. Serve plain, or with a strip of lemon. Sweeten in the cup, not in a jar you mean to keep."
		],
		note: "A cup is kitchen tea. Drinking it by the pot every day, especially in pregnancy or alongside blood-pressure medicine, is a question for a clinician. This book is for the cup."
	},
	{
		id: "hibiscus-iced",
		title: "Iced roselle",
		kind: "tea",
		makes: "A pitcher",
		time: "20 minutes plus cooling",
		fruits: ["Hibiscus"],
		ingredients: [
			"1/2 cup dried calyces",
			"1 quart water",
			"Ice, and orange or lemon if you have it"
		],
		steps: [
			"Simmer the calyces in the water for 5 minutes. Steep off the heat another 10. Strain and cool.",
			"Pour over ice. If you sweeten, dissolve the sugar in the hot tea before it cools.",
			"Keep the unsweetened brew refrigerated and drink it within three days."
		]
	},
	{
		id: "orchard-blend",
		title: "Orchard peel and hibiscus blend",
		kind: "tea",
		makes: "A jar of dry blend",
		time: "The drying, then five minutes a cup",
		fruits: [
			"Apple",
			"Pear",
			"Hibiscus",
			"Citrus"
		],
		ingredients: [
			"1 cup dried apple peel",
			"1/2 cup dried pear peel",
			"1/2 cup dried roselle",
			"Zest of one orange or lemon, dried until brittle, white pith left off"
		],
		steps: [
			"Dry unsprayed peels the same way you dry apple rings, until they snap. Mix with the roselle and dried zest.",
			"Store airtight and dark.",
			"Steep a heaping tablespoon in a mug of just-boiled water for 8 minutes. Strain."
		],
		note: "Only peels from fruit you would eat unpeeled, washed, and never sprayed with something you would not want in a cup."
	},
	{
		id: "hibiscus-syrup",
		title: "Hibiscus syrup",
		kind: "syrup",
		makes: "About 2 cups",
		time: "30 minutes",
		fruits: ["Hibiscus"],
		ingredients: [
			"1 cup dried roselle, or 2 cups fresh calyces, pods removed",
			"2 cups water",
			"1 1/2 cups sugar",
			"A squeeze of lemon"
		],
		steps: [
			"Simmer calyces and water 10 minutes. Strain and press gently.",
			"Stir in the sugar and lemon and simmer just until the sugar is gone and the syrup nappes a spoon.",
			"Cool, bottle, and refrigerate. Use within a month, or freeze. Sparkling water and a spoon of this is the whole drink."
		]
	},
	{
		id: "flower-salad",
		title: "Hibiscus flower salad",
		kind: "fresh",
		makes: "A bowl",
		time: "20 minutes",
		fruits: ["Hibiscus"],
		ingredients: [
			"Petals from unsprayed Hibiscus rosa-sinensis or rose of Sharon, picked the morning you eat them",
			"Cucumber or orange, mild greens",
			"A pinch of salt, a little oil, a drop of lemon"
		],
		steps: [
			"Shake insects out of the flowers. Pull the petals free. Nip off the base of each petal if it tastes tough, and set the stamen column aside.",
			"Toss petals in at the last minute so they do not blacken and wilt into the dressing.",
			"Taste one petal plain first. They should be mildly tart or grassy. If a plant tastes bitter or soapy, do not serve it."
		],
		note: "Florist hibiscus and any plant on systemic insecticide are not food. Roselle’s useful part is the calyx, not this salad."
	},
	{
		id: "hen-scratch",
		title: "Hen scratch from the orchard",
		kind: "animal",
		makes: "One treat for a small flock, not a day’s feed",
		time: "10 minutes",
		fruits: [
			"Apple",
			"Pear",
			"Mulberry",
			"Hibiscus"
		],
		ingredients: [
			"2 cups chopped sound apple or pear flesh — every seed, stem, and core piece removed",
			"1/2 cup mashed ripe mulberry or serviceberry, or unsweetened spent roselle calyces, cooled",
			"1 cup of their usual scratch grain"
		],
		steps: [
			"Sort the fruit in the grass or on a table. Anything bruised deep, moldy, foamy, or fermented goes to a hot compost, not the birds.",
			"Chop the flesh small. Mix with grain so they cannot fill up on fruit alone.",
			"Offer it in a clean dish. Take away whatever is left by evening. A few times a week is a treat. It does not replace layer feed, grit, or clean water."
		],
		note: "No pits. No cherry, peach, plum, or apricot stones. No leaves or prunings from those trees. No sugar, no xylitol, no jam, no syrup. Full rules are in the animals’ chapter."
	},
	{
		id: "spent-calyx",
		title: "Spent calyces for the hens",
		kind: "animal",
		makes: "The leftovers of a pot of tea",
		time: "The time it takes the tea to cool",
		fruits: ["Hibiscus"],
		ingredients: ["Roselle calyces you have already steeped, with no sugar, honey, or essential oil in the pot", "A handful of their regular grain"],
		steps: [
			"Strain the tea for yourself. Cool the calyces completely.",
			"Chop them and fold into a little grain.",
			"Feed as a small treat. If the birds ignore it, compost it. Do not let sweetened or moldy leftovers sit in the run."
		]
	}
];
var recipeById = Object.fromEntries(recipes.map((recipe) => [recipe.id, recipe]));
var kindLabel = {
	jam: "Jam",
	jelly: "Jelly",
	butter: "Butter",
	can: "Canning",
	dry: "Drying",
	fresh: "At the table",
	tea: "Tea",
	syrup: "Syrup",
	animal: "For animals"
};
var recipeFilters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "can",
		label: "Canning"
	},
	{
		id: "jam",
		label: "Jams & jellies"
	},
	{
		id: "dry",
		label: "Drying"
	},
	{
		id: "fresh",
		label: "The table"
	},
	{
		id: "tea",
		label: "Teas"
	},
	{
		id: "syrup",
		label: "Syrups"
	},
	{
		id: "animal",
		label: "Animals"
	}
];
function recipeMatches(kind, filter) {
	if (filter === "all") return true;
	if (filter === "jam") return kind === "jam" || kind === "jelly" || kind === "butter";
	return kind === filter;
}
function blockText(block) {
	switch (block.t) {
		case "p":
		case "h":
		case "pull": return block.text;
		case "note": return `${block.label} ${block.text}`;
		case "ul":
		case "ol": return block.items.join(" ");
		case "table": return [...block.headers, ...block.rows.flat()].join(" ");
		case "fig": return block.caption;
		default: return "";
	}
}
function searchBook(query) {
	const q = query.trim().toLowerCase();
	if (q.length < 2) return [];
	const hits = [];
	for (const chapter of chapters) if (`${chapter.title} ${chapter.lede} ${chapter.blocks.map(blockText).join(" ")}`.toLowerCase().includes(q)) hits.push({
		key: `c-${chapter.id}`,
		title: chapter.title,
		detail: chapter.part,
		chapterId: chapter.id
	});
	for (const recipe of recipes) if (`${recipe.title} ${recipe.ingredients.join(" ")} ${recipe.steps.join(" ")}`.toLowerCase().includes(q)) hits.push({
		key: `r-${recipe.id}`,
		title: recipe.title,
		detail: "Recipe",
		chapterId: "recipes",
		recipeId: recipe.id
	});
	for (const fruit of fruits) if (`${fruit.name} ${fruit.latin} ${fruit.seed} ${fruit.kitchen} ${fruit.caution ?? ""}`.toLowerCase().includes(q)) hits.push({
		key: `f-${fruit.id}`,
		title: fruit.name,
		detail: "Tree",
		chapterId: "twelve-trees"
	});
	return hits.slice(0, 24);
}
function RecipeCard({ recipe }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id: `recipe-${recipe.id}`,
		className: "scroll-mt-24 border border-line bg-sheet",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl text-ink",
					children: recipe.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-fruit uppercase",
					children: kindLabel[recipe.kind]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 px-4 py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							recipe.makes,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2 text-line",
								children: "/"
							}),
							recipe.time
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-3 font-display text-base text-leaf",
						children: "Ingredients"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1.5 text-sm leading-relaxed",
						children: recipe.ingredients.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pl-3 border-l border-line",
							children: item
						}, item))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-base text-leaf",
					children: "Method"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed",
					children: recipe.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
				})] })]
			}),
			recipe.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-line px-4 py-3 text-sm leading-relaxed text-bark",
				children: recipe.note
			}) : null
		]
	});
}
var READ_KEY = "sts-read";
var SIZE_KEY = "sts-size";
var MARK_KEY = "sts-mark";
function BookApp({ chapterId, recipeId, onOpen }) {
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [size, setSize] = (0, import_react.useState)("md");
	const [read, setRead] = (0, import_react.useState)([]);
	const [mark, setMark] = (0, import_react.useState)(null);
	const [fruitQuery, setFruitQuery] = (0, import_react.useState)("");
	const [openFruit, setOpenFruit] = (0, import_react.useState)("apple");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [monthId, setMonthId] = (0, import_react.useState)(months[(/* @__PURE__ */ new Date()).getMonth()]?.id ?? "jan");
	(0, import_react.useEffect)(() => {
		const storedSize = localStorage.getItem(SIZE_KEY);
		if (storedSize === "sm" || storedSize === "md" || storedSize === "lg") setSize(storedSize);
		const storedMark = localStorage.getItem(MARK_KEY);
		if (storedMark) setMark(storedMark);
		try {
			const parsed = JSON.parse(localStorage.getItem(READ_KEY) ?? "[]");
			if (Array.isArray(parsed)) setRead(parsed.filter((item) => typeof item === "string"));
		} catch {
			setRead([]);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!chapterId) return;
		setRead((current) => {
			if (current.includes(chapterId)) return current;
			const next = [...current, chapterId];
			localStorage.setItem(READ_KEY, JSON.stringify(next));
			return next;
		});
	}, [chapterId]);
	(0, import_react.useEffect)(() => {
		const node = document.getElementById("reader-scroll");
		if (recipeId) {
			document.getElementById(`recipe-${recipeId}`)?.scrollIntoView({ block: "start" });
			return;
		}
		node?.scrollTo({ top: 0 });
	}, [chapterId, recipeId]);
	const chapter = chapters.find((item) => item.id === chapterId);
	const index = chapter ? chapterIndex(chapter.id) : -1;
	const previous = index > 0 ? chapters[index - 1] : void 0;
	const next = index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : void 0;
	const hits = (0, import_react.useMemo)(() => searchBook(query), [query]);
	const progress = Math.round(read.length / chapters.length * 100);
	const sizeClass = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";
	function openChapter(id, recipe) {
		setMenu(false);
		setSearchOpen(false);
		onOpen(id, recipe);
	}
	function cycleSize() {
		const order = [
			"sm",
			"md",
			"lg"
		];
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "no-print hidden w-72 shrink-0 flex-col border-r border-line bg-sheet md:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
					progress,
					activeId: chapter?.id,
					mark,
					onOpen: openChapter
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "no-print flex items-center gap-2 border-b border-line bg-sheet px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center md:hidden",
							"aria-label": "Open contents",
							onClick: () => setMenu(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-w-0 flex-1 truncate text-left font-display text-lg",
							onClick: () => openChapter("cover"),
							children: "Seed to Seed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center",
							"aria-label": "Search the book",
							onClick: () => setSearchOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center",
							"aria-label": "Change type size",
							onClick: cycleSize,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-5" })
						}),
						chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center",
							"aria-label": mark === chapter.id ? "Remove bookmark" : "Bookmark this chapter",
							"aria-pressed": mark === chapter.id,
							onClick: toggleMark,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: `size-5 ${mark === chapter.id ? "fill-fruit text-fruit" : ""}` })
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					id: "reader-scroll",
					className: "min-h-0 flex-1 overflow-y-auto",
					children: chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `reader mx-auto max-w-3xl px-5 pt-8 pb-16 ${sizeClass}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-[0.18em] text-leaf uppercase",
								children: [
									chapter.part,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2 text-line",
										children: "/"
									}),
									chapter.num
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl",
								children: chapter.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted italic",
								children: chapter.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-5",
								children: chapter.blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, {
									block,
									onOpen: openChapter,
									fruitQuery,
									setFruitQuery,
									openFruit,
									setOpenFruit,
									filter,
									setFilter,
									monthId,
									setMonthId
								}, `${chapter.id}-${i}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-12 flex items-stretch justify-between gap-3 border-t border-line pt-6",
								children: [previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "min-h-11 max-w-[46%] text-left",
									onClick: () => openChapter(previous.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-xs tracking-wide text-muted uppercase",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Previous"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-display text-lg leading-tight",
										children: previous.title
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "min-h-11 max-w-[46%] text-right",
									onClick: () => openChapter(next.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center justify-end gap-1 text-xs tracking-wide text-muted uppercase",
										children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-display text-lg leading-tight",
										children: next.title
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
							})
						]
					}) : chapterId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Missing, { onOpen: openChapter }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						mark,
						onOpen: openChapter
					})
				})]
			}),
			menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-ink/40",
					"aria-label": "Close contents",
					onClick: () => setMenu(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col bg-sheet",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end px-2 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center",
							"aria-label": "Close",
							onClick: () => setMenu(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
						progress,
						activeId: chapter?.id,
						mark,
						onOpen: openChapter
					})]
				})]
			}) : null,
			searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-xl border border-line bg-sheet shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-line px-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoFocus: true,
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Search trees, jars, tea…",
								className: "min-h-12 w-full bg-transparent py-3 text-base outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex min-h-11 min-w-11 items-center justify-center",
								"aria-label": "Close search",
								onClick: () => setSearchOpen(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "max-h-[60vh] overflow-y-auto",
						children: [query.trim().length >= 2 && hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-4 py-6 text-sm text-muted",
							children: "Nothing in the book matches that."
						}) : null, hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-line last:border-b-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex min-h-11 w-full items-baseline justify-between gap-3 px-4 py-3 text-left",
								onClick: () => openChapter(hit.chapterId, hit.recipeId),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg",
									children: hit.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-xs tracking-wide text-muted uppercase",
									children: hit.detail
								})]
							})
						}, hit.key))]
					})]
				})
			}) : null
		]
	});
}
function Sidebar({ progress, activeId, mark, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-line px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex items-center gap-2 text-left",
				onClick: () => onOpen("cover"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "size-5 text-leaf" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display text-xl leading-none",
					children: "Seed to Seed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-xs tracking-wide text-muted uppercase",
					children: "A fruit tree almanac"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1 bg-paper-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1 bg-leaf",
						style: { width: `${progress}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: [progress, "% of the chapters opened"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "min-h-0 flex-1 overflow-y-auto px-2 py-3",
			"aria-label": "Contents",
			children: parts().map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 pb-1 text-xs tracking-[0.16em] text-muted uppercase",
					children: part.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: part.chapters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(item.id),
					className: `flex min-h-11 w-full items-center gap-2 px-2 py-2 text-left text-sm leading-snug ${activeId === item.id ? "bg-leaf-soft text-leaf" : "hover:bg-paper"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 shrink-0 text-xs text-muted",
							children: item.num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: item.title
						}),
						mark === item.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-3.5 fill-fruit text-fruit" }) : null
					]
				}) }, item.id)) })]
			}, part.name))
		})]
	});
}
function Cover({ mark, onOpen }) {
	const marked = chapters.find((chapter) => chapter.id === mark);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-5 pt-6 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: art.cover,
				alt: "Apple, quince, peach, pomegranate, fig, a jar of jam, and a hibiscus branch on linen.",
				className: "w-full border border-line"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.2em] text-leaf uppercase",
					children: "From seed to seed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl leading-none text-ink sm:text-6xl",
					children: "Seed to Seed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg leading-relaxed",
					children: "Fruit trees grown, eaten, put up, and planted again. Canning, jams and jellies, storage, and the recipes that use them. A bonus on the hibiscus — the tree, the calyx, the tea — and a second bonus on what the animals may have from the orchard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center bg-leaf px-4 font-display text-sheet",
						onClick: () => onOpen("how-to-use"),
						children: "Open the book"
					}), marked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center px-2 text-leaf",
						onClick: () => onOpen(marked.id),
						children: ["Continue · ", marked.title]
					}) : null]
				})
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-8 sm:grid-cols-2",
			children: parts().map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: part.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2",
				children: part.chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex min-h-11 w-full items-baseline gap-3 border-b border-line py-2 text-left",
					onClick: () => onOpen(chapter.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-8 text-xs text-muted",
						children: chapter.num
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chapter.title })]
				}) }, chapter.id))
			})] }, part.name))
		})]
	});
}
function Missing({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-5 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "That page is not in the book"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-6 inline-flex min-h-11 items-center text-leaf",
			onClick: () => onOpen("cover"),
			children: "Return to the cover"
		})]
	});
}
function BlockView({ block, onOpen, fruitQuery, setFruitQuery, openFruit, setOpenFruit, filter, setFilter, monthId, setMonthId }) {
	if (block.t === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: block.drop ? "drop" : void 0,
		children: block.text
	});
	if (block.t === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "pt-4 font-display text-3xl leading-tight",
		children: block.text
	});
	if (block.t === "ul") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2 pl-1",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "border-l-2 border-leaf pl-3",
			children: item
		}, item))
	});
	if (block.t === "ol") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "list-decimal space-y-2 pl-5",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "pl-1",
			children: item
		}, item))
	});
	if (block.t === "note") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "border border-line bg-fruit-soft px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-[0.16em] text-fruit uppercase",
			children: block.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1",
			children: block.text
		})]
	});
	if (block.t === "pull") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
		className: "border-l-4 border-leaf py-1 pl-4 font-display text-2xl leading-snug",
		children: block.text
	});
	if (block.t === "fig") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "-mx-1 sm:mx-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: art[block.src],
			alt: block.alt,
			className: "w-full border border-line"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: block.caption
		})]
	});
	if (block.t === "table") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-x-auto border border-line",
		children: [block.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "border-b border-line bg-paper-deep px-3 py-2 text-sm text-bark",
			children: block.caption
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[36rem] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-leaf-soft text-leaf",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: block.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2 font-medium",
					children: header
				}, header)) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-t border-line align-top",
				children: row.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2 leading-relaxed",
					children: cell
				}, cell))
			}, row.join("|"))) })]
		})]
	});
	if (block.t === "jump") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "inline-flex min-h-11 items-center font-display text-leaf",
		onClick: () => onOpen(block.to),
		children: [block.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
	});
	if (block.t === "recipes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: block.ids.map((id) => {
			const recipe = recipeById[id];
			return recipe ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeCard, { recipe }, id) : null;
		})
	});
	if (block.t === "fruits") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FruitDeck, {
		query: fruitQuery,
		setQuery: setFruitQuery,
		openId: openFruit,
		setOpenId: setOpenFruit
	});
	if (block.t === "calendar") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarView, {
		monthId,
		setMonthId
	});
	if (block.t === "recipe-index") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeIndex, {
		filter,
		setFilter
	});
	return null;
}
function FruitDeck({ query, setQuery, openId, setOpenId }) {
	const q = query.trim().toLowerCase();
	const shown = fruits.filter((fruit) => q.length === 0 ? true : `${fruit.name} ${fruit.latin} ${fruit.kitchen} ${fruit.caution ?? ""}`.toLowerCase().includes(q));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "block text-sm text-muted",
			htmlFor: "fruit-find",
			children: "Find a tree"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "fruit-find",
			value: query,
			onChange: (event) => setQuery(event.target.value),
			placeholder: "Apple, pawpaw, citrus…",
			className: "mt-1 min-h-11 w-full border border-line bg-sheet px-3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3",
			children: shown.map((fruit) => {
				const open = openId === fruit.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-line bg-sheet",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3 text-left",
						"aria-expanded": open,
						onClick: () => setOpenId(open ? null : fruit.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl",
							children: fruit.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted italic",
							children: fruit.latin
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `size-4 shrink-0 ${open ? "rotate-90" : ""}` })]
					}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 border-t border-line px-4 py-4 text-base",
						children: [
							fruit.plate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: art[fruit.plate],
								alt: "",
								className: "w-full max-w-sm border border-line"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-leaf",
								children: "Comes true. "
							}), fruit.comesTrue] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-leaf",
								children: "Chill. "
							}), fruit.chill] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-leaf",
								children: "Sow. "
							}), fruit.sow] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-leaf",
								children: "Years. "
							}), fruit.years] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-leaf",
								children: "Seed. "
							}), fruit.seed] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-leaf",
								children: "Kitchen. "
							}), fruit.kitchen] }),
							fruit.caution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "border-l-2 border-fruit pl-3 text-bark",
								children: fruit.caution
							}) : null
						]
					}) : null]
				}, fruit.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-8 font-display text-2xl",
			children: "Also in the row"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-3",
			children: alsoFruits.map((fruit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-leaf",
				children: [fruit.name, ". "]
			}), fruit.note] }, fruit.name))
		})
	] });
}
function CalendarView({ monthId, setMonthId }) {
	const current = months[(/* @__PURE__ */ new Date()).getMonth()]?.id;
	const month = months.find((item) => item.id === monthId) ?? months[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-2 sm:grid-cols-4",
		children: months.map((item) => {
			const selected = item.id === month?.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setMonthId(item.id),
				className: `min-h-11 border px-2 py-2 text-sm ${selected ? "border-leaf bg-leaf text-sheet" : "border-line bg-sheet"}`,
				children: [item.name.slice(0, 3), item.id === current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block text-xs opacity-80",
					children: "Now"
				}) : null]
			}, item.id);
		})
	}), month ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 border border-line bg-sheet p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl",
			children: month.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-3",
			children: month.tasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-l-2 border-leaf pl-3",
				children: task
			}, task))
		})]
	}) : null] });
}
function RecipeIndex({ filter, setFilter }) {
	const shown = recipes.filter((recipe) => recipeMatches(recipe.kind, filter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: recipeFilters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setFilter(item.id),
			className: `min-h-11 border px-3 text-sm ${filter === item.id ? "border-leaf bg-leaf text-sheet" : "border-line bg-sheet"}`,
			children: item.label
		}, item.id))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 space-y-4",
		children: shown.map((recipe) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeCard, { recipe }, recipe.id))
	})] });
}
function Home() {
	const { c, r } = Route.useSearch();
	const navigate = Route.useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookApp, {
		chapterId: c,
		recipeId: r,
		onOpen: (chapterId, recipeId) => {
			const search = {};
			if (chapterId !== "cover") search.c = chapterId;
			if (recipeId) search.r = recipeId;
			navigate({
				to: "/",
				search
			});
		}
	});
}
//#endregion
export { Home as component };
