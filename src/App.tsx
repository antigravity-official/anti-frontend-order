
import { Route, Routes } from 'react-router-dom';
import { OrderPage,NotFoundPage } from 'pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OrderPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
