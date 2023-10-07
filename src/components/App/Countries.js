import { useCities } from "../../Context/CityContext"
import { StyledLiCountries } from "../../StyledComponnets/Styles"

const Countries = () => {
    const { cities, isLoading } = useCities()

    if (isLoading) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>Loading...</h3>
    if (cities.length === 0) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>No Countries Visted yet!</h3>

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji }]
        else return arr
    }, [])
    return (
        <div>
            {countries.map(contry => <StyledLiCountries key={Math.random()}>
                <h3>{contry.country}</h3>
            </StyledLiCountries>)}
        </div>
    )
}
export default Countries