import { NavLink } from "react-router-dom"
import { StyledLoginBtn } from "../../StyledComponnets/Styles"

const AppNav = () => {
    return (
        <div style={{ margin: '10px 20px 30px 30px' }}>
            <div style={{ margin: '30px 20px 30px 10rem' }}>
                <StyledLoginBtn><NavLink to='/cities' style={{ textDecoration: "none", color: "black" }}>Cities</NavLink></StyledLoginBtn>
                <StyledLoginBtn><NavLink to="/counties" style={{ textDecoration: "none", color: "black" }}>Countries</NavLink></StyledLoginBtn>
            </div>
        </div>
    )
}
export default AppNav