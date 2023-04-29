
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import UserList from './Components/UserList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
       <Route path= '/user' element={<UserList/>} />
       <Route path ='/profile/:id' element={<Profile/>}/>
      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
