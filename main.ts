import fs from 'node:fs';
const ENTRY = "Hey, you keep coming back. I'm not saying it's fate, but my coil has been saving the last chocolate bar just for you.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
