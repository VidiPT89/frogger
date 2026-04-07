# 🐸 Frogger

> *"Just cross the road. It's one road. How hard can it be?"*
> *"It's also a river. And the logs are a trap."*

A browser recreation of the classic Frogger arcade game — no canvas, no engine, no framework.
Just a 9×9 grid of `<div>`s, some animated GIFs, and a frog with a death wish.

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/frameworks-none-lightgrey?style=flat)
![Vanilla JS](https://img.shields.io/badge/vanilla-JS%20only-yellow?style=flat)
![DOM API](https://img.shields.io/badge/DOM-manipulation-blue?style=flat)

---

## Game Zones

```
┌─────────────────────────────┐
│  🏠  . . . . H . . . .     │  ← Row 0    Win zone (reach home)
│  🌿  . . . . . . . . .     │  ← Row 1    Safe (grass)
│  🚗  ← ← ← ← ← ← ← ← ←   │  ← Row 2    Road (cars going left)
│  🚗  → → → → → → → → →   │  ← Row 3    Road (cars going right)
│  🌿  . . . . . . . . .     │  ← Row 4    Safe (grass)
│  🪵  ← ← ← ← ← ← ← ← ←   │  ← Row 5    River (logs going left)
│  🪵  → → → → → → → → →   │  ← Row 6    River (logs going right)
│  🌿  . . . . . . . . .     │  ← Row 7    Safe (grass)
│  🐸  . . . . S . . . .     │  ← Row 8    Start (spawn point)
└─────────────────────────────┘
```

---

## Features

| | Feature | Detail |
|---|---|---|
| 🐸 | Frog movement | Arrow keys with full boundary detection — no clipping through walls |
| 🚗 | Moving cars | Two road lanes, cars cycling left and right on a 1s interval |
| 🪵 | River logs | Two river lanes, logs cycling in opposite directions |
| 🏠 | Win condition | Reach the home cell at the top to win |
| 💀 | Lose condition | Land on a car or a dangerous river cell |
| 🔁 | Auto-movement | All obstacles move independently via `setInterval` |
| ⛔ | Clean game over | Intervals cleared, keyboard listener removed on win or death |
| 🖼️ | GIF visuals | Every zone and character rendered with animated GIFs via CSS |

---

## How to Play

1. Open `index.html` in any modern browser
2. The frog spawns at the **bottom centre** of the grid
3. Use **↑ ↓ ← →** arrow keys to move
4. Cross the **road** — time your moves around the cars
5. Cross the **river** — only certain cells are safe
6. Reach the **🏠 home** cell at the top to win
7. Open **DevTools → Console** — that's where the game talks to you

---

## Project Structure

```
frogger/
│
├── 📄 index.html          ← Page structure and grid container
├── 🎨 styles.css          ← Grid layout, zone colours, GIF backgrounds
├── ⚙️  app.js             ← All game logic: movement, obstacles, state, win/lose
│
└── 📁 images/
    ├── frog.gif           ← The hero
    ├── car.gif            ← The villain
    ├── log.gif            ← The platform (kind of)
    ├── log2.gif           ← The other log
    ├── water.gif          ← The danger
    ├── grass.gif          ← The safe zone
    ├── road.jpg           ← Road texture (lane 1)
    ├── road2.jpg          ← Road texture (lane 2)
    └── home.gif           ← The destination
```

---

## How It Works

```
createBoard()  →  Builds 81 <div>s into a 9×9 grid
    │
    ├── Position 4     →  .end            (win zone — home)
    ├── Position 76    →  .start + .frog  (spawn point)
    ├── Rows 18–26    →  .road-left       (cars, c1–c3, going left)
    ├── Rows 27–35    →  .road-right      (cars, c1–c3, going right)
    ├── Rows 45–53    →  .river-left      (logs, l1–l5, going left)
    └── Rows 54–62    →  .river-right     (logs, l1–l5, going right)

keydown  →  moveFrog()
    ├── Removes .frog from current cell
    ├── Recalculates position with boundary checks
    └── Adds .frog to new cell

setInterval (1000ms)  →  autoMove()
    └── Cycles all car and log CSS classes one step per tick

setInterval (50ms)  →  checkWin()
    ├── .end reached      →  "Ganhaste!!!!"  →  game over (win)
    ├── .c1 or .l1–.l3   →  "Morreste!!!!"  →  game over (lose)
    └── Either result     →  clears intervals + removes keydown listener
```

---

## Honest Notes

- Win and lose are announced exclusively in the **browser console**. The page does nothing — no flash, no text, no sound. Open DevTools or you'll never know what happened.
- The game is 81 `<div>`s on a flex grid. No canvas. No engine. Every zone is a CSS class slapped on a div.
- Cars have **3 positions** (c1–c3) and logs have **5** (l1–l5). Movement works by cycling `data-*` attributes and swapping CSS classes on every interval tick. Unorthodox. Works.
- The lose condition checks for `.c1` (car) and `.l1`, `.l2`, `.l3`. If it looks like the logs are killing you instead of the water — you're reading the code correctly. The river logic is a known curiosity.
- There's a large commented-out `switch` block left in the file from an earlier approach. It was replaced by arithmetic. The ghost stays. It has earned its place.
- Variable comments read: `// l de LOG = Tronco`. The code is bilingual. The game is not.

---

## Context

Built as part of my **Web Development (Front-End)** module at **CESAE Digital**.
First project involving continuous game-state logic, interval-based animation, class-driven obstacle movement, and collision detection — all wired manually, no libraries.

---

*Next up: win/lose feedback on the page itself, a lives counter, maybe obstacles that actually change speed. The console has done enough.*
