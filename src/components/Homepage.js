import Navbar from "./Navbar"
import './Homepage.css'
import { StyledLoginBtn } from "../StyledComponnets/Styles"
import { NavLink } from "react-router-dom"
const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <section>
                <h1 className="heading">
                    You travel the world.
                    <br />
                    We keeps track of your adventures.
                </h1>
                <h2 className="sub-heading">
                    A world map that tracks your footsteps into every city you can think
                    of. Never forget your wonderful experiences, and show your friends how
                    you have wandered the world.
                </h2>
                <NavLink to='/app'><StyledLoginBtn login track><strong>START TRACKING NOW!</strong></StyledLoginBtn></NavLink>
            </section>
        </div>
    )
}
export default Homepage