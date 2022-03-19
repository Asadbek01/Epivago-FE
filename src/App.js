import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login';
import SignUp from './Components/SignUp.js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from "react-router"
import Home from './Components/Home';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/signUp" element={<SignUp />} />
  
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
