
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Outer from './pages/Racket';
import Top from './pages/Outfit';
import Bottom from './pages/Shoes';
import Acc from './pages/Acc';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import MainPage from './components/Main/MainPage';
import Racket from './pages/Racket';
import Outfit from './pages/Outfit';
import Shoes from './pages/Shoes';

function App() {
  return (
  <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/racket" element={<Racket />} />
          <Route path="/outfit" element={<Outfit />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/acc" element={<Acc />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </>
        

  );
}

export default App;
