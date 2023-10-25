"use client"
import React from "react";
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className='grid grid-cols-1 sm:grid-cols-12'> 
                <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{duration:0.5}} 
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
                >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2FFD8] to-[#4C83FF]">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Rob',
                                1000, 
                                'a Web Developer',
                                1000,
                                'a Software Engineer',
                                1000,
                                'a Musician',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Welcome to my portfolio. From our screens to the stage, I aim to provide users with the best experience possible. 
                    </p>
                    <div>
                        <Link 
                            href='#contact'
                            title="Contact"
                            className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-black bg-gradient-to-r  from-[#C2FFD8] via-blue-400 to-[#4C83FF]">
                            Hire Me
                        </Link>
                        <button className="px-1 py-1 w-full rounded-full sm:w-fit bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-r  from-[#C2FFD8]  via-blue-400 to-[#4C83FF]">
                            <a className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                               href="resume/RobertHess_Resume.docx.pdf"
                               download="Resume"
                               alt="download resume button"
                               target="_blank"
                               rel="noopener noreferrer">Download Resume</a>
                        </button>
                    </div>
                </motion.div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                        <Image 
                            src='/images/noback.png'
                            alt='Profile Picture'
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection