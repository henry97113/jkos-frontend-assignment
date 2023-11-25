import * as React from 'react';

import Button from '../ui/Button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/Drawer';
import ProductSpecSelector from '../ProductSpecSelector';

function AddToCart() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <AddToCartButton />
      </DrawerTrigger>
      <DrawerContent>
        <ProductSpecSelector
          ctaText="加入購物車"
          onSubmit={() => {
            window.alert('跳轉到購物車清單');
            setIsOpen(false);
          }}
        />
      </DrawerContent>
    </Drawer>
  );
}

const AddToCartButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function AddToCartButton(props, ref) {
  return (
    <Button
      {...props}
      ref={ref}
      variant="secondary"
      size="lg"
      className="col-span-5 text-lg"
    >
      加入購物車
    </Button>
  );
});

export default AddToCart;
