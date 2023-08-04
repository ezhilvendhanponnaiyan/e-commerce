import React from 'react';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/rout';
import Footer from './components/footer';
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
