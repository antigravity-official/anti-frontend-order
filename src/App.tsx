import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import MainPage from 'pages/Main';
import theme from 'components/UI/theme/theme';
import Path from 'models/Path';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path={Path.MAIN} element={<MainPage />} />
            <Route path={Path.ORDERS} element={<OrdersPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
