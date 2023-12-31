import styled from "styled-components";

export const StyledDivContainer = styled.div`
margin:15rem 20rem 5rem 20rem;
display:flex;
align-items:center;
`
export const StyledImg = styled.img`
height:35rem;
border-radius:6px
`

export const StyledContentDiv = styled.div`
color:black;
padding:15px;
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
margin:15rem 5rem 20rem 45rem;
border:solid;
padding:10px;
border-radius:6px;
width:40%

`
export const StyledLoginBtn = styled.button`
background-color: ${props => props.login ? 'rgb(90, 236, 146)' : ''};
border-style: solid;
border-radius:3px;
color: black;
margin: 6px;
margin: ${props => props.track ? '4rem 47rem' : '6px'};
padding: 5px;
`
export const StyledLogo = styled.img`
    height: 5.2rem;
    padding: 5px;
`
export const StyledSideBar = styled.div`
margin:20px 5px;
background-color:${props => props.sidebar ? 'black' : 'grey'};
padding:10px;
height:86vh;
width:${props => props.sidebar ? '45rem' : '75rem'};
`
export const StyledAppLayout = styled.div`
display:flex;
margin:20px;
`

export const StyledLiCities = styled.li`
border-left: 6px solid green;
background-color:grey;
margin-bottom:10px;
list-style:none;
display:flex;
padding:10px;
justify-content:space-between;
border-radius: 5px;
font-size:13px
`

export const StyledLiCountries = styled.li`
border-left: 6px solid orange;
background-color:grey;
list-style:none;
display:inline-flex;
padding:20px;
margin:5px ;
justify-content:space-between;
border-radius: 5px;
font-size:13px
`

export const StyledContainer = styled.div`
background-color:grey;
margin:30px;
border-radius:5px;
padding:5px
`