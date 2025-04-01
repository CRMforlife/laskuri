import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brandGreen: string;
      brandBlack: string;
      gray: string;
      white: string;
    };
    gradients: {
      sunset: string;
      sunrise: string;
      pink: string;
      nature: string;
    };
    grid: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
} 