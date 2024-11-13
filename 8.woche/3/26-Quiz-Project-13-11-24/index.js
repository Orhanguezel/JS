// Pseudo Code
/*
1. Importieren Readline und benutzen
2. Initialisierung
- Erstelle ein Question Object mit Fragen, [antworten moeglichkeiten], Das Index der Richtigen Antwort, Punkte.
3. Quiz starten
- Rufen eine Fuktion DisplayQuestion() auf, um erste Frage und Antwort moeglichkeiten anzuzeigen
4. Zeitberechnen
- setze timePerQuestion auf die Anzahl der Sekunden
- TotalTime wird berechnet als Fragen anzahl multipliziert mit TimePerQuestion
5. Ueberprufe Die Antwort :
- Wenn die Atwort richtig ist, score + Frage punke

6. Zur naechste Frage wechseln 
- Erhoehe den Index der Aktuelle Frage
- DisplayQuestion wieder aufrufen

7. Ergebnisse anzeigen
- Wie viel Punke gesammelt
- Welche ist falsch und richtig beantwortet
- Berechne wie lange mein Quiz hat gedaurt

8. CountDown-Timer
- Startet rueckwaerts 
- SetIntervel 


*/
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  class Question {
    constructor(question, options, correctAnswer, points) {
      this.question = question;
      this.options = options;
      this.correctIndex = correctAnswer;
      this.points = points;
    }
  
    display() {
      console.log(`\n${this.question} (${this.points} points)`);
      this.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
      });
    }
  
    checkAnswer(userAnswerIndex) {
      return userAnswerIndex === this.correctIndex;
    }
  }
  
  const questions = [
    new Question("What is the capital of Turkey?", ["Ankara", "Istanbul", "Izmir", "Bursa"], 0, 10),
    new Question("What is the capital of France?", ["Paris", "Lyon", "Marseille", "Nice"], 0, 10),
    new Question("What is the capital of Germany?", ["Berlin", "Hamburg", "Munich", "Cologne"], 0, 10),
    new Question("What is the capital of Italy?", ["Rome", "Milan", "Naples", "Turin"], 0, 10),
    new Question("What is the capital of Spain?", ["Madrid", "Barcelona", "Valencia", "Seville"], 0, 10),
  ];
  
  let userScore = 0;
  let currentQuestionIndex = 0;
  let userAnswers = [];
  const timePerQuestion = 10; // Her soru için 10 saniye sınırı
  let quizStartTime = Date.now();
  
  function startGame() {
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      question.display();
  
      // Geri sayımı başlat
      let remainingTime = timePerQuestion;
      const timerInterval = setInterval(() => {
        process.stdout.write(`\rTime remaining: ${remainingTime}s `);
        remainingTime--;
  
        if (remainingTime < 0) {
          clearInterval(timerInterval);
          console.log("\nTime's up! Moving to the next question.\n");
          userAnswers.push(null); // Yanıtlanmamış olarak kaydediyoruz
          currentQuestionIndex++;
          startGame(); // Bir sonraki soruya geçiş
        }
      }, 1000);
  
      readline.question("Enter the number of your answer: ", (answer) => {
        clearInterval(timerInterval); // Zamanlayıcıyı durdur
  
        const userAnswerIndex = parseInt(answer) - 1;
        userAnswers.push(userAnswerIndex);
  
        if (question.checkAnswer(userAnswerIndex)) {
          userScore += question.points;
          console.log("Correct Answer!\n");
        } else {
          console.log("Wrong Answer!\n");
        }
  
        currentQuestionIndex++;
        startGame(); // Bir sonraki soruya geçiş
      });
    } else {
      displayResults();
    }
  }
  
  function displayResults() {
    const totalTimeTaken = (Date.now() - quizStartTime) / 1000;
    console.log(`\nQuiz completed!`);
    console.log(`Your Score: ${userScore} points`);
  
    questions.forEach((question, index) => {
      const userAnswerIndex = userAnswers[index];
      const isCorrect = question.checkAnswer(userAnswerIndex);
      const resultText = isCorrect ? "Correct" : "Wrong";
      const userAnswerText = userAnswerIndex !== null ? question.options[userAnswerIndex] : "No answer";
      console.log(
        `${index + 1}. ${question.question} - Your Answer: ${userAnswerText} - Result: ${resultText} - Points: ${isCorrect ? question.points : 0}`
      );
    });
  
    console.log(`Total time taken: ${totalTimeTaken.toFixed(2)} seconds`);
    readline.close();
  }
  
  // Oyunu başlat
  console.log("Starting Quiz...\n");
  startGame();
  
  