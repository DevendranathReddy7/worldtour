import { Outlet } from 'react-router-dom'
import { StyledSideBar } from '../../StyledComponnets/Styles'
import Logo from '../Logo'
import AppNav from './AppNav'
const SideBar = () => {
    return (
        <StyledSideBar sidebar>
            <Logo />
            <AppNav />
            <Outlet />
        </StyledSideBar>
    )
}
export default SideBar