import { NavLink } from 'react-router-dom'
import logo from '../assests/logo.png'
import './Navbar.css'
import { StyledLoginBtn, StyledNavDiv } from '../StyledComponnets/Styles'
const Navbar = () => {
    return (
        <StyledNavDiv>
            <div>
                <NavLink to='/'><img src={logo} alt='logo' className='logo'></img></NavLink>

            </div>
            <div >
                <StyledLoginBtn><NavLink to='/product' className='link'>Products</NavLink></StyledLoginBtn>
                <StyledLoginBtn><NavLink to='/pricing' className='link'>Pricing</NavLink></StyledLoginBtn>
                <StyledLoginBtn login><NavLink to='/login' className='link '>Login</NavLink></StyledLoginBtn>

            </div>
        </StyledNavDiv>
    )
}
export default Navbar