
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import MyAcount from './components/MyAcount';
import MyPub from './components/MyPub';
import Users from './components/Users';
import HomePage from './components/HomePage';

function App() {

  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}>
            <Route index element={<HomePage />} />
            <Route  path="/users" element={<Users/>}  />
            <Route path="/blogs" element={<MyPub/>} />
            <Route path="/contact" element={<MyAcount />} />
            </Route>
        </Routes>
      </BrowserRouter> 
    </>
    
  )
}


export default App
