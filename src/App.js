import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage"
import Products from "./components/Products"
import Pricing from "./components/Pricing"
import Login from "./components/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App