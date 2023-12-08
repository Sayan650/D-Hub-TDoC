
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import User1 from './Pages/User1/User1';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Repo from './Pages/Repo/Repo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user1" element={<User1 />} /> */}
        <Route path="/:profileName" element={<ProfilePage />} />
        <Route path="/repo" element={<Repo />} />
      </Routes>
    </Router>
  );
}

export default App;
