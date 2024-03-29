import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, {createGlobalStyle} from "styled-components";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
  
`

root.render(
    <React.StrictMode>
        <>
            <Global/>
            <App/>
        </>
    </React.StrictMode>
)