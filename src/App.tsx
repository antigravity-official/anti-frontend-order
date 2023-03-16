import { GlobalStyle } from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

import { Route, Routes } from 'react-router-dom';
import { OrderPage, NotFoundPage } from 'pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
