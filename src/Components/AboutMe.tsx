"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdOutlineWork, MdSchool } from "react-icons/md";
import Image from 'next/image';

const AboutMe = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            id='About-me'
            className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/30"
        >

            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-16 relative"
            >
                About Me
                <span className="absolute bottom-0 left-1/2 w-16 md:w-24 h-1 bg-gray-800 -translate-x-1/2 translate-y-2 rounded-full" />
            </motion.h2>

            <div className="relative z-10 w-full max-w-7xl mx-auto lg:flex  lg:flex-row-reverse items-center flex flex-col gap-8 md:gap-16 px-4 sm:px-6">
                {/* Image Container - Order 1 on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-full max-w-[300px] md:max-w-[400px] aspect-square relative rounded-2xl overflow-hidden shadow-xl md:shadow-2xl hover:shadow-2xl transition-shadow duration-300 order-1  md:hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                    <Image
                        src="/USE FOR CV.jpg"
                        alt="Osetohamhen Ebhohon"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 80vw, 400px"
                        priority
                    />
                </motion.div>

                {/* Text Content - Order 2 on mobile */}
                <div className="w-full flex-1 space-y-6 md:space-y-8 order-2 md:order-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="prose-sm md:prose-lg text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg"
                    >
                        <p className="text-base md:text-lg mb-3 md:mb-4">
                            An enthusiastic self-taught junior frontend developer with a strong foundation in
                            <span className="text-blue-600 font-medium"> TypeScript</span>,
                            <span className="text-blue-600 font-medium"> JavaScript</span>, and modern frameworks like
                            <span className="text-blue-600 first-letter:font-medium"> React.js</span>,
                            <span className="text-blue-600 font-medium"> Next.js</span>, and
                            <span className="text-blue-600 font-medium"> Redux Toolkit</span>.
                        </p>
                        <p className="text-base md:text-lg">
                            I specialize in building scalable, user-centric web applications through hands-on
                            experience developing solo projects. Currently seeking opportunities to contribute
                            my technical expertise in a collaborative tech environment.
                        </p>
                    </motion.div>

                    {/* Desktop Stats Grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                    <MdOutlineWork className="text-3xl text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                                <p className="text-2xl font-semibold text-blue-600">2+ years</p>
                                <p className="text-gray-600">Frontend Development</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 }}
                            className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#c07a5c]"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="mb-4 p-3 bg-[#f2d2c5] rounded-full">
                                    <MdSchool className="text-3xl text-[#c07a5c]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Education</h3>
                                <p className="text-gray-600">B.ENG Degree</p>
                                <p className="text-lg font-semibold text-[#c07a5c]">Electrical & Electronics</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Image Container - on Destop */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-full max-w-[300px] lg:max-w-[400px] aspect-square relative rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-2xl transition-shadow duration-300 hidden lg:flex"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                    <Image
                        src="/USE FOR CV.jpg"
                        alt="Osetohamhen Ebhohon"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 80vw, 400px"
                        priority
                    />
                </motion.div>

                {/* Mobile Stats Grid - Order 3 */}
                <div className="w-full grid grid-cols-1 gap-4 md:hidden order-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
                    >
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="mb-2 p-2 bg-blue-100 rounded-full">
                                <MdOutlineWork className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Experience</h3>
                            <p className="text-xl font-semibold text-blue-600">2+ years</p>
                            <p className="text-sm text-gray-600">Frontend Development</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 }}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500"
                    >
                        <div className="flex flex-col items-center text-center space-y-2">
                            <div className="mb-2 p-2 bg-purple-100 rounded-full">
                                <MdSchool className="text-2xl text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Education</h3>
                            <p className="text-sm text-gray-600">B.ENG Degree</p>
                            <p className="text-base font-semibold text-purple-600">Electrical & Electronics</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutMe
