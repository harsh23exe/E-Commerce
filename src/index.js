import React from 'react';
import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import Routess from "./Routes";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Routess />
  </StrictMode>,
);
// ReactDOM.render(<routess />, document.getElementById("root"));
