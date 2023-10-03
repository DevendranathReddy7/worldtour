import { NavLink } from 'react-router-dom'
import { StyledLoginBtn, StyledNavDiv } from '../StyledComponnets/Styles'
import Logo from './Logo'

const Navbar = () => {
    return (
        <StyledNavDiv>
            <Logo />
            <div >
                <StyledLoginBtn><NavLink to='/product' style={{ textDecoration: "none", color: "black" }}>Products</NavLink></StyledLoginBtn>
                <StyledLoginBtn><NavLink to='/pricing' style={{ textDecoration: "none", color: "black" }}>Pricing</NavLink></StyledLoginBtn>
                <StyledLoginBtn login><NavLink to='/login' style={{ textDecoration: "none", color: "black" }}>Login</NavLink></StyledLoginBtn>

            </div>
        </StyledNavDiv>
    )
}
export default Navbar