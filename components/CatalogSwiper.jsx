"use client"


import {TbArrowUpRight} from "react-icons/tb"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "../utils/animation";

export default function CatalogSwiperSection(){
    return (
        <div className="py-8 lg:py-28">
            <div className="w-3/4 mx-auto grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern Classic</motion.h1>
                    <motion.h2 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="pb-6 text-xl font-bold tracking-wider mt-5">LUXURY DECOR TO CREATE COMFORT IN OUR HOME</motion.h2>
                </div>

                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="grid grid-cols-2 text-gray-500 gap-x-8">
                    <p>
                       Our approach combines sophistication with comfort to enhance your living space.
                       We bring a touch of elegance and style to every corner of your home.
                       Let our expert designers craft a space that reflects your personal taste.
                       Transform your environment into a haven of relaxation and beaut
                    </p>
                    <p>Elevate your home with a blend of modern and classic elegance.
                       Our bespoke decor solutions combine style and comfort seamlessly.
                       Every detail is crafted to create a luxurious and inviting atmosphere.
                       Transform your space into a sanctuary of beauty and relaxation.
                    </p>
                </motion.div>

                <a href="/gallery">
                    <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full
                    shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">View Gallery <TbArrowUpRight className="w-5 h-5 ml-2"/> </Button>
                </a>
            </div>
            
            {/* Swiper */}
            <Swiper
            sliderPerView={1}
            breakpoints={{
                640:{
                    slidesPerView : 2,
                    spaceBetween: 20
                },
                1024:{
                    slidesPerView : 3,
                    spaceBetween: 20
                },
            }}
            autoplay={{delay : 2500 , disableOnInteraction: false}}
            modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image
                    src={"/image/swiper1.jpg"}
                    alt="swiper"
                    width={520}
                    height={220}
                    className="w-full cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image
                    src={"/image/swiper2.jpg"}
                    alt="swiper"
                    width={520}
                    height={220}
                    className="w-full cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image
                    src={"/image/swiper3.jpg"}
                    alt="swiper"
                    width={520}
                    height={220}
                    className="w-full cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image
                    src={"/image/swiper4.jpg"}
                    alt="swiper"
                    width={520}
                    height={220}
                    className="w-full cursor-pointer"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image
                    src={"/image/swiper5.jpg"}
                    alt="swiper"
                    width={520}
                    height={220}
                    className="w-full cursor-pointer"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}