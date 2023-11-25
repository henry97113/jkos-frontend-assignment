import * as React from 'react';

import Button from '../ui/Button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/Drawer';
import ProductSpecSelector from '../ProductSpecSelector';

function BuyNow() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <BuyNowButton />
      </DrawerTrigger>
      <DrawerContent>
        <ProductSpecSelector
          ctaText="直接購買"
          onSubmit={() => {
            window.alert('直接購買');
            setIsOpen(false);
          }}
        />
      </DrawerContent>
    </Drawer>
  );
}

const BuyNowButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function BuyNowButton(props, ref) {
  return (
    <Button {...props} ref={ref} size="lg" className="col-span-5 text-lg">
      直接購買
    </Button>
  );
});

export default BuyNow;
