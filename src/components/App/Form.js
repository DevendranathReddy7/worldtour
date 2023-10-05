import { useNavigate } from "react-router-dom"
import { StyledContainer, StyledContentDiv, StyledLoginBtn } from "../../StyledComponnets/Styles"

const Form = () => {
    const navigate = useNavigate()
    return (
        <StyledContainer>
            <div>
                <label htmlFor="cityId">City Name:</label>
                <input id='cityId' />
            </div>
            <div>
                <label htmlFor="place">Where did you went to?</label>
                <input id='place' />
            </div>
            <div>
                <label htmlFor="note">share your exprience with us:</label>
                <input id='note' />
            </div>
            <StyledLoginBtn login>Add</StyledLoginBtn>
            <StyledLoginBtn onClick={() => navigate(-1)}>Back</StyledLoginBtn>
        </StyledContainer>
    )
}
export default Form