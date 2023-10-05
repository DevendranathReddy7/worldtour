import { useNavigate, useSearchParams } from "react-router-dom"
import { StyledSideBar } from "../../StyledComponnets/Styles"

const Map = () => {

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('form')}>
            <StyledSideBar>
                <p>Map</p>
            </StyledSideBar>
        </div>

    )
}
export default Map