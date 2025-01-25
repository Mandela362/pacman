# Pac-Man Clone

Welcome to the Pac-Man Clone project! This is a simple, web-based implementation of the classic arcade game Pac-Man. The game is built using HTML, CSS, and JavaScript, and it features basic gameplay mechanics, including Pac-Man movement, ghost movement, dot collection, and collision detection.

## Table of Contents

- [Features](#features)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Game Mechanics](#game-mechanics)
- [Audio](#audio)
- [Game Over](#game-over)
- [Restarting the Game](#restarting-the-game)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Grid-based Gameplay**: The game is played on a 20x20 grid.
- **Pac-Man Movement**: Control Pac-Man using arrow keys or WASD.
- **Ghost Movement**: Ghosts move randomly around the grid.
- **Dot Collection**: Collect dots to increase your score.
- **Collision Detection**: Collide with ghosts to end the game.
- **8-bit Sound Effects**: Enjoy retro-style sound effects when eating dots and when the game ends.

## How to Play

1. **Start the Game**: Open the `index.html` file in your web browser.
2. **Controls**:
   - Use the **Arrow Keys** or **WASD** to move Pac-Man.
   - **Arrow Right / D**: Move right.
   - **Arrow Left / A**: Move left.
   - **Arrow Down / S**: Move down.
   - **Arrow Up / W**: Move up.
3. **Objective**: Collect as many dots as possible while avoiding the ghosts.
4. **Game Over**: The game ends when Pac-Man collides with a ghost.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pacman-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pacman-clone
   ```
3. Open the `index.html` file in your web browser to start the game.

## Game Mechanics

- **Pac-Man Movement**: Pac-Man moves in the direction specified by the player. The game wraps around the grid, so if Pac-Man moves off one side, he reappears on the opposite side.
- **Ghost Movement**: Ghosts move randomly around the grid, changing direction when they hit the edge of the grid.
- **Dot Collection**: Dots are placed on the grid, and Pac-Man collects them by moving over them. Each dot collected increases the score by 1.
- **Collision Detection**: If Pac-Man collides with a ghost, the game ends.

## Audio

The game features simple 8-bit sound effects:

- **Dot Collection Sound**: A short, high-pitched sound plays when Pac-Man collects a dot.
- **Game Over Sound**: A low-pitched sound plays when the game ends.

## Game Over

When Pac-Man collides with a ghost, the game ends, and a "Game Over" message is displayed. The player's final score is shown, and they have the option to restart the game.

## Restarting the Game

After a game over, the player can restart the game by clicking the "Restart" button. This resets the grid, Pac-Man's position, the ghosts' positions, and the score.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Enjoy the game and happy coding! 🎮👾
