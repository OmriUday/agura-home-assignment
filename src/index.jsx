import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');
const appRoot = createRoot(root);

const render = () => {
  appRoot.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
