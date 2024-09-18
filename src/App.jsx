import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: "Paris"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correct: "William Shakespeare"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Jupiter"
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      {!showResult ? (
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg ">
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswerClick={handleAnswerClick}
          />
        </div>
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
};

export default App;
