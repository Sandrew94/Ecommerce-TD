import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

a{
  text-decoration: none;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px
}

body{
  min-height: 100vh;
  background-color: #dce8ff;
  font-family: "Josefin Sans", sans-serif;

}

`;
