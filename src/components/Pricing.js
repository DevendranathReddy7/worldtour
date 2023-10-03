import { StyledContentDiv, StyledDivContainer, StyledImg } from '../StyledComponnets/Styles'
import img1 from '../assests/img-2.jpg'
import Navbar from './Navbar'
const Pricing = () => {
    return (
        <>
            <Navbar />
            <StyledDivContainer>
                <StyledContentDiv>
                    <h2>
                        Simple pricing.
                        <br />
                        Just $9/month.
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
                        labore mollitia iusto. Recusandae quos provident, laboriosam fugit
                        voluptatem iste.
                    </p>
                </StyledContentDiv>
                <StyledImg src={img1} alt='pricing' className='image' />

            </StyledDivContainer>
        </>
    )
}
export default Pricing