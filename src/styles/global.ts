import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  color: #777;
  padding: 3rem;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  @media (max-width:700px){
    padding: 1rem;
    
  }
}
`
export default GlobalStyles