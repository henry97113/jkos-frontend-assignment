import { useQuery } from '@tanstack/react-query';

import { getProductById } from '@/api/products';

export function useProduct(productId: string) {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => {
      return getProductById(productId);
    },
  });
}
