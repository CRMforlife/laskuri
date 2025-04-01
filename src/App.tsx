import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import PriceCalculator from './components/PriceCalculator';
import { GlobalStyle, theme } from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.gradients.sunrise};
  padding: 2rem 1rem;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.brandBlack};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header>Verkkosivuprojektin hintalaskuri</Header>
        <PriceCalculator />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App; 