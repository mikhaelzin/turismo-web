import styled from "styled-components"
import {Link} from 'react-router-dom'
export const LoadingWrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 50vh;
`
export const Main = styled.main`
  background-color: #f7f7f7;
  padding: 8rem 6rem;
  flex: 1;
  position: relative;

  @media (max-width:700px){
    padding: 2rem 1rem;
  }
`
export const CardContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 7rem;
`
export const Card = styled.div`
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: 0.3s all;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
`
export const CardHeader = styled.div`
position: relative;
`
export const CardPicture = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  height: 22rem;
`
export const CardPictureOverlay = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right bottom, #B2FEFA, #0ED2F7);
  opacity: 0.7;
`
export const CardPictureImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
export const Title = styled.h3`
color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2.75rem;
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 70%;
  z-index: 10;

  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to bottom right,
      rgba(178, 254, 250, 0.85),
      rgba(14, 210, 247, 0.85)
    );
  }
`
export const CardDetails= styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;
`
export const CardSubHeading= styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / -1;
`
export const CardText= styled.p`
  grid-column: 1 / -1;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
`
export const CardData= styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  svg{
    height: 2rem;
    width: 2rem;
    margin-right: 0.7rem;
  }
`
export const CardFooter= styled.div`
  background-color: #f7f7f7;
  padding: 2.5rem 3rem;
  border-top: 1px solid #f1f1f1;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;
  p{
    display: flex;
    align-items: center;
  }
  a{
    justify-self: end;
    align-self: center;
  }
`
export const CardFooterValue= styled.span`
  font-weight: 700;
  margin-right: 0.5rem;
`
export const CardFooterText= styled.span`
  color: #999;
`
export const CardFooterLink= styled(Link)`
  &, &:link, &:visited {
  font-size: 1.4rem;
  padding: 1.25rem 3rem;
  border-radius: 10rem;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  position: relative;
  transition: all 0.4s;
  font-weight: 400;
  backface-visibility: hidden;
  border: none;
  cursor: pointer;
}

&:active {
  transform: translateY(-1px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

&:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
}

&:focus {
  outline: none;
  background-color: #069fbc;
}

background-color: #0ED2F7;
color: #fff;

&::after {
  background-color: #0ED2F7;
}
`