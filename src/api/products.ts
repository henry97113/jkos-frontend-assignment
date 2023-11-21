import ky from 'ky';

export type Product = {
  productId: string;
  productName: string;
  originalPriceMin: number;
  originalPriceMax: number;
  sellingPriceMin: number;
  sellingPriceMax: number;
  tags?: string[];
  notes: string[];
  productImages: string[];
  sideNote?: string;
  description: string;
  category: string;
};

export async function getProductById(id: string) {
  return ky.get(`/products/${id}`).json<Product>();
}
