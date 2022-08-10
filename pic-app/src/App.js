import React from 'react';
import GlobalStyle from './components/styled/Global';
import {Gallery, News} from './components'
const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <News /> */}
      <Gallery />
    </>
  );
};

export default App;