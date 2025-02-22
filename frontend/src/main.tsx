import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthClient } from '@dfinity/auth-client';
import App from './App.tsx';
import './index.css';

async function init() {
  const authClient = await AuthClient.create();
  
  if (await authClient.isAuthenticated()) {
    renderApp();
  } else {
    await authClient.login({
      identityProvider: 'https://identity.ic0.app',
      onSuccess: () => {
        renderApp();
      },
    });
  }
}

function renderApp() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

init();
