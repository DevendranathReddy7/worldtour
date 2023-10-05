import { useParams } from "react-router-dom"
import { StyledContainer } from "../../StyledComponnets/Styles"

const ShowCity = () => {
    const { id } = useParams()

    return (
        <div>
            <StyledContainer>
                <p>City{id}</p>
            </StyledContainer>
        </div>
    )
}
export default ShowCity