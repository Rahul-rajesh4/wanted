
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Additem from './Additem';
import Display from './Display';
import Login from './Login';
import Register from './Register';
import Users from './Users';
import Profile from './Profile';
import Edit from './Edit';
import View from './View';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/add' element={<Additem />} />
          <Route path='/dis' element={<Display />} />
          <Route path='/' element={<Login />} />
          <Route path='/reg' element={<Register />} />
          <Route path='/user' element={<Users />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Edit/:id' element={<Edit />} />
          <Route path='/view' element={<View />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
