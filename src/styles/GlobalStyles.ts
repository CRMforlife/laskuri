import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    brandGreen: '#00A354',
    brandBlack: '#1D1D1F',
    gray: '#CFCFD3',
    white: '#FFFFFF',
  },
  gradients: {
    sunset: 'linear-gradient(to right, #FF512F, #F09819)',
    sunrise: 'linear-gradient(to right, #FF8008, #FFC837)',
    pink: 'linear-gradient(to right, #FF6B6B, #FF8E8E)',
    nature: 'linear-gradient(to right, #00A354, #80C683)',
  },
  grid: {
    desktop: '12',
    tablet: '8',
    mobile: '4',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Helvetica, Arial, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.brandBlack};
  }
`; 