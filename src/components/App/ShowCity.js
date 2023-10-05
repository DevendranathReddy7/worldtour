import { useParams } from "react-router-dom"
import { StyledContainer } from "../../StyledComponnets/Styles"

const ShowCity = () => {
    const { id, lat, lng } = useParams()

    return (
        <div>
            <StyledContainer>
                <p>City{id}</p>
                <p>{lat}</p>
            </StyledContainer>
        </div>
    )
}
export default ShowCity