import * as React from 'react';
import { Loader2 } from 'lucide-react';

import { cn } from '@/helpers/classNames';
import { useProduct } from '@/hooks/useProduct';

import Divider from '../ui/Divider';
import ImageCarousel from '../ImageCarousel';
import ProductActions from '../ProductActions';
import VisuallyHidden from '../ui/VisuallyHidden';
import { formatPrice } from './formatPrice';

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

type ProductDetailsProps = {
  productId: string;
};

function ProductDetails({ productId }: ProductDetailsProps) {
  const { data, isLoading, isPaused, isError } = useProduct(productId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-inherit">
        <Spinner />
      </div>
    );
  }

  // When the user is offline
  if (isPaused) {
    return <p>Try again</p>;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  const product = data!;

  return (
    <div className="pb-28">
      <ImageCarousel images={product.productImages} />
      <div className="pt-4 space-y-3">
        <SectionWrapper className="text-[#e9eaeb]">
          <h2 className="line-clamp-2">{product.productName}</h2>
          <div className="pt-1 flex items-center gap-x-2">
            <div>
              <span>
                {formatPrice(product.sellingPriceMin, product.sellingPriceMax)}
              </span>
            </div>
            <div className="text-sm line-through origin-price items-center text-[#686971]">
              <span>
                {formatPrice(
                  product.originalPriceMin,
                  product.originalPriceMax
                )}
              </span>
            </div>
          </div>
          {product.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {product.tags.map((tag, i) => (
                <Badge key={i}>{tag}</Badge>
              ))}
            </div>
          )}
          <Divider />
          <ul role="list" className="list-disc list-outside pl-4">
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
          {product.sideNote && (
            <ProductDescriptionItem title="商品備註">
              {product.sideNote}
            </ProductDescriptionItem>
          )}
        </SectionWrapper>
      </div>
      <ProductActions />
    </div>
  );
}

// components
function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClassNames = 'rounded-md bg-[#272933] mx-3 p-3';

  return <div className={cn(baseClassNames, className)}>{children}</div>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md text-xs px-2 py-0.5  text-[#f0e9eb] bg-[#6c2235]">
      {children}
    </span>
  );
}

function Spinner() {
  return (
    <div>
      <Loader2 size={36} className="animate-spin" />
      <VisuallyHidden>Loading...</VisuallyHidden>
    </div>
  );
}

export default ProductDetails;
