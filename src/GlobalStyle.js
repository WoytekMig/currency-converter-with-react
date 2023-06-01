import { createGlobalStyle } from "styled-components";
import background from "./currencyCalculatorBackground4.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  background-image: url("${background}");
  background-size: 100%; 
}

*,
::after, ::before {
  box-sizing: inherit;
}
`;