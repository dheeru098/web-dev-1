// Simple JavaScript Quiz Game - Paste this entire block into your browser console and press Enter!
function playQuiz() {
  const quiz = [
    { question: "Who is prime Minister of India ?", answer: "Mr.Narendra Modi" },
    { question: "What is the tallest building of the world ?", answer: "Burj Khalifa" },
    { question: "What is the largest ocean on Earth?", answer: "pacific" },
    { question: "Who invented bulb?", answer: "Thomas Elva Edison" },
    { question: "who made this assignment?", answer: "Dheeraj Kumar Yadav" }
  ];

  let score = 0;
  const totalQuestions = quiz.length;

  alert("Welcome to the Quiz Game! Answer the questions below. Good luck!");

  for (let i = 0; i < totalQuestions; i++) {
    const userAnswer = prompt(quiz[i].question);
    
    if (userAnswer === null) {
      alert("Quiz cancelled by user.");
      return; // Exit the game if user cancels
    }

    const cleanUserAnswer = userAnswer.toLowerCase().trim();
    const cleanCorrectAnswer = quiz[i].answer.toLowerCase().trim();

    if (cleanUserAnswer === cleanCorrectAnswer) {
      score++;
      alert("Correct! ✓");
    } else {
      alert(`Incorrect. The correct answer is: ${quiz[i].answer}`);
    }
  }

  const percentage = Math.round((score / totalQuestions) * 100);
  alert(`Quiz complete!\nYour score: ${score} / ${totalQuestions} (${percentage}%)`);
}

playQuiz();