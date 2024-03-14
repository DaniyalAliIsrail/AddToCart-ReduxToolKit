import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Mycart from './components/Mycart'
import TotalCartPage from './components/TotalCartPage'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route path="/" element={<Mycart />} />
      <Route path="/Addcart" element={<TotalCartPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
