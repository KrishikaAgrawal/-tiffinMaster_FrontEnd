import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
      </Routes>
    </Router>
  );
}

export default App;
