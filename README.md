# Quiz Application 🎯  

A web-based quiz app focusing on **Genetics and Evolution**, delivering an interactive learning experience with real-time scoring and feedback.

## 🔥 Features  
✅ Dynamic quiz content from API  
✅ Interactive multiple-choice questions  
✅ Real-time score tracking & feedback  
✅ Responsive UI & smooth user experience  
✅ Progress tracking & topic-based questions  

## 🛠️ Technical Implementation  

### 🔗 API Integration  
The app fetches quiz data using a **CORS proxy**:  

```javascript
const fetchQuizData = async () => {
  try {
    const response = await fetch('https://api.allorigins.win/raw?url=' + 
      encodeURIComponent('https://api.jsonserve.com/Uw5CrX')
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw error;
  }
};
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository
bash
git clone [your-repository-link]
2. Navigate to project directory
bash
cd quiz-app
3. Install dependencies
bash
npm install
4. Start development server
bash
npm start
5. Open http://localhost:3000 in your browser

## Screenshots
<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/42b3bbe3-3bfd-4995-814e-b7e77de46293" />

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/a567fb56-c8d5-44bb-b52d-37e969826d92" />

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/cd996bf4-609a-405c-a2a3-65afac67e3f7" />

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/7c3be131-7304-447e-99ba-4cbb1562669f" />

## Video Walkthrough
https://github.com/user-attachments/assets/1f6646de-66eb-43fb-a670-b7387eb6a3e1