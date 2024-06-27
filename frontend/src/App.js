import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <>
     <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={'/sign'} element={<Signup/>}></Route>
      <Route element ={<PrivateRoutes />} >
        <Route path={'/blogs'} element={<Main child={<Blogs/>}/>}></Route>
        <Route path={'/add'} element={<Main child={<AddBlog/>}/>}></Route>
      </Route>
     </Routes>
     </>
  );
}

export default App;
