import './App.css';
import StartPage from './StartPage';
import QuestionPage from './QuestionPage';
import PicturePage from './PicturePage';
import ResultPage from './ResultPage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/picture" element={<PicturePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
