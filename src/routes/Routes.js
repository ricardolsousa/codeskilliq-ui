import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './../auth/pages/LoginPage';
import App from './../App';
import Navbar from '../navbar/components/Navbar';
import LanguagesPage from '../pages/languages/LanguagesPage';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path='/languages' element={<LanguagesPage />} />
          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;