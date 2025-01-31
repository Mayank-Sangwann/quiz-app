import React, { useState, useEffect } from 'react';
import { fetchQuizData } from './services/api';
import QuizStart from './components/Quizstart';
import Question from './components/Question';
import Results from './components/Results';
import { Container, ProgressBar} from './styles';

function App() {
  // Core state management
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('start');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load quiz data
  useEffect(() => {
    const loadQuizData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchQuizData();
        setQuizData(data);
        setError(null);
      } catch (error) {
        console.error('Error loading quiz:', error);
        setError('Failed to load quiz data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadQuizData();
  }, []);

  // Calculate progress percentage
  const progress = quizData 
    ? (currentQuestion / quizData.questions.length) * 100 
    : 0;

  // Handle starting new quiz
  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
  };

  // Handle answering questions
  const handleAnswer = (selectedOption) => {
    if (selectedOption.is_correct) {
      setScore((prev) => prev + 10);
    }
  };

  // Handle moving to next question
  const handleNext = () => {
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setGameState('results');
    }
  };

  if (isLoading) {
    return <Container><h2>Loading quiz...</h2></Container>;
  }

  if (error) {
    return (
      <Container>
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{quizData?.title || 'Quiz'}</h1>
      
      {gameState === 'start' && (
        <QuizStart 
          onStart={handleStart} 
          quizData={quizData}
        />
      )}

      {gameState === 'playing' && quizData?.questions && (
        <div>
          <ProgressBar progress={progress} />
          
          <Question
            question={quizData.questions[currentQuestion]}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
          
          <div className="question-info">
            <h3>Question {currentQuestion + 1} of {quizData.questions.length}</h3>
          </div>
        </div>
      )}

      {gameState === 'results' && (
        <Results
          score={score}
          totalQuestions={quizData.questions.length}
          onRestart={handleStart}
        />
      )}
    </Container>
  );
}

export default App;
