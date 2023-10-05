import { Link, useSearchParams } from "react-router-dom"
import { StyledLiCities } from "../../StyledComponnets/Styles"
import './Cities.css'
const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date))

const Cities = ({ cityList, status }) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')

    if (status) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>Loading...</h3>
    if (cityList.length === 0) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>No Cities Visted yet!</h3>
    return (
        <div>
            {cityList.map(city => <Link style={{ color: 'black', 'textDecoration': 'none' }} to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}><StyledLiCities key={city.id}>

                <div className="citiesList">
                    <p className="item">{city.emoji}</p>
                    <p className="item">{city.cityName}</p>
                </div>
                <div className="citiesList">
                    <p className="item">{formatDate(city.date)}</p>
                    <button className="item btn">&times;</button>
                </div>


            </StyledLiCities></Link>)
            }
        </div>
    )
}
export default Cities