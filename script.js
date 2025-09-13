// Quiz Data
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python"],
    answer: "CSS"
  },
  {
    question: "Which language is used for web apps?",
    options: ["PHP", "Python", "JavaScript"],
    answer: "JavaScript"
  }
];

// Load Quiz
const quizContainer = document.getElementById("quizContainer");
quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${index+1}. ${q.question}</p>` + 
    q.options.map(opt => `<label><input type='radio' name='q${index}' value='${opt}'> ${opt}</label><br>`).join("");
  quizContainer.appendChild(div);
});

// Quiz Submit
document.getElementById("submitQuiz").addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const answer = document.querySelector(`input[name='q${index}']:checked`);
    if (answer && answer.value === q.answer) {
      score++;
    }
  });
  document.getElementById("quizResult").innerText = `You scored ${score}/${quizData.length}`;
});

// Carousel
let currentImage = 1;
function nextImage() {
  currentImage++;
  document.getElementById("carouselImage").src = `https://picsum.photos/400/200?random=${currentImage}`;
}
function prevImage() {
  currentImage--;
  if (currentImage < 1) currentImage = 1;
  document.getElementById("carouselImage").src = `https://picsum.photos/400/200?random=${currentImage}`;
}

// Fetch API (Random Joke)
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke").innerText = "Failed to load joke.";
    });
}