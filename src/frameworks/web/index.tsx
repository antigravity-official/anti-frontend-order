import * as React from 'react';
import Index from './components/Index';
import {createRoot} from "react-dom/client";

const App = () => {
  return (
    <>
      <Index />
    </>
  );
};

const rootNode = document.getElementById('app');

createRoot(rootNode).render(<App/>);
