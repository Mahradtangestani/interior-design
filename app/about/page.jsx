"use client"

import Image from "next/image";
import { Button } from "../../components/ui/button";
import {TbArrowUpRight} from "react-icons/tb"

import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "../../utils/animation";
import { useRef } from "react";

const About = ()=>{
     
    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end" , "end end"]
    })
    
    const scale = useTransform(scrollYProgress, [0 , 1] , [.6 , 1])

    return (
        <div>
            <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
                <h1 className="text-black w-3/4 mx-auto py-32 text-6xl font-semibold tracking-widest text-center
                lg:py-64">Who Are We?</h1>
            </div>

            <div className="w-3/4 mx-auto">
                <div className="pt-4">
                    <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl">We have great idea & Interior Design</motion.h2>
                    <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="text-2xl text-center font-medium pb-10 mt-5">
                    Discover innovative and stylish interior design solutions with us.
                    Our expert team crafts unique spaces that reflect your vision and lifestyle.
                    Transform your home with our creative ideas and exceptional design expertise.
                    </motion.p>
                </div>

                <div className="items-center lg:flex gap-x-8">
                    <motion.div
                    style={{scale}}
                    ref={ref}
                    className="w-full">
                        <Image src={"/image/gallery1123.jpg"} width={700} height={700} alt=""/>
                    </motion.div>
                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    >
                        <p className="pb-8 tracking-wide mt-6">Discover Innovative Interior Design Solutions
                            Our team specializes in creating personalized and stylish spaces tailored to your needs.
                            We combine creativity with expertise to bring your vision to life.
                            Experience the difference with our exceptional design services and attention to detail. <br/><br/>
                            Transform Your Home with Our Expertise
                            We offer unique and elegant interior design solutions that reflect your personal style.
                            Our professional team is dedicated to crafting spaces that are both functional and beautiful.
                            Let us help you create a home that you’ll love coming back to every day. <br/><br/>
                            <span className="text-xl font-extrabold tracking-tight">
                            We deliver creative and personalized interior solutions that transform your home into a stylish haven.
                            </span>
                        </p>
                        <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800
                        hover:ring-2 hover:ring-gray-950 ring-offset-2">Read More <TbArrowUpRight className="w-5 h-5 ml-2"/></Button>
                    </motion.div>
                </div>

                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <motion.h1
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="text-4xl font-bold tracking-wider text-center">Team</motion.h1>
                    </div>
                    <div className="grid py-8 gap-20 lg:grid-cols-3">
                        <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="border-2 border-primary">
                            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition
                            hover:-translate-y-3 hover:-translate-x-3">
                                <Image src={"/image/profile2.jpg"} width={200} height={200} alt="" className="mx-auto rounded-full"/>
                                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                                <p className="text-sm">Creativity is the ability to generate, create, or discover new ideas, solution and possibilities.</p>
                            </div>
                        </motion.div>
                        <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="border-2 border-primary">
                            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition
                            hover:-translate-y-3 hover:-translate-x-3">
                                <Image src={"/image/profile1.jpg"} width={200} height={200} alt="" className="mx-auto rounded-full"/>
                                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                                <p className="text-sm">Creativity is the ability to generate, create, or discover new ideas, solution and possibilities.</p>
                            </div>
                        </motion.div>
                        <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="border-2 border-primary">
                            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition
                            hover:-translate-y-3 hover:-translate-x-3">
                                <Image src={"/image/profile3.jpg"} width={200} height={200} alt="" className="mx-auto rounded-full"/>
                                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                                <p className="text-sm">Creativity is the ability to generate, create, or discover new ideas, solution and possibilities.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;