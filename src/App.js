
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Outer from './pages/Outer';
import Top from './pages/Top';
import Bottom from './pages/Bottom';
import Acc from './pages/Acc';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import MainPage from './components/MainPage';

function App() {
  return (
  <><Header />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/outer" element={<Outer />} />
          <Route path="/top" element={<Top />} />
          <Route path="bottom" element={<Bottom />} />
          <Route path="/acc" element={<Acc />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MainPage/>
        </>
        

  );
}

export default App;
