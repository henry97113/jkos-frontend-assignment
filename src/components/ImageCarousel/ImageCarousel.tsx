import * as React from 'react';

import Slider from 'react-slick';
import type { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ImageCarouselProps = {
  images: string[];
};

function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliderSettings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    arrows: false,
    dots: false,
    afterChange(currentSlide) {
      setCurrentSlide(currentSlide);
    },
  };

  return (
    <div className="w-full aspect-square relative">
      <Slider {...sliderSettings}>
        {images.map((src, i) => (
          <img key={i} src={src} />
        ))}
      </Slider>
      <CurrentSlideIndicator
        activeIndex={currentSlide}
        totalSlides={images.length}
      />
    </div>
  );
}

type CurrentSlideIndicatorProps = {
  activeIndex: number;
  totalSlides: number;
};

function CurrentSlideIndicator({
  activeIndex,
  totalSlides,
}: CurrentSlideIndicatorProps) {
  return (
    <div className="rounded-full bg-black opacity-30 absolute bottom-3 right-3 px-2 py-1 text-xs">
      {activeIndex + 1}/{totalSlides}
    </div>
  );
}

export default ImageCarousel;
