import React, { useState } from 'react';
import { 
  QuestionCard, 
  OptionButton, 
  Button,
  QuestionHeader,
  OptionsContainer,
  FeedbackMessage 
} from '../styles';

const Question = ({ question, onAnswer, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
    onAnswer(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext();
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  return (
    <QuestionCard>
      <QuestionHeader>
        <h2>{question.description}</h2>
      </QuestionHeader>

      <OptionsContainer>
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            selected={selectedOption?.id === option.id}
            correct={showFeedback && option.is_correct}
            wrong={showFeedback && selectedOption?.id === option.id && !option.is_correct}
            onClick={() => !selectedOption && handleOptionSelect(option)}
            disabled={showFeedback}
          >
            {option.description}
          </OptionButton>
        ))}
      </OptionsContainer>

      {showFeedback && (
        <FeedbackMessage correct={selectedOption?.is_correct}>
          {selectedOption?.is_correct 
            ? '✅ Correct!' 
            : '❌ Incorrect! The correct answer was: ' + 
              question.options.find(opt => opt.is_correct).description
          }
        </FeedbackMessage>
      )}

      <Button 
        onClick={handleNext} 
        disabled={!selectedOption}
      >
        Next Question
      </Button>
    </QuestionCard>
  );
};

export default Question;