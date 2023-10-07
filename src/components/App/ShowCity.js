import { useNavigate, useParams } from "react-router-dom"
import { StyledContainer, StyledLoginBtn } from "../../StyledComponnets/Styles"
import { useCities } from "../../Context/CityContext"
import { useEffect } from "react"
const formatDate = (date) =>
    new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date))
const ShowCity = () => {
    const { id } = useParams()
    const { getCity, currentCity, isLoading } = useCities()
    const navigate = useNavigate()
    useEffect(() => {
        getCity(id)
    }, [id])
    const { cityName, date, notes } = currentCity
    if (isLoading) return <h3 style={{ color: "white", marginLeft: '13rem', fontSize: '20px' }}>Loading...</h3>
    return (
        <div>
            <StyledContainer>
                <h3 htmlFor="cityName">City Name:</h3>
                <h1 id="cityName">{cityName}</h1>
                <h3 htmlFor="date">Date when you visted:</h3>
                <h1 id='date'>{formatDate(date)}</h1>
                <h3 htmlFor="notes">Your Experience:</h3>
                <h1 id='notes'>{notes}</h1>
                <StyledLoginBtn onClick={() => navigate(-1)} > Back</StyledLoginBtn>
            </StyledContainer>
        </div >
    )
}
export default ShowCity