import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="mt-6 text-lg">Your Score: {score} out of {total}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
