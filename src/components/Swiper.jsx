import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function MySwiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className='relative'> <div className='absolute h-[100px]'></div><img src="public/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682_VP5-1920x600.avif" alt="" /></div></SwiperSlide>
        <SwiperSlide><img src="public/Highlight-Surface-Laptop-AI-7Ed-Sapphire-MC001-3000x1682_VP5-1920x600.avif" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
