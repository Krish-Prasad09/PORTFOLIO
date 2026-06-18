import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Projects/Projects.css'
import { slidesData } from '../../jsfiles/project';
const Projects = () => {

    const swipperWrappedRef = useRef(null);

    function adjustMargin(){
        const screenWidth = window.innerWidth;

        if(swipperWrappedRef.current){
            swipperWrappedRef.current.style.marginLeft = screenWidth<=520?"0px":screenWidth<=650?"-50px":screenWidth<=800?"-100px":"-150px"
        }
    }

    useEffect(()=>{
        
        adjustMargin();
        window.addEventListener("resize",adjustMargin);
        return ()=> window.removeEventListener("resize",adjustMargin);
    })

  return (
    <main className='projects-page'>
    <div className='container'>
        <h2 className='projects-heading  text-[#51A2FF]'>MY PROJECTS</h2>
        <Swiper 
            modules={[Pagination]}
            grabCursor
            initialSlide={2}
            centeredSlides
            slidesPerView={'auto'}
            speed={800}
            slideToClickedSlide
            pagination={{clickable:true}}
            breakpoints={{
                320: {spaceBetween: 40},
                650: {spaceBetween: 30},
                1000: {spaceBetween: 20}
            }}
            onSwiper={(swiper)=>{
                swipperWrappedRef.current = swiper.wrapperEl;
            }}
        >
            {slidesData.map((slide,index)=>(
                <SwiperSlide key={index}>
                    <img className='contain' src={slide.imgSrc} alt={slide.title} />
                    <div className='title'>
                        <h1>{slide.title}</h1>
                    </div>
                    <div className="content">
                        <div className="text-box">
                            <p>{slide.description}</p>
                        </div>
                        <div className='footer'>
                            <div className="category">
                                {slide.categories.map((category,idx)=>(
                                    <span key={idx} style={{'--i':idx+1}}>{category}</span>
                                ))}
                            </div>
                            <button className="px-4 py-2 flex items-center justify-center bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200">
                             <span className="label px-2 text-xl"><a href={slide.visit} target="_blank">Visit</a></span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
</main>

  )
}

export default Projects
