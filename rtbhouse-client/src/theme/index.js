import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  :root {
    --primary-color: #3D0D5B;
    --secondary-color: #3A0B09;
    --accent-color: #ED4135;
    --text-color: #333333;
    --background-color: #f5f5f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100vw;
    min-height: 100vh;
    background-color: var(--background-color);
  }

`;