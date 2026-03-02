let currentCorrectWord = "";
let finalScore = 0;
const words = [
    "apple", "mango", "tiger", "chair", "table", "bread", "water", "phone", "plant", "river",
    "light", "smile", "green", "sweet", "clock", "brush", "train", "beach", "stone", "bread",
    "mouse", "shirt", "glass", "queen", "horse",
    "orange", "laptop", "garden", "bottle", "window", "pencil", "market", "doctor", "engine", "school",
    "forest", "silver", "flower", "basket", "rocket", "island", "monkey", "camera", "carpet", "dinner",
    "energy", "travel", "future", "office", "desert", "circle", "bridge", "screen", "signal", "tunnel",
    "castle", "driver", "planet", "jungle", "shadow",
    "computer", "javascript", "internet", "algorithm", "database", "software", "hardware", "developer", "keyboard", "function",
    "variable", "compiler", "network", "security", "artificial", "intelligence", "technology", "programming", "interface", "encryption",
    "framework", "simulation", "processor", "application", "responsive", "optimization", "automation", "innovation", "engineering", "architecture",
    "synchronize", "accessibility", "performance", "visualization", "interaction", "computation", "authentication", "configuration", "implementation", "transformation"
];

function startGame() {
    currentIndex = 0;
    shuffleArray(words);

    nextRound();
}


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}





function chooseWord() {

    if (currentIndex >= words.length) {
        alert("✅ GAME OVER - All words completed");
        return null;
    }

    let word = words[currentIndex];
    currentIndex++;

    return word;
}


function randomIndex(length) {

    let mySet = new Set();

    while (mySet.size !== length) {
        let index = Math.floor(Math.random() * length);
        mySet.add(index);
    }

    return [...mySet];
}



function shuffle(word) {

    let newWord = "";
    let arr = randomIndex(word.length);

    for (let i = 0; i < arr.length; i++) {
        newWord += word[arr[i]];
    }

    if (newWord === word) {
        return shuffle(word);
    }

    return newWord;
}


function nextRound() {

    let originalWord = chooseWord();

    if (originalWord === null) {
        document.querySelector(".scrambledWord")
            .innerText = "Game Over";
        return;
    }

    currentCorrectWord = originalWord;

    let scrambledWord = shuffle(originalWord);

    document.querySelector(".scrambledWord")
        .innerText = scrambledWord;

    document.querySelector(".result").innerText = "";

    document.querySelector("#input").value = "";
}


function checkAnswer() {

    let inputBox = document.querySelector("#input");
    let userGuess = inputBox.value;

    if (
        userGuess.toLowerCase() ===
        currentCorrectWord.toLowerCase()
    ) {
        document.querySelector(".result")
            .innerText = "✅ Correct!";
        finalScore += 10;
        document.querySelector(".score").innerText = finalScore;
        inputBox.value = "";
        setTimeout(() => {
            nextRound();
        }, 1000);
    }
    else {
        document.querySelector(".result")
            .innerText = "❌ Try Again!";
    }
}

document.querySelector("#input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
