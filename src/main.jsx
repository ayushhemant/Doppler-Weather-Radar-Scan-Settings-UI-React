import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Navbar from './Navbar';
import AppRouter from './AppRouter';


const root = createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <Navbar />
    <AppRouter />
  </React.StrictMode>
);
