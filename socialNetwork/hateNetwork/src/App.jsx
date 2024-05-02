
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import MyAcount from './components/MyAcount';
import MyPub from './components/MyPub';
import Users from './components/Users';

function App() {

  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
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
