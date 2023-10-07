import { createContext, useContext, useEffect, useState } from "react"
const CityContext = createContext()

const CityContextProvider = ({ children }) => {

    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})

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
    const getCity = async (id) => {

        try {
            setIsLoading(true)
            const res = await fetch(`http://localhost:7733/cities/${id}`)
            const data = await res.json()
            setCurrentCity(data)
        } catch {
            alert('no cities fetched')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <CityContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
            {children}
        </CityContext.Provider>
    )
}
const useCities = () => {
    const context = useContext(CityContext)
    if (context === undefined) throw new Error('context is used outside the cities provider')
    return context
}
export { CityContextProvider, useCities }