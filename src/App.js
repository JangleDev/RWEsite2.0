import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Projects from './pages/Projects';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/team" exact element={<Team/>} />
          <Route path="/projects" exact element={<Projects/>} />
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/donate" exact element={<Donate/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
