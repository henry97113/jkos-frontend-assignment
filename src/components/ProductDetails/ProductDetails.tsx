import * as React from 'react';

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

const images = [
  '/product-images/1.jpeg',
  '/product-images/2.jpeg',
  '/product-images/3.jpeg',
  '/product-images/4.jpeg',
];

function ProductDetails() {
  // fetch product with useQuery]

  const product = {
    productId: '123',
    productName: 'LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列',
    originalPriceMin: 4699,
    originalPriceMax: 3699,
    sellingPriceMin: 2999,
    sellingPriceMax: 3999,
    tags: ['街口結帳享九折優惠', '訂單滿399免運費'],
    notes: [
      '請於訂單備註填寫您需要的球員',
      '球員搭配之號碼不可替換',
      '球員款客製訂單出貨需要十四個工作天',
    ],
    sideNote:
      '請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。',
    description:
      '靈感來自 90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。',
    category: '限時優惠',
  };

  return (
    <div className="pb-28">
      <ImageCarousel images={images} />
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
