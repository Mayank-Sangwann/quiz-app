import React from 'react';
import { 
  ResultsContainer, 
  ScoreCard, 
  Button,
  ProgressChart,
  ShareButton 
} from '../styles';

const Results = ({ 
  score, 
  totalQuestions, 
  onRestart
}) => {
  const percentage = Math.round((score / (totalQuestions * 10)) * 100);
  const totalScore = score;

  const shareResults = () => {
    const text = `I scored ${totalScore} points (${percentage}%) on the quiz!`;
    
    navigator.clipboard.writeText(text)
      .then(() => alert('Results copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  };
  

  return (
    <ResultsContainer>
      <h2>Quiz Complete! 🎉</h2>

      <ScoreCard>
        <ProgressChart percentage={percentage} />
        
        <div className="score-details">
          <h3>Final Score: {totalScore}</h3>
          <p>Base Score: {score}</p>
          <p>Questions: {totalQuestions}</p>
          <p>Accuracy: {percentage}%</p>
        </div>

        <div className="achievement">
          {percentage >= 90 ? '🏆 Outstanding!' : 
           percentage >= 70 ? '🌟 Well Done!' : 
           '📚 Keep Practicing!'}
        </div>

        </ScoreCard>

      <div className="action-buttons">
        <Button onClick={onRestart}>Try Again</Button>
        <ShareButton onClick={shareResults}>
          Share Results
        </ShareButton>
      </div>
    </ResultsContainer>
  );
};

export default Results;