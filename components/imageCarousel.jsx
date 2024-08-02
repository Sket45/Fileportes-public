import React from "react";
import Carouselstyles from "../styles/Carousel.module.scss";
import Image from "next/image";

const ImageCarousel = () => {
  const AddImages = () => {
    const images = [];

    for (let i = 0; i < 8; i++) {
      images.push(
        <div key={i} className={Carouselstyles.imageContainer}>
          <Image
            src={`/images/carousel/image${i + 1}.jpeg`}
            alt={`Truck Image ${i + 1}`}
            layout="fill"
            objectFit="cover"
            sizes=""
          />
        </div>
      );
    }
    for (let i = 0; i < 8; i++) {
      images.push(
        <div key={`dup-${i}`} className={Carouselstyles.imageContainer}>
          <Image
            src={`/images/carousel/image${i + 1}.jpeg`}
            alt={`Truck Image ${i + 1}`}
            layout="fill"
            objectFit="cover"
            sizes=""
          />
        </div>
      );
    }

    return <>{images}</>;
  };

  return (
    <div className={Carouselstyles.container}>
      <div className={Carouselstyles.container_carousel}>
        <div className={Carouselstyles.container_carousel_track}>
          <AddImages />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
