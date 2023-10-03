import { NavLink } from 'react-router-dom'
import logo from '../assests/logo.png'
import { StyledLogo } from '../StyledComponnets/Styles'
const Logo = () => {
    return (
        <div>
            <NavLink to='/'><StyledLogo src={logo} alt='logo' ></StyledLogo></NavLink>
        </div>
    )
}
export default Logo