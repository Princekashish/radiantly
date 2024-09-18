import React, { useState } from 'react';

const Question = ({ question, options, onAnswerClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);  // Set the selected option
    onAnswerClick(option);      // Trigger the answer selection
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-black">{question}</h2>
      <div className="flex flex-col space-y-4">
        {options.map((option, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition ${
              selectedOption === option 
                ? 'bg-green-100 ring-2 ring-green-500 text-green-700' // Highlight selected option
                : 'bg-gray-100 hover:bg-gray-200' // Unselected options
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {/* Radio button style */}
            <span className={`w-6 h-6 border-2 rounded-full flex justify-center items-center transition ${
              selectedOption === option 
                ? 'border-green-500' 
                : 'border-blue-500'
            }`}>
              {/* Conditionally show green dot if the option is selected */}
              {selectedOption === option && (
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              )}
            </span>
            <p className={`text-lg ${selectedOption === option ? 'text-green-700' : 'text-black'}`}>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
