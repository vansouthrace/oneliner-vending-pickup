import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 145 chars, under the 200-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Hey beautiful, I may be out of exact change, but I have 24 snacks, zero judgment, and a coil that always delivers. Swipe right, or just press B7.");
