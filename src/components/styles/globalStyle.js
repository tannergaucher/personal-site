import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merriweather:300,400,900|Roboto+Mono');

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    font-family: 'Merriweather', serif;
    background: #fafafa;
   }

   p {
    line-height: 2;
    padding-block-end: .5em;
   }
  a {
    color: blue;
  }
`
export default GlobalStyle
