import { Outlet } from 'react-router-dom'
import { StyledSideBar } from '../../StyledComponnets/Styles'
import Logo from '../Logo'
import AppNav from './AppNav'
const SideBar = () => {
    return (
        <StyledSideBar>
            <Logo />
            <AppNav />
            <Outlet />
        </StyledSideBar>
    )
}
export default SideBar