import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const SectionHeader = styled.section`
  position: relative;
  height: 38vw;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 9vw),
    0 100%
  );
  @media (max-width:700px){
    height: 400px;
  }
`
export const HeaderHero = styled.div`
height: 100%;
`
export const HeaderHeroOverlay = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right bottom, #B2FEFA, #0ED2F7);
  opacity: 0.85;
`
export const HeaderHeroIMG = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: 50% 25%;
`
export const HeadingBox = styled.div`
  position: absolute;
  bottom: 13vw;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeroTitle = styled.h1`
color: #fff;
text-transform: uppercase;
font-weight: 300;
font-size: 5rem;
text-align: center;
width: 70%;
margin: 0 auto;

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
@media (max-witdh:700px){
  font-size: 2rem;
}
`
export const HeadingBoxGroup = styled.div`
color: #f7f7f7;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeadingBoxDetail = styled.div`
font-size: 1.5rem;
font-weight: 700;
text-transform: uppercase;
display: flex;
align-items: center;
text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);

svg {
  margin-right: 0.8rem;
  height: 2rem;
  width: 2rem;
  filter: drop-shadow(0 0.75rem 0.5rem rgba(0,0,0,0.25));
}

&:not(:last-child) {
  margin-right: 4rem;
}
`
export const SectionDescription = styled.section`
  background-color: #fcfcfc;
  margin-top: calc(0px - 9vw);
  & > * {
    padding: 0 8vw;
    padding-top: 14vw;
    padding-bottom: calc(1vw + 9vw);
    flex: 0 0 50%;
  }
`
export const OveviewBox = styled.div`
  background-color: #f7f7f7;
  display:flex;
  justify-content: center;
  flex-direction: column;
`
export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(to right, #B2FEFA, #0ED2F7);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
  margin-bottom: 3.5rem;

`
export const DescriptionText = styled.p`
  font-size: 1.7rem;
`
export const OveviewBoxDetail = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 400;

  &:not(:last-child) {
  margin-bottom: 2.25rem;
  }

  svg {
  margin-right: 1.25rem;
  height: 2.25rem;
  width: 2.25rem;
} 
`
export const OveviewBoxLabel = styled.span`
  font-weight: 700;
  margin-right: 2.25rem;
  text-transform: uppercase;
  font-size: 1.4rem;

`
export const OveviewBoxText = styled.span`
  text-transform: capitalize;

`
export const DescriptionBox = styled.div`
  margin-top: 4rem;

`
export const SectionPictures = styled.section`
  display: flex;
  clip-path: polygon(
    0 9vw,
    100% 0,
    100% calc(100% - 9vw),
    0 100%
  );
  margin-top: calc(0px - 9vw);
  position: relative;
  z-index: 1000;
`
export const BoxImage = styled.img`
  display: block;
  width: 100%;
  height: 110%;
  object-fit: cover;
 
`
export const PictureBox = styled.div`
   &:first-child{
    img{
        padding-top: 15%;
    }
  }
  &:nth-child(2){
      img{
      padding-bottom: 15%;
      }
  }
  &:last-child{
    img{  
    padding-bottom: 27%;
   } 
}
`
export const SectionMap = styled.section`
  position: relative;
  height: 70rem;
  margin-top: calc(0px - 9vw);
  overflow: hidden;
`
export const SectionBox = styled.section`
  margin-top: calc(0px - 9vw);
  padding: calc(5rem + 9vw) 0;
  padding-top: calc(15rem + 9vw);
  background: linear-gradient(to right bottom, #B2FEFA, #0ED2F7);
  clip-path: polygon(
    0 9vw,
    100% 0,
    100% 100%,
    0 100%
  );
  z-index: 1000;
  @media (max-width:700px){
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
export const BoxContainer = styled.div`
 position: relative;
  max-width: 105rem;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  padding: 9rem 5rem 9rem 21rem;
  border-radius: 2rem;
  box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
  @media (max-width:700px){
    padding-left: 5rem;
  }

`
export const BoxIMG = styled.img`
  height: 15rem;
  width: 15rem;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 50%;
  box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);

  &:first-child {
    transform: translate(-35%, -50%);
    z-index: 10;
  }

  &:nth-child(2) {
    transform: translate(-10%, -50%) scale(0.97);
    z-index: 9;
  }
  @media(max-width:700px){
    display: none;
  }
`
export const BoxContent = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  grid-gap: 0.7rem;
  grid-auto-flow: column;
  align-items: center;
`
export const BoxHeading = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(to right, #B2FEFA, #0ED2F7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
`
export const BoxText = styled.p`
  font-size: 1.9rem;
  font-weight: 400;
`
export const EditButton = styled(Link)`
font-size: 1.6rem;
  padding: 1.4rem 3rem;
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
  margin-top: 3rem;

  background-color: #fff;
  color: #0ED2F7;

  &::after {
    background-color: #fff;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    background-color: #fff;
  }

`