import { StyledLiCities } from "../../StyledComponnets/Styles"
import './Cities.css'
const data = [
    {
        "cityName": "Lisbon",
        "country": "Portugal",
        "emoji": "🇵🇹",
        "date": "2027-10-31T15:59:59.138Z",
        "notes": "My favorite city so far!",
        "position": {
            "lat": 38.727881642324164,
            "lng": -9.140900099907554
        },
        "id": 73930385
    },
    {
        "cityName": "Madrid",
        "country": "Spain",
        "emoji": "🇪🇸",
        "date": "2027-07-15T08:22:53.976Z",
        "notes": "",
        "position": {
            "lat": 40.46635901755316,
            "lng": -3.7133789062500004
        },
        "id": 17806751
    },
    {
        "cityName": "Berlin",
        "country": "Germany",
        "emoji": "🇩🇪",
        "date": "2027-02-12T09:24:11.863Z",
        "notes": "Amazing 😃",
        "position": {
            "lat": 52.53586782505711,
            "lng": 13.376933665713324
        },
        "id": 98443197
    }
]
const Cities = () => {
    return (
        <div>
            {data.map(city => <StyledLiCities>
                <div className="citiesList">
                    <p className="item">{city.emoji}</p>
                    <p className="item">{city.cityName}</p>
                </div>
                <div className="citiesList">
                    <p className="item">{city.date}</p>
                    <button className="item btn">&times;</button>
                </div>

            </StyledLiCities>)
            }
        </div>
    )
}
export default Cities