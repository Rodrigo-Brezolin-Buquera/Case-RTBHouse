import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  :root {
    --primary-color: #3D0D5B;
    --secondary-color: #3A0B09;
    --accent-color: #ED4135;
    --text-color: #333333;
    --text-variant-color: #ffffff;
    --background-color: #ffffff;
    --neutral-color: #f5f5f5
   
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--background-color);
  }

`;