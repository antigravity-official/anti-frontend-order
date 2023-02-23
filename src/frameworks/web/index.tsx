import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './components/Index';

const App = () => {
  return (
    <>
      <Index />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
