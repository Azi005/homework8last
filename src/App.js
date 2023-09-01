import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
      

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <nav>
        <ul className="pages" style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
          <li style={{margin: '20px'}}>
            <Link to="/"><p style={{color: 'black'}}>Yamaha</p></Link>
          </li>
          <li style={{margin: '20px'}}>
            <Link to="/about"><p style={{color: 'black'}}>Kawasaki</p></Link>
          </li>
          <li style={{margin: '20px'}}>
            <Link to="/dashboard"><p style={{color: 'black'}}>Suzuki</p></Link>
          </li>

        </ul>
      </nav>
      <hr></hr>
      <Outlet/>
    </div>
  )
}


