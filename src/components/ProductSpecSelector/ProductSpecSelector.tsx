import * as React from 'react';

import { cn } from '@/helpers/classNames';
import { formatCurrency } from '@/helpers/currency';
import { useProduct } from '@/hooks/useProduct';

import NumberField from '../ui/NumberField';
import Button from '../ui/Button';

type ProductSpecSelectorProps = {
  ctaText: string;
  onSubmit: () => void;
};

function ProductSpecSelector({ ctaText, onSubmit }: ProductSpecSelectorProps) {
  // In real world use cases, I'll get the productId from the URL params instead
  const { data: product } = useProduct('1');
  const [count, setCount] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');

  function handleCountChange(newCount: number) {
    setCount(newCount);
  }

  if (!product) return null;

  const { productName, productImages, sellingPriceMax, sizeList, colorList } =
    product;

  function handlePickSize(size: string) {
    setSelectedSize(size);
  }

  function handlePickColor(color: string) {
    setSelectedColor(color);
  }

  return (
    <div>
      <div className="px-2 py-3 flex items-center gap-x-2 mr-8">
        <img
          src={productImages[0]}
          alt={productName}
          className="w-16 h-auto rounded-md"
        />
        <div className="text-left flex-grow">
          <h2 className="line-clamp-2 text-sm">{productName}</h2>
          <span className="text-lg">{formatCurrency(sellingPriceMax)}</span>
        </div>
      </div>
      <div className="border-t border-solid border-t-[#1d1f27] px-2 py-3">
        <div className="flex items-center gap-x-2 pb-3">
          <h3>尺寸</h3>
          <span className="text-[#97989f] text-sm">補充說明</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizeList.map((size) => (
            <SelectButton
              key={size.variant}
              onClick={() => handlePickSize(size.variant)}
              isActive={size.variant === selectedSize}
              disabled={!size.inStock}
            >
              {size.variant}
            </SelectButton>
          ))}
        </div>
      </div>
      <div className="border-t border-solid border-t-[#1d1f27] px-2 py-3">
        <div className="flex items-center gap-x-2 pb-3">
          <h3>顏色</h3>
          <span className="text-[#97989f] text-sm">補充說明</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {colorList.map((color) => (
            <SelectButton
              key={color.variant}
              onClick={() => handlePickColor(color.variant)}
              isActive={color.variant === selectedColor}
              disabled={!color.inStock}
            >
              {color.variant}
            </SelectButton>
          ))}
        </div>
      </div>
      <div className="border-t border-solid border-t-[#1d1f27] px-2 py-3">
        <div className="flex items-center justify-between">
          <h3>購買數量</h3>
          <NumberField
            step={1}
            minValue={1}
            value={count}
            onChange={handleCountChange}
          />
        </div>
        <div className="pt-4">
          <Button
            disabled={!selectedSize || !selectedColor || !count}
            size="lg"
            className="w-full"
            onClick={onSubmit}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}

function SelectButton({
  isActive,
  children,
  ...delegated
}: {
  isActive?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const activeClassNames = 'bg-[#ba2943] border-[#ba2943] text-white';

  return (
    <Button
      {...delegated}
      variant="outline"
      className={cn('bg-transparent', isActive && activeClassNames)}
    >
      {children}
    </Button>
  );
}

export default ProductSpecSelector;
