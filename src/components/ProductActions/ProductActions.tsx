import * as React from 'react';

import { ShoppingCart } from 'lucide-react';

import AddToCart from '../AddToCart';
import BuyNow from '../BuyNow';

function ProductActions() {
  return (
    <>
      <div className="fixed bottom-0 w-full max-w-full md:max-w-2xl bg-[#2f313f]">
        <div className="px-3 py-2 grid grid-cols-12 gap-x-3 items-center">
          <button className="col-span-2 flex items-center flex-col gap-y-1 text-xs">
            <ShoppingCart />
            <span>購物車</span>
          </button>
          <AddToCart />
          <BuyNow />
        </div>
      </div>
    </>
  );
}

export default ProductActions;
