import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Caxo";   /*Can be any text*/
    src: local("Caxo"),
      url("../fonts/Caxo.otf") format("opentype");
  }

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Caxo';
    overflow-x: hidden;

}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

`

export default GlobalStyles;