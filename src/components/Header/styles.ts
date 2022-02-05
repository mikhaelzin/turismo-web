import  styled from "styled-components"
import {Link as RRDLink} from 'react-router-dom'
export const Container=styled.header`
background-color: #444;
padding: 0 5rem;
height: 8rem;
position: relative;
z-index: 100;
display: flex;
justify-content: space-between;
align-items: center;
` 
export const Nav=styled.nav`
display: flex;
align-items: center;
flex: 1;
justify-content: space-between;
`
export const Link=styled(RRDLink)`
&,&:visited,&:link {
    color: #f7f7f7;
    text-transform: uppercase;
    font-size: 1.6rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;
    font-weight: 400;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
  
  &:hover,&:active {
    transform: translateY(-2px);
    text-shadow: 0 0.7rem 1rem black;
  }
`
