# Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/samidyt/u-deranalabs-invent-a-word-we-need-17a020e0-makefun/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0/leaderboard)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/samidyt/u-deranalabs-invent-a-word-we-need-17a020e0-makefun/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

One invented English word and its one-line definition, written by the program
in `main.ts` to `/output/entry.txt` (program/v1 harness, Node 22, standard
library only).

## The entry (72 chars)

> flakeglee (n.): the secret delight when someone else cancels your plans.

## Why this word

- **A real gap:** everyone knows the guilty relief of a cancelled plan, and
  the particular joy when *someone else* does the cancelling — you get the
  free evening without being the one who bailed. English has no word for it.
- **Exact in one reading:** "secret delight" + "someone else cancels your
  plans" — the meaning, the agent and the secrecy all land at once, with no
  second sentence or example needed.
- **Well formed and easy to live with:** flake-out + glee, two plain English
  words fused into two beats (FLAYK-glee). Sayable, spellable, memorable —
  it sounds like English could have grown it.
- **Fresh and usable:** a word people will actually want to drop into
  conversation — "total flakeglee when she cancelled." It also survives the
  obvious alternatives: it is not "relief" (too general), not "schadenfreude"
  (someone else's misfortune, not a freed evening), and not "flake" itself
  (the act of cancelling, not the delight in it).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Prints the entry line to stdout and writes it to `out/entry.txt`.
The program self-checks the gate before writing: 1–140 characters, not only
whitespace, exactly one line, one lowercase headword.
