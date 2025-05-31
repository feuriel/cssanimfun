import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';

let copyright = `© ${new Date().getFullYear()} Gabriel Somogyi`;
console.log(`made with ❤️ by Gabriel S.
  https://gabriel-somogyi.vercel.app/
  ${copyright}`);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
