"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "../utils/animation";

const AboutComponent = ()=>{
    return (
        <div className="w-3/4 mx-auto py-12 xl:py-24 h-auto">
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                >
                    <Image
                    src="/image/aboutfront.png"
                    width={900}
                    height={500}
                    alt=""
                    className="max-md:hidden"
                    />
                </motion.div>

                <div className="items-center">
                    <motion.h2 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-[41px]">We are awards Winning Company</motion.h2>
                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="px-12 tracking-wider uppercase mt-3 text-gray-500">World Awards</motion.p>
                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="mt-4 px-12 pb-4">
                        This is a company engaged in the field of interior design. We provide the best
                        interior design for your home. We have been trusted by many people to design their homes.
                        We have also recevied many awards form various countries for our work.
                    </motion.p>
                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="px-12 pb-4">
                        This is a company engaged in the field of interior design. We provide the best
                        interior design for your home. We have been trusted by many people to design their homes.
                        We have also recevied many awards form various countries for our work.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent;