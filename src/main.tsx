import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css';

// Define TypeScript interfaces for console methods
interface ConsoleError {
  (message?: any, ...optionalParams: any[]): void;
}

interface ExtendedWindow extends Window {
  console: Console & {
    error: ConsoleError;
  };
}

// Enhanced warning suppression mechanism
const suppressResizeObserverWarning = () => {
  // Store the original console.error function
  const originalError = (window as ExtendedWindow).console.error;

  // Override console.error with custom handling
  (window as ExtendedWindow).console.error = (...args: any[]) => {
    // Check if this is a ResizeObserver warning
    if (
      args.length > 0 &&
      typeof args[0] === 'string' &&
      (args[0].includes('ResizeObserver loop completed') ||
       args[0].includes('ResizeObserver loop limit exceeded'))
    ) {
      // In development, log a more helpful message
      if (process.env.NODE_ENV === 'development') {
        console.debug(
          'ResizeObserver warning suppressed. This is expected behavior and does not indicate an error in your application.'
        );
      }
      return;
    }

    // Pass through all other errors to the original console.error
    originalError.apply(window.console, args);
  };
};

// Apply the warning suppression before app initialization
suppressResizeObserverWarning();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

// Create a client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);