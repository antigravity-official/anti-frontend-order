import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import theme from 'components/UI/theme/theme';

import { MainPage, OrdersPage, NotFoundPage } from 'pages';

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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
