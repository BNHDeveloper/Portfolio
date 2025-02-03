import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SlideCarousel.css';
import portfolio from '../../static/avatar-2.png';
import portfolio2 from '../../static/avatar-3.png';
// import required modules
import { Pagination } from 'swiper/modules';

export const SlideCarousel = () => {
    return (
            <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='box'>
                    <div className='image flex'>
                        <img src={portfolio} alt="person" />
                    </div>
                    <div className='info'>
                        <h4>nour el-houda</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='box'>
                    <div className='image flex'>
                        <img src={portfolio2} alt="person" />
                    </div>
                    <div className='info'>
                        <h4>nour el-houda</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='box'>
                    <div className='image flex'>
                        <img src={portfolio} alt="person" />
                    </div>
                    <div className='info'>
                        <h4>nour el-houda</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default SlideCarousel;
