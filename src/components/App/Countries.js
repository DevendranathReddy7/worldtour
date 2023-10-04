import { StyledLiCountries } from "../../StyledComponnets/Styles"

const Countries = ({ cityList, status }) => {
    if (status) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>Loading...</h3>
    if (cityList.length === 0) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>No Countries Visted yet!</h3>

    const countries = cityList.reduce((arr, city) => {
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