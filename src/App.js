import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import PageNav from './components/PageNav';

function App() {
  return (
    <div className="App relative">
      <BrowserRouter>
      
      <Routes>
      <Route  path="*"  element={<Navigate to="/First-Page" /> }/>
        <Route path="/First-Page" element={<FirstPage />} />
        <Route path="/Second-Page" element={<SecondPage />} />
        <Route path="/Third-Page" element={<ThirdPage />} />
      </Routes>
      <PageNav />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
