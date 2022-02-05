import styled from 'styled-components'

export const Main = styled.main`
 background-color: #f7f7f7;
  padding: 8rem 6rem;
  flex: 1;
  position: relative;

  @media(max-width:700px){
    padding:2rem 1rem;
    
    }
`


export const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  background-color: #fff;
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  padding: 5rem 7rem;
  border-radius: 5px;
  @media(max-width:700px){
    padding:3rem 2rem;
    
    }
`
export const FormTitle = styled.h2`
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
  margin-bottom: 3.5rem;
`
