import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Count from './components/count/Count';
import Todo from './components/todos/Todo';
import ChangeColorProvider from './contexts/ChangeColorContext';
import CountProvider from './contexts/CountContext';
import TodoProvider from './contexts/TodoContext';

const App = () => {
  return (
   <div>
    <TodoProvider>
      <Todo />
    </TodoProvider>
    <hr />   
    <CountProvider>
      <Count />
    </CountProvider>
    <hr />
    <ChangeColorProvider>
      <ChangeColor />
    </ChangeColorProvider>
   </div>
  );
};

export default App;