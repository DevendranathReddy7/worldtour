import { StyledLiCities } from "../../StyledComponnets/Styles"
import './Cities.css'
const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date))

const Cities = ({ cityList, status }) => {
    if (status) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>Loading...</h3>
    if (cityList.length === 0) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>No Cities Visted yet!</h3>
    return (
        <div>
            {cityList.map(city => <StyledLiCities key={city.id}>
                <div className="citiesList">
                    <p className="item">{city.emoji}</p>
                    <p className="item">{city.cityName}</p>
                </div>
                <div className="citiesList">
                    <p className="item">{formatDate(city.date)}</p>
                    <button className="item btn">&times;</button>
                </div>

            </StyledLiCities>)
            }
        </div>
    )
}
export default Cities