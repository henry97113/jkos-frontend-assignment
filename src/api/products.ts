import ky from 'ky';

type Size = {
  variant: string;
  inStock: boolean;
};

type Color = {
  variant: string;
  inStock: boolean;
};

export type Product = {
  productId: string;
  productName: string;
  originalPriceMin: number;
  originalPriceMax: number;
  sellingPriceMin: number;
  sellingPriceMax: number;
  tags?: string[];
  notes: string[];
  colorList: Color[];
  sizeList: Size[];
  productImages: string[];
  sideNote?: string;
  description: string;
  category: string;
};

export async function getProductById(id: string) {
  return ky.get(`/products/${id}`).json<Product>();
}
