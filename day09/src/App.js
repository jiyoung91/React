import React from 'react';
import { BrowserRouter , Routes, Route, Link  } from "react-router-dom";
import Main from './page4/Main';
import Member from './page4/Member';
import MemberDetail from './page4/MemberDetail';
import NotFiles from './page4/NotFiles';


const App = () => {
  return (
    <BrowserRouter>
        <>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='member'>
              <Route index element={<Member />}/>
              <Route path=':memberID' element={<MemberDetail />} />
            </Route>
            <Route path='*' element={<NotFiles />} />
          </Routes>
        </>
    </BrowserRouter>
  );
};

export default App;