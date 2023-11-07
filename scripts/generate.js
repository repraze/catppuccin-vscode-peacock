// @ts-check

import { variants } from "@catppuccin/palette";
import { promises } from "fs";

/** @type {(keyof import("@catppuccin/palette").Variants)[]} */
const VARIANTS = ["latte", "frappe", "macchiato", "mocha"];

/** @type {(keyof import("@catppuccin/palette").Labels)[]} */
const LABELS = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
];

/** @param {string} str */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default async function generate() {
  for (const v of VARIANTS) {
    const filename = `${v}.json`;
    console.log(`generating "${filename}" theme`);
    const peacockThemeArray = [];
    for (const l of LABELS) {
      peacockThemeArray.push({
        name: `Catppuccin ${capitalizeFirstLetter(v)} ${capitalizeFirstLetter(
          l
        )}`,
        value: variants[v][l].hex,
      });
    }
    const peacockTheme = {
      "peacock.favoriteColors": peacockThemeArray,
    };

    await promises.writeFile(
      filename,
      JSON.stringify(peacockTheme, undefined, 2)
    );
    console.log(`done`);
  }
}

generate();
