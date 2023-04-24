import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel';
import styles from "../styles/Featured.module.css"
import 'react-multi-carousel/lib/styles.css';

const Featured = () => {
  const images = [
    "/img/featured_1.png",
    "/img/featured_2.png",
    "/img/featured_3.png",
  ];

  const responsiveImageHero = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className={styles.container}>
      <Carousel
        slidesToSlide={1}
        responsive={responsiveImageHero}
        infinite={true}
        autoPlay ={true}
        autoPlaySpeed={6000}
      >
        {images.map((image, index) =>
          <div className={styles.carouselContainer} key={index}>
            <Image
              alt='hero'
              src={image}
              width={800}
              height={475}
              sizes="100vw"
              style={{
                width: '80%',
                height: '600px',
                objectPosition: 'center',
                objectFit:'fill'

              }}
            />
          </div>
        )}
      </Carousel>

    </div>
  )
}

export default Featured
