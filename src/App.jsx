import React from "react";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MyProjects } from "./pages/MyProjects";

import { Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
    return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/my-projects" element={<MyProjects/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
    )
}

export default App;