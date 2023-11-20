import * as React from 'react';
import { ShoppingCart } from 'lucide-react';

function ProductActions() {
  return (
    <div className="fixed bottom-0 w-full max-w-full bg-[#2f313f]">
      <div className="px-3 py-2 grid grid-cols-12 gap-x-3 items-center">
        <button className="col-span-2 flex items-center flex-col gap-y-1 text-xs">
          <ShoppingCart />
          <span>購物車</span>
        </button>
        <button className="col-span-5 text-lg rounded-lg p-3 bg-[#42465d] flex-grow h-12 flex items-center justify-center">
          加入購物車
        </button>
        <button className="col-span-5 text-lg rounded-lg p-3 bg-[#b92944] flex-grow h-12 flex items-center justify-center">
          直接購買
        </button>
      </div>
    </div>
  );
}

export default ProductActions;
