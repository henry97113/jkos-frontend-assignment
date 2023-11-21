import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProductDetails from './components/ProductDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductDetails productId="1" />
    </QueryClientProvider>
  );
}

export default App;
