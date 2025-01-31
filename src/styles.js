import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Container styles
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
  animation: ${fadeIn} 0.5s ease-in;

  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

// Quiz Start styles
export const StartContainer = styled.div`
  animation: ${slideIn} 0.5s ease-out;
`;

export const QuizInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

export const InfoCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Question styles
export const QuestionCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  animation: ${slideIn} 0.3s ease-out;
`;

export const OptionButton = styled.button`
  width: 100%;
  padding: 15px;
  margin: 8px 0;
  border: 2px solid ${props => 
    props.correct ? '#4caf50' :
    props.wrong ? '#f44336' :
    props.selected ? '#3498db' : '#ddd'};
  border-radius: 8px;
  background-color: ${props => 
    props.correct ? '#e8f5e9' :
    props.wrong ? '#ffebee' :
    props.selected ? '#e3f2fd' : 'white'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.disabled ? null : '#f5f5f5'};
    transform: ${props => props.disabled ? null : 'translateY(-2px)'};
  }
`;

// Results styles
export const ResultsContainer = styled.div`
  text-align: center;
  animation: ${slideIn} 0.5s ease-out;
`;

export const ScoreCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

// Buttons
export const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ShareButton = styled(Button)`
  background-color: #2ecc71;
  margin-left: 10px;

  &:hover {
    background-color: #27ae60;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 20px 0;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: #3498db;
    transition: width 0.3s ease;
  }
`;

// Question Header
export const QuestionHeader = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 15px;
    color: #2c3e50;
    font-size: 1.4rem;
  }
`;

// Options Container
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

// Feedback Message
export const FeedbackMessage = styled.div`
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  background-color: ${props => props.correct ? '#e8f5e9' : '#ffebee'};
  color: ${props => props.correct ? '#2e7d32' : '#c62828'};
  font-weight: 500;
  text-align: center;
`;

// Start Button
export const StartButton = styled(Button)`
  width: 200px;
  margin: 20px auto;
  display: block;
  font-size: 1.2rem;
  padding: 15px 30px;
`;

// Progress Chart
export const ProgressChart = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    #3498db ${props => props.percentage}%, 
    #ecf0f1 ${props => props.percentage}% 100%
  );
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '${props => props.percentage}%';
    position: absolute;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
  }
`;