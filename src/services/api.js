// api.js
export const fetchQuizData = async () => {
  try {
    console.log('Fetching quiz data...');
    const response = await fetch('https://api.allorigins.win/raw?url=' +
      encodeURIComponent('https://api.jsonserve.com/Uw5CrX')
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Data validation
    if (!data || !data.questions || !Array.isArray(data.questions)) {
      throw new Error('Invalid quiz data format');
    }

    // Process and normalize data
    return {
      ...data,
      questions: data.questions.map((q, index) => ({
        ...q,
        id: q.id || index + 1,
        timeLimit: q.timeLimit || 30, // Default time limit per question
        points: q.points || 10 // Default points per question
      }))
    };

  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw error;
  }
};