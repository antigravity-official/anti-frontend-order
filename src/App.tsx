import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MyOrder from './pages/MyOrder';

const App = () => {
  return (
    <div className="m-auto">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<MyOrder />} />
      </Routes>
    </div>
  );
};

export default App;
