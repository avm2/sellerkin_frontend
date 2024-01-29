import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Listings from './components/Listings';
import 'tailwindcss/tailwind.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Listings />
      </div>
    </QueryClientProvider>
  );
}

export default App;
