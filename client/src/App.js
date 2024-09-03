import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Router , Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/regiter-user' element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
