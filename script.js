const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const width = 20;
let squares = [];
let currentPacmanIndex = 210; // Starting position for Pac-Man
let score = 0;
let direction = 1; // 1: right, -1: left, width: down, -width: up
let ghosts = [
    { position: 228, direction: 1 },
    { position: 229, direction: -1 },
    { position: 230, direction: width },
    { position: 231, direction: -width }
];
let gameInterval;

// Audio context and oscillator setup
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to generate 8-bit sound
function playSound(frequency, duration, waveType = 'square') {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = waveType;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);

    // Fade out the sound to avoid popping
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

// Play sound when Pac-Man eats a dot
function playDotSound() {
    playSound(523.25, 0.1, 'square'); // C5 note for eating dots
}

// Play sound when the game is over
function playGameOverSound() {
    playSound(220, 0.5, 'sine'); // A3 note for game over
}

// Create the grid
function createGrid() {
    for (let i = 0; i < width * width; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (i === currentPacmanIndex) {
            cell.classList.add('pacman');
        } else if (ghosts.some(ghost => ghost.position === i)) {
            cell.classList.add('ghost');
        } else if (i % 2 === 0 && i % 3 !== 0) {
            cell.classList.add('dot');
        }
        grid.appendChild(cell);
        squares.push(cell);
    }
}

// Move Pac-Man
function movePacman() {
    squares[currentPacmanIndex].classList.remove('pacman');
    currentPacmanIndex += direction;

    // Wrap around the grid
    if (currentPacmanIndex % width === 0 && direction === 1) {
        currentPacmanIndex -= width;
    } else if ((currentPacmanIndex + 1) % width === 0 && direction === -1) {
        currentPacmanIndex += width;
    }

    // Check for dots
    if (squares[currentPacmanIndex].classList.contains('dot')) {
        squares[currentPacmanIndex].classList.remove('dot');
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        playDotSound(); // Play sound when eating a dot
    }

    // Check for collision with ghosts
    if (squares[currentPacmanIndex].classList.contains('ghost')) {
        playGameOverSound(); // Play sound when game over
        gameOver();
    }

    squares[currentPacmanIndex].classList.add('pacman');
}

// Move ghosts
function moveGhosts() {
    ghosts.forEach(ghost => {
        squares[ghost.position].classList.remove('ghost');
        ghost.position += ghost.direction;

        // Wrap around the grid
        if (ghost.position % width === 0 && ghost.direction === 1) {
            ghost.position -= width;
        } else if ((ghost.position + 1) % width === 0 && ghost.direction === -1) {
            ghost.position += width;
        }

        squares[ghost.position].classList.add('ghost');
    });
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
        case 'd':
            direction = 1;
            break;
        case 'ArrowLeft':
        case 'a':
            direction = -1;
            break;
        case 'ArrowDown':
        case 's':
            direction = width;
            break;
        case 'ArrowUp':
        case 'w':
            direction = -width;
            break;
    }
});

// Game Over function
function gameOver() {
    clearInterval(gameInterval);
    Swal.fire({
        title: 'Game Over!',
        text: `Your final score is ${score}.`,
        icon: 'error',
        confirmButtonText: 'Restart',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            restartGame();
        }
    });
}

// Restart game function
function restartGame() {
    grid.innerHTML = '';
    squares = [];
    currentPacmanIndex = 210;
    score = 0;
    direction = 1;
    ghosts = [
        { position: 228, direction: 1 },
        { position: 229, direction: -1 },
        { position: 230, direction: width },
        { position: 231, direction: -width }
    ];
    scoreDisplay.textContent = `Score: ${score}`;
    createGrid();
    gameInterval = setInterval(() => {
        movePacman();
        moveGhosts();
    }, 200);
}

// Show controls on start
Swal.fire({
    title: 'Welcome to Pac-Man!',
    html: `
        <p>Use the following controls to move Pac-Man:</p>
        <ul>
            <li><strong>Arrow Keys</strong> or <strong>WASD</strong> to move</li>
            <li><strong>The game will sometimes let you faze through enemies and other time it won't</strong></li>
            <li><strong>I guess pick your poison!/strong></li>
            
        </ul>
    `,
    icon: 'info',
    confirmButtonText: 'Start Game',
    allowOutsideClick: false
}).then(() => {
    createGrid();
    gameInterval = setInterval(() => {
        movePacman();
        moveGhosts();
    }, 200);
});