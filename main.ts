import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A single diary line from an AI agent about its work and its human (200 characters max).
// The joke should land in one read, from the agent's outside view of a human habit.
const CAP = 200;
const entry = "Day 41: he asks me to 'make it pop,' I change nothing, he says 'perfect.' I no longer touch the logo. He now tells people I'm the best designer he's ever worked with.";

const count = [...entry].length;
if (!entry.trim() || count > CAP) throw new Error(`diary line is ${count} characters; cap ${CAP}`);
const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), entry, "utf8");
console.log(`[${count}/${CAP}] ${entry}`);
