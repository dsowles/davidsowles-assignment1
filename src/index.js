/******************************************************************************
Filename: index.js
Author: David A. Sowles
Created: 02/09/2026
Description:  The main entry point for the application. This file mounts the 
              React component tree to the physical HTML DOM.
******************************************************************************/


/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/****************************************************************************/

// Link React to the <div id="root"> element in your HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the JSX to an HTML document.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
