import './App.css';
import {
  BrowserRouter as Router,
  // Routes, 
  // Route
} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      {/* <Routes>
        <Route path='/React-portfolio' element={<Home />} />
        <Route path='contact' element={<Contact />} />
      </Routes> */}
    </Router>
  );
}

export default App;
