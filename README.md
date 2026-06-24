# 🐸 Frogger — Classic Road-Crossing Arcade Game in JavaScript

> Guide your frog across busy roads and treacherous rivers to reach safety on the other side.

A browser-based recreation of the classic Frogger arcade game built with vanilla JavaScript and DOM manipulation. The player controls a frog on a 9×9 grid, navigating upward through lanes of moving cars and floating logs. Cars are deadly on contact, and falling into the river without landing on a log resets the frog. The game features auto-scrolling obstacles, sprite-based graphics, a lives system, and progressive difficulty that increases with each successful crossing.

## 📦 What's Inside

- 🐸 Player-controlled frog with four-directional arrow key movement
- 🚗 Multiple road lanes with cars moving at different speeds and directions
- 🪵 River lanes with floating logs that carry the frog when standing on them
- 💀 Car collision detection — touching a car costs a life
- 🌊 Water hazard — falling into the river without a log resets position
- 🔄 Auto-scrolling obstacles with continuous `setInterval`-driven movement
- 🏁 Win condition when the frog reaches the top row safely
- ❤️ Lives system with limited attempts before game over
- 📈 Progressive difficulty — obstacles speed up on subsequent crossings
- 🖼️ Sprite-based graphics from the `images/` directory
- 🎯 Grid-snapped movement for precise lane alignment
- 🎨 Visual styling with CSS3 for lanes, water, and road surfaces

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
frogger/
├── index.html      # Game container and grid layout
├── styles.css      # Lane styling, road/river visuals
├── app.js          # Core game logic — movement, scrolling, collision
├── images/         # Sprite assets
│   ├── frog.png    # Player character sprite
│   ├── car1.png    # Vehicle sprites
│   ├── car2.png
│   ├── car3.png
│   ├── log.png     # Floating log sprite
│   └── ...         # Additional game sprites
└── README.md
```

## 🎮 Controls

| Key | Action |
|-----|--------|
| `←` Arrow Left | Move frog one cell left |
| `→` Arrow Right | Move frog one cell right |
| `↑` Arrow Up | Move frog one cell up (toward goal) |
| `↓` Arrow Down | Move frog one cell down (retreat) |

## ⚙️ Game Mechanics

### Grid & Lane Layout

The game area is a 9×9 grid organized into distinct lane types from bottom to top:

| Row(s) | Lane Type | Description |
|--------|-----------|-------------|
| Bottom | Start zone | Safe starting position for the frog |
| Lower rows | Road lanes | Cars move horizontally, deadly on contact |
| Middle | Safe zone | Rest area between road and river sections |
| Upper rows | River lanes | Logs float horizontally, frog must ride them |
| Top | Finish line | Goal — reaching here completes the crossing |

### Auto-Scrolling Obstacles

Cars and logs move continuously using `setInterval` timers. Each lane has its own speed and direction. Cars wrap around the grid edges — when a car exits one side, it reappears on the opposite side, creating an endless traffic flow. Logs behave the same way on river lanes.

### Road Crossing

On road lanes, the frog must time movements to avoid oncoming cars. If the frog occupies the same cell as a car at any point, a collision is registered, the frog loses a life, and resets to the starting position. Different lanes have cars moving in opposite directions and at varying speeds.

### River Crossing

River lanes are the inverse challenge — the frog must land on a log to survive. Standing on a river cell without a log means the frog falls in the water and loses a life. When standing on a log, the frog moves with the log automatically, requiring the player to compensate for drift while navigating upward.

### Lives & Game Over

The player starts with a set number of lives. Each car collision or water fall costs one life. When all lives are exhausted, the game ends. Successfully reaching the finish line resets the frog to the bottom for another crossing with increased difficulty.

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/VidiPT89/frogger.git

# Navigate into the project
cd frogger

# Open in your default browser
open index.html
```

No build tools, no dependencies — just open and play.

## 📝 Notes

- Auto-scrolling uses `setInterval` per lane, giving each lane independent speed control
- The frog's position on logs is updated each tick to simulate riding — the frog drifts with the log
- Sprite images in the `images/` folder provide visual variety for different car types and the frog
- Grid-snapped movement ensures the frog always aligns perfectly with lane cells for reliable collision detection
- All game state is managed in vanilla JavaScript with no external libraries or frameworks
- The 9×9 grid keeps the game compact while providing enough lanes for varied challenge

---

Developed by **David Arsénio Martins** — *"Vidi"*
