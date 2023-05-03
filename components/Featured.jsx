import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import styles from "../styles/Featured.module.css"
import 'react-multi-carousel/lib/styles.css';
import useMediaQuery from '@mui/material/useMediaQuery';

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

   const isMobile = useMediaQuery("(max-width:500px)");
   const isTablet = useMediaQuery("(max-width:800px)");

   const [newWidth, setNewWidth] = useState(600)
   const [newHeight, setNewHeight] = useState(400)

   useEffect(() => {
    if (isMobile){
      setNewWidth(340);
      setNewHeight(270);
    }}, [isMobile, newWidth, newHeight])

  return (
    <div className={styles.container}>
      <Carousel
        slidesToSlide={1}
        responsive={responsiveImageHero}
        infinite={true}
        autoPlay ={true}
        autoPlaySpeed={6000}
        div className={styles.carouselDiv}
      >
        {images.map((image, index) =>
          <div className={styles.carouselContainer} key={index}>
            <Image
              className={styles.carouselImg}
              alt='hero'
              src={image}
              width={isTablet ? newWidth : 800}
              height={isMobile ? 280 : 475}
              style={{
                objectPosition: 'center center',
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
