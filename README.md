# rock-paper-scissors

## Description
A simple rock-paper-scissors game using javascript and the console. This is the first javascript project from [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

## Functions

### getComputerChoice()
The first function is to get the computer's choice using Math.floor passing Math.random() * 3 to get a number between 0 and 2. Then using if-else logic, the computer gets one of three choices for rock-paper-scissors.
Zero being rock, 1 being paper, and 2 being scissors.

### getHumanChoice()
This function prompts the human player to choose rock, paper, or scissors. There is a check to ensure that a valid choice is selected.

### playRound()
Checks the human and computer choices and decides who is the winner and adds a point.

### playGame()
Uses a for loop to iterate the game loop 5 times. Each iteration the human and computer makes their choice. After all 5 rounds have been completed, the game decides who is the winner.
