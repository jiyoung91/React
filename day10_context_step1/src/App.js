import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Cnt from './components/count/Cnt';
import Count from './components/count/Count';
import Todos from './components/todos/Todos';
import ChangeColorProvider from './contexts/ChangeColorContext';
import CntProvider from './contexts/CntContext';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import TodoProvider from './contexts/TodoContext';

const App = () => {
  return (
    <div>
      <TodoProvider>
        <Todos />     
      </TodoProvider> 
      <hr/>
      <ColorProvider>
        <Color />
      </ColorProvider>
      <hr/>
      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>
      <hr/>
      <CountProvider>
        <Count />
      </CountProvider>
      <hr/>
      <CntProvider>
        <Cnt />
      </CntProvider>

    </div>
  );
};

export default App;