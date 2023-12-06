import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import User1 from './Pages/User1/User1';
import User2 from './Pages/User2/User2';
import Repo from './Pages/Repo/Repo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user1" element={<User1 />} />
        <Route path="/user2" element={<User2 />} />
        <Route path="/repo" element={<Repo />} />
      </Routes>
    </Router>
  );
}

export default App;
