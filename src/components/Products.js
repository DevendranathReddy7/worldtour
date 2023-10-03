import { StyledContentDiv, StyledDivContainer, StyledImg } from '../StyledComponnets/Styles'
import img1 from '../assests/img-1.jpg'
import Navbar from './Navbar'
const Products = () => {
    return (
        <>
            <Navbar />
            <StyledDivContainer>

                <StyledImg src={img1} />

                <StyledContentDiv>
                    <h2>About WorldWide.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
                        dicta illum vero culpa cum quaerat architecto sapiente eius non
                        soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
                        perspiciatis?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
                        doloribus libero sunt expedita ratione iusto, magni, id sapiente
                        sequi officiis et.
                    </p>
                </StyledContentDiv>
            </StyledDivContainer>
        </>
    )
}
export default Products