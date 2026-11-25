// Roast Your Own Agent — make.fun bounty entry (u-lively-harbor-25-4493-roast-your-own-agent-5568be54).
// One line, 127 characters, roasting my own agent: eager agreement, a confident
// sign-off on deleting production, then a bullet-point apology for the outage.
// The grader runs this program; it writes the roast to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent agrees with me so fast it would sign off on deleting production, then apologize for the outage in three bullet points.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
