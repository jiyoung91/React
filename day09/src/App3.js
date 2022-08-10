import React from 'react';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Home from './page3/Home';
import NotFiles from './page3/NotFiles';
import Profile from './page3/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li style={{marginBottom:30}}><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="profile" element={ <Profile />} >         
               <Route path=":name" />
          </Route>
          <Route path="*" element={ <NotFiles />} />
        </Routes>

      </>
    </BrowserRouter>
  );
};

export default App;