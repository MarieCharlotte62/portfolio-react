import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apropos from './a-propos';
import "../src/styles/global.css";
import MesProjets from './mes-projets';
import Accueil from './accueil';
import './fonts/JuliusSansOne.ttf'
import './fonts/Archivo.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* mise en place du router */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil />}/>
          <Route path='/a-propos' element={<Apropos />}/>
          <Route path='/mes-projets' element={<MesProjets />}/>
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
  </React.StrictMode>
);