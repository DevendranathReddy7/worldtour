import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import Homepage from "./components/Homepage"
// import Products from "./components/Products"
// import Pricing from "./components/Pricing"
// import Login from "./components/Login"
//import AppLayout from "./components/App/AppLayout"
import Cities from "./components/App/Cities"
import Countries from "./components/App/Countries"
import Map from "./components/App/Map"
import ShowCity from "./components/App/ShowCity"
import Form from "./components/App/Form"
import { CityContextProvider } from "./Context/CityContext"
import { Suspense, lazy } from "react"

const Homepage = lazy(() => import("./components/Homepage"));
const Products = lazy(() => import('./components/Products'));
const Pricing = lazy(() => import("./components/Pricing"));
const Login = lazy(() => import('./components/Login'));
const AppLayout = lazy(() => import('./components/App/AppLayout'))

const App = () => {

  return (
    <CityContextProvider>

      <BrowserRouter>
        <Suspense fallback={<center><h2>Loading...</h2></center>}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/product' element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate to='cities' replace />} />
              <Route path="cities/:id" element={<ShowCity />} />
              <Route path="cities" element={<Cities />} />
              <Route path="countries" element={<Countries />} />
              <Route path="map" element={<Map />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CityContextProvider>
  )
}
export default App