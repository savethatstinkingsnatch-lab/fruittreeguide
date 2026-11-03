import animals from "../assets/art/animals.jpg";
import apple from "../assets/art/apple.jpg";
import citrus from "../assets/art/citrus.jpg";
import cover from "../assets/art/cover.jpg";
import hibiscus from "../assets/art/hibiscus.jpg";
import jam from "../assets/art/jam.jpg";
import nursery from "../assets/art/nursery.jpg";
import orchard from "../assets/art/orchard.jpg";
import pantry from "../assets/art/pantry.jpg";
import seeds from "../assets/art/seeds.jpg";
import stone from "../assets/art/stone.jpg";
import tea from "../assets/art/tea.jpg";

export const art = {
  animals,
  apple,
  citrus,
  cover,
  hibiscus,
  jam,
  nursery,
  orchard,
  pantry,
  seeds,
  stone,
  tea,
} as const;

export type ArtKey = keyof typeof art;
