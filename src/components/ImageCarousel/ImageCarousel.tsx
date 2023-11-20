import * as React from 'react';

type ImageCarouselProps = {
  images: string[];
};

function ImageCarousel({ images }: ImageCarouselProps) {
  console.log({ images });

  return <div className="w-full aspect-square bg-slate-300">Carousel</div>;
}

export default ImageCarousel;
