import React from 'react';
import { BrowserRouter ,Routes, Route, Link} from "react-router-dom";
import About from './page1/About';
import Home from './page1/Home';
import NotFiles from './page1/NotFiles';
import Profile from './page1/Profile';
import Front from './page2/Front';

const dataList =[
  {title:'html', info:'html 설명'},
  {title:'css', info:'css 설명'},
  {title:'js', info:'js 설명'},
  {title:'react', info:'react 설명'},
  {title:'vue', info:'vue 설명'},
]
const App = () => {
  return (
    <BrowserRouter>
      <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <hr />
          <li><Link to='/front/html'>html</Link></li>
          <li><Link to='/front/css'>css</Link></li>
          <li><Link to='/front/js'>js</Link></li>
          <li><Link to='/front/react'>react</Link></li>
          <li><Link to='/front/vue'>vue</Link></li>
          <hr />
        </ul>
      </nav>

      {/* 화면에 보이는영역 */}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='about' element={ <About /> } />
        <Route path='profile' element={ <Profile /> } />
        <Route path='front/:name' element={ <Front dataList={dataList}/> } />
        <Route path='*' element={ <NotFiles /> } />
      </Routes>

      </>
    </BrowserRouter>
  );
};

export default App;