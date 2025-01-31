import React from 'react';
import { 
  StartContainer, 
  QuizInfo,
  StartButton,
  InfoCard 
} from '../styles';

const QuizStart = ({ onStart, quizData }) => {
  return (
    <StartContainer>
      <h2>{quizData.title}</h2>
      
      <QuizInfo>
        <InfoCard>
          <h3>Quiz Overview</h3>
          {quizData.description && <p>{quizData.description}</p>}
          <ul>
            <li>Total Questions: {quizData.questions.length}</li>
            <li>Topic: {quizData.topic}</li>
            <li>Duration: {quizData.duration} minutes</li>
            <li>Points per Question: 10</li>
            <li>Bonus Points Available: Yes</li>
          </ul>
        </InfoCard>

        <InfoCard>
          <h3>Rules</h3>
          <ul>
            <li>Answer quickly for time bonuses</li>
            <li>Get streak bonuses for consecutive correct answers</li>
            <li>No going back to previous questions</li>
            <li>Score 70% or higher to pass</li>
          </ul>
        </InfoCard>

      </QuizInfo>

      <StartButton onClick={onStart}>
        Start Quiz
      </StartButton>
    </StartContainer>
  );
};

export default QuizStart;