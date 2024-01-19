import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from '../resources/10.png';

const PhotoScroll = () => {
  // eslint-disable-next-line no-unused-vars
  const [photos, setPhotos] = useState([
    { src: '../resources/8.png', alt: 'Photo 1' },
    { src: '../resources/9.png', alt: 'Photo 2' },
    { src: '../resources/10.png', alt: 'Photo 3' },
    { src: '../resources/11.png', alt: 'Photo 4' },
    { src: '../resources/12.png', alt: 'Photo 5' },
    { src: '../resources/13.png', alt: 'Photo 6' },
    { src: '../resources/14.png', alt: 'Photo 7' },
    { src: '../resources/15.png', alt: 'Photo 8' },
    { src: '../resources/16.png', alt: 'Photo 9' },
    { src: '../resources/17.png', alt: 'Photo 10' },
    { src: '../resources/18.png', alt: 'Photo 11' },
    { src: '../resources/19.png', alt: 'Photo 12' },
    { src: '../resources/20.png', alt: 'Photo 13' },
    { src: '../resources/21.png', alt: 'Photo 13' },
    { src: '../resources/22.png', alt: 'Photo 13' },
    { src: '../resources/23.png', alt: 'Photo 13' },
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (scrollPosition > 0) {
      setScrollPosition((prevScrollPosition) => prevScrollPosition - 5);
    }
  };

  const handleScrollRight = () => {
    if (scrollPosition + 5 < photos.length) {
      setScrollPosition((prevScrollPosition) => prevScrollPosition + 5);
    }
  };

  return (
    <div className="photo-scroll">
      <button onClick={handleScrollLeft} className="scroll-button left">
        <FiChevronLeft />
      </button>

      <div className="photo-container">
        {photos.slice(scrollPosition, scrollPosition + 5).map((photo) => (
          <Image key={photo.src} src={photo.src} alt={photo.alt} width={500} height={300} />
        ))}
      </div>

      <button onClick={handleScrollRight} className="scroll-button right">
        <FiChevronRight />
      </button>
    </div>
  );
};

export default PhotoScroll;
