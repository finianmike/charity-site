import Landing from './Components/LandingPage/Landing'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Layout from './Components/LayoutPage/Layout'
import Impacts from './Components/Impacts/Impacts'
import Hero from './Components/HeroPage/Hero'
import Home from './Components/HomePage/Home'
import Register from './Components/RegisterPage/Register'
import Product from './Components/ProductCard/Product'
// import { Switch } from '@mui/material'


function App() {


  return (
    <>
{/* <Product /> */}

{/* <Register /> */}
{/* <Landing /> */}

   <Routes>
<Route path="/" element={<Landing />} />
<Route path="Register" element={<Register />} />
<Route path="/home" element={<Layout />} />
<Route path="/about" element={<Home />} />
<Route path="/contact" element={<Hero />} />
<Route path="/menu" element={<Impacts />} />
</Routes>

    </>
  )
}

export default App
