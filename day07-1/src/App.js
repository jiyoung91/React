import React from 'react';
// import Todos from './components/todos/Todos';
// import Friend from './components/friend/Friend/Friend';
import './assets/css/reset.css'
import { Todos, Friend} from './components' 

const App = () => {
  return (
    <div>
       <Todos />
       <hr/>
       <Friend />
    </div>
  );
};

export default App;