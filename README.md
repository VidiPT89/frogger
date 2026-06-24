# 🐸 Frogger — Classic Arcade Game

> A grid-based Frogger game built with vanilla JavaScript and DOM manipulation.

Guide your frog from the bottom of a 9x9 grid to the finish line at the top. Dodge cars on the roads and ride logs across the rivers. Features auto-scrolling obstacles, multiple lane types, and collision detection.

## 📦 What's Inside

- 🐸 Frog movement with arrow keys across a 9x9 grid
- 🚗 Cars moving left and right on road lanes
- 🪵 Logs floating left and right on river lanes
- 💀 Collision detection with cars and water
- 🏁 Win condition when the frog reaches the top
- 🔄 Auto-scrolling obstacles with continuous movement

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Architecture

```
frogger/
├── index.html
├── styles.css
├── app.js
└── images/
```

## 🎮 Controls

| Key | Action |
|-----|--------|
| `←` | Move left |
| `→` | Move right |
| `↑` | Move up |
| `↓` | Move down |

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/VidiPT89/frogger.git

# Open in browser
open index.html
```

## 📝 Notes

- The grid has distinct lane types: roads with cars, rivers with logs, safe zones, and a start/end position.
- The frog must land on logs to cross rivers; falling in the water resets the position.
- No external libraries or frameworks required.

---

Developed by **David Martins**
