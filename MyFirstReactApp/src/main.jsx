
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Find the root HTML element and create a React root.
const container = document.getElementById('root');

// Stop immediately if the required HTML element is missing.
if (!container) {
  throw new Error('Root element with id "root" was not found.');
}

// Render the App component inside the root element.
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);