import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/NavBar/Navbar";
import PropertyList from './Component/PropertyList/PropertyList';
import SingleProperty from "./Component/SingleProperty/SingleProperty";
import Home from "./Component/HomePage/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/PropertyList" element={<PropertyList/>}/>
        <Route path="/PropertyList/:id" element={<SingleProperty/>}/>
      </Routes>
      <ToastContainer/>
  </>
}