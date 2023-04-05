import React from 'react';
import { BrowserRouter ,Routes  ,Route } from 'react-router-dom'; 
import About from './Component/About';
import Menu from './Component/Menu';
import Music from './Component/Music';
import Pnf from './Component/Pnf';
import Track from './Component/Track';

function App(props) {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path={`/`} element= {<Music/>} />
        <Route path={`/about`} element= {<About/> }/>
        <Route path={`/tracks/artist/:id`} element= {<Track/>}/>
        <Route path={`/*`} element= {<Pnf/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
