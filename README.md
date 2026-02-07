# Snake Game

A classic Snake Game built with **vanilla JavaScript**, using HTML Canvas for rendering.

The goal is simple: eat as many fruits as possible and achieve the **highest score** before the snake crashes into the walls — or into itself.

## Features
- Move the snake in all directions
- Random fruit generation across the map
- Score and **highest score** tracking
- Game restart functionality

##  Future Features
- Increase game difficulty (snake speed) based on score
- Add different snake skins
- Implement game pause/resume

## Technical Details & Decisions
- HTML Canvas used to render the snake and fruits
- `localStorage` used to persist the highest score
- Modular architecture with separated responsibilities across JavaScript files
- Add sound effects

## File Structure
- index.html # Entry point
- style/style.css # Game styling
- script/script.js # Game loop and event listeners
- script/snake.js # Snake logic and rendering
- script/food.js # Food logic and rendering
- script/utils.js # Reusable helper functions

## Stack
- HTML
- CSS
- JavaScript

## External Resources
- Material Icons from Google  
  https://fonts.google.com/icons

## How to Run
1. Clone the repository
2. Open `index.html` in your browser
3. Enjoy the game 🎉

## Status
- This project is currently under development