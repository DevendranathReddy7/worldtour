import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage"
import Products from "./components/Products"
import Pricing from "./components/Pricing"
import Login from "./components/Login"
import AppLayout from "./components/App/AppLayout"
import Cities from "./components/App/Cities"
import Countries from "./components/App/Countries"
import Map from "./components/App/Map"
import { useEffect, useState } from "react"
import ShowCity from "./components/App/ShowCity"

const App = () => {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('http://localhost:7733/cities')
        const data = await res.json()
        setCities(data)
      } catch {
        alert('no cities fetched')
      } finally {
        setIsLoading(false)
      }

    }
    fetchData()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Cities cityList={cities} status={isLoading} />} />
          <Route path="cities/:id" element={<ShowCity />} />
          <Route path="cities" element={<Cities cityList={cities} status={isLoading} />} />
          <Route path="countries" element={<Countries cityList={cities} status={isLoading} />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App