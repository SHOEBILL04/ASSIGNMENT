import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthorPage from './pages/AuthorPage';
import './styles.css';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/author/:id" element={<AuthorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
