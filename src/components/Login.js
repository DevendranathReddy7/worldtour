import { StyledLoginBtn, StyledLoginDiv } from "../StyledComponnets/Styles"
import Navbar from "./Navbar"

const Login = () => {
    return (
        <>
            <Navbar />
            <StyledLoginDiv>
                <form>
                    <h4 id='email'>Email:</h4>
                    <input type="email" htmlFor='email' />
                    <h4 id='pswd'>Password:</h4>
                    <input type="password" htmlFor='pswd' />
                    <StyledLoginBtn login>Login</StyledLoginBtn>
                </form>
            </StyledLoginDiv>
        </>
    )
}
export default Login