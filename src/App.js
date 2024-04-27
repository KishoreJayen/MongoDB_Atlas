import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Read from './components/Read';
import Write from './components/Write';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path=  '/read' element={<Read/>} />
        <Route path=  '/write' element={<Write/>} />
        <Route path=  '/' element={<Write/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
