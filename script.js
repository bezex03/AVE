// ----------- SOUND EFFECTS -----------
const clickSound = new Audio("data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAA...");
const correctSound = new Audio("data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAA...");
const wrongSound = new Audio("data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAA...");

// ----------- QUIZ DATA -----------
const quizData = [
  {
    question: "What is Ave Forge?",
    options: [
      "A medieval RPG world",
      "A cyberpunk coliseum with mech duels",
      "A space mining simulator",
      "A fantasy card battler"
    ],
    answer: 1
  },
  {
    question: "Who is building Ave Forge?",
    options: [
      "Random indie developers",
      "Forge Core Team + studio behind Graveyard Keeper & Punch Club",
      "Only blockchain interns",
      "A single solo dev"
    ],
    answer: 1
  },
  {
    question: "Why MegaETH?",
    options: [
      "Because it's the only blockchain",
      "Because of the unmatched builder support and positive vibes",
      "Because it's free",
      "Because it guarantees profit"
    ],
    answer: 1
  },
  {
    question: "Is Ave Forge only PvP?",
    options: [
      "Yes, only PvP battles",
      "No, it has both PvP and PvE modes",
      "Only PvE missions",
      "It has no combat modes"
    ],
    answer: 1
  },
  {
    question: "Will there be tournaments?",
    options: [
      "No tournaments are planned",
      "Yes, with seasonal rankings, cosmetics, and prize pools",
      "Only weekly quiz tournaments",
      "Only private tournaments"
    ],
    answer: 1
  },
  {
    question: "Is there a marketplace?",
    options: [
      "No marketplace at all",
      "Yes, a player-to-player economy with tradable equipment & cosmetics",
      "Only cosmetic trading",
      "Only dev-controlled shop"
    ],
    answer: 1
  },
  {
    question: "What’s the Genesis Collection?",
    options: [
      "A cosmetic-only bundle",
      "500 mechs granting early access & ecosystem rewards",
      "A PvE quest pass",
      "A random NFT drop"
    ],
    answer: 1
  },
  {
    question: "How do you stay safe?",
    options: [
      "Trust DMs from anyone",
      "Click all links instantly",
      "The team will never DM you first — always verify links",
      "Disable 2FA"
    ],
    answer: 2
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[index];
  questionEl.textContent = q.question;

  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, i);
    btn.onmouseenter = () => clickSound.play();
    optionsEl.appendChild(btn);
  });
}

function selectOption(btn, selectedIndex) {
  clickSound.play();

  const correctIndex = quizData[index].answer;
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(b => (b.disabled = true));

  if (selectedIndex === correctIndex) {
    btn.classList.add("correct");
    correctSound.play();
    score++;
  } else {
    btn.classList.add("wrong");
    wrongSound.play();
    buttons[correctIndex].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  nextBtn.style.display = "none";
  index++;

  if (index < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = "Game Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();
