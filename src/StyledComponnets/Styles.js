import styled from "styled-components";

export const StyledDivContainer = styled.div`
margin:15rem 20rem 5rem 20rem;
display:flex;
align-items:center;
`
export const StyledImg = styled.img`
height:35rem
`

export const StyledContentDiv = styled.div`
color:black;
padding:15px;
font-size:20px
`
export const StyledNavDiv = styled.div`
display: flex;
padding: ${props => props.pages ? '' : '10px'};
padding: ${props => props.pages ? '30px 10px 10px 10px' : ''};
justify-content: space-between;
align-items: center;
`
export const StyledLoginDiv = styled.div`
display:flex;
justify-content:space-around;
color:black;
margin:15rem 45rem 20rem 45rem;
border:solid;
padding:10px;
border-radius:6px

`
export const StyledLoginBtn = styled.button`
background-color: ${props => props.login ? 'rgb(90, 236, 146)' : ''};
border-style: solid;
border-radius:3px;
color: black;
text-decoration: none;
margin: 6px;
padding: 5px;

`