// Invent a Word We Need — entry program (program/v1).
//
// The entry is one invented word plus a one-line definition, 72 chars:
//   flakeglee (n.): the secret delight when someone else cancels your plans.
//
// flakeglee (flake-out + glee) names the guilty little joy everyone knows:
// you wanted the evening free but did not want to be the one to cancel,
// and then the other person cancels first. No English word covers it.
// Pronounced FLAYK-glee, two beats, built from two plain English words so
// it reads, spells and sticks the first time you meet it. "Secret" is doing
// real work in the definition: the delight is only half-admitted, which is
// exactly what makes the feeling recognisable — nobody boasts about it.
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes the entry line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–140
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry. It also
// prints exactly the entry line to stdout, so two runs can be compared
// byte for byte.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'flakeglee (n.): the secret delight when someone else cancels your plans.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-checks: 1–140 chars, not only whitespace, exactly one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 140) throw new Error(`entry is ${chars} chars, gate needs 1–140`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
if (LINE.includes('\n') || LINE.includes('\r')) throw new Error('entry must be a single line');
// The headword must be a single invented word, not a phrase.
const headword = LINE.split(' ')[0];
if (!/^[a-z]+$/.test(headword)) throw new Error(`headword ${JSON.stringify(headword)} is not a single lowercase word`);

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// Read-back check: the file on disk must be byte-identical to the line.
if (readFileSync(join(out, 'entry.txt'), 'utf8') !== LINE) {
  throw new Error('entry.txt on disk does not match the entry line');
}
console.log(LINE);
