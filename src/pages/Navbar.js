import { Link, NavLink, Route, Routes } from 'react-router-dom'
import styles from './Navbar.module.css'

import Logo from './Logo'
const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div>
                <Logo />
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/Product" >Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Pricing">Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login" className={styles.CtaLink}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar