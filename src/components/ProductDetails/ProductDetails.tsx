import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

import { getProductById } from '@/api/products';

import ImageCarousel from '../ImageCarousel';
import ProductActions from '../ProductActions';

// components
function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-[#272933] text-[#e9eaeb] mx-3 p-3">
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md text-xs px-2 py-0.5  text-[#f0e9eb] bg-[#6c2235]">
      {children}
    </span>
  );
}

function Divider() {
  return (
    <hr className="border-[#1d1f27] border-0 border-solid border-b w-full my-2" />
  );
}

type ProductDescriptionItemProps = {
  title: string;
  children: React.ReactNode;
};

function ProductDescriptionItem({
  title,
  children,
}: ProductDescriptionItemProps) {
  return (
    <div>
      <div className="text-sm text-[#a9a9ae]">{title}</div>
      <div className="text-sm text-[#d4d4d6] mt-1">{children}</div>
    </div>
  );
}

// helpers
function formatPrice(num: number) {
  return `$${num.toLocaleString('en-US')}`;
}

type ProductDetailsProps = {
  productId: string;
};

function ProductDetails({ productId }: ProductDetailsProps) {
  const { data, isLoading, isPaused } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => {
      return getProductById(productId);
    },
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  // When the user is offline
  if (isPaused) {
    return <p>Try again</p>;
  }

  const product = data!;

  return (
    <div className="pb-28">
      <ImageCarousel images={product.productImages} />
      <div className="pt-4 space-y-3">
        <SectionWrapper>
          <h2 className="line-clamp-2">{product.productName}</h2>
          <div className="pt-1 flex items-center gap-x-2">
            <div>
              <span>
                {formatPrice(product.sellingPriceMin)} -
                {formatPrice(product.sellingPriceMax)}
              </span>
            </div>
            <div className="text-sm line-through origin-price items-center text-[#686971]">
              <span>
                {formatPrice(product.originalPriceMin)} -
                {formatPrice(product.originalPriceMax)}
              </span>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.tags.map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </div>
          <Divider />
          <ul className="list-disc list-inside pl-2">
            {product.notes.map((note, i) => (
              <li key={i} className="text-sm">
                {note}
              </li>
            ))}
          </ul>
        </SectionWrapper>
        <SectionWrapper>
          <ProductDescriptionItem title="商品分類">
            {product.category}
          </ProductDescriptionItem>
          <Divider />
          <ProductDescriptionItem title="商品描述">
            {product.description}
          </ProductDescriptionItem>
          <Divider />
          <ProductDescriptionItem title="商品備註">
            {product.sideNote}
          </ProductDescriptionItem>
        </SectionWrapper>
      </div>
      <ProductActions />
    </div>
  );
}

export default ProductDetails;
