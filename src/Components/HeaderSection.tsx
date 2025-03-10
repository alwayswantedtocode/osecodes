"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaDownload } from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/link'


const HeaderSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            id='Home'
            className="relative min-h-screen flex items-center justify-center  py-5 px-4 sm:px-6 lg:px-8 overflow-hidden "
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-1 flex flex-col md:flex-row items-center gap-12 px-6 ">
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-lg font-medium bg-[#c07a5c] text-grey-600 w-max flex items-center rounded justify-center py-[7px] px-[10px]"
                        >
                            Hello, I&apos;m
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-5xl font-bold text-slate-100 leading-tight"
                        >
                            Osatohamhen Ebhohon
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="text-2xl text-gray-800 font-medium bg-[#c07a5c] rounded text-grey-600 w-max flex items-center justify-center py[7px] px-[10px]"
                        >
                            JavaScript & React Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                            className="text-lg text-slate-100 leading-relaxed max-w-2xl"
                        >
                            A passionate frontend developer specializing in React.js, Next.js, and modern web technologies.
                            I create responsive, user-friendly interfaces with a focus on performance and clean code.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="#contact"
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#c07a5c] text-gray-800 rounded-lg shadow-lg hover:bg-[#f2d2c5] transition-all duration-300 hover:shadow-xl"
                        >
                            <FaEnvelope className="w-5 h-5" />
                            Contact Me
                        </Link>

                        <a
                            href="/Osatohamhen Frontend Resume new.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#c07a5c] text-slate-100 rounded-lg hover:bg-blue-50 hover:text-gray-800 transition-all duration-300"
                        >
                            <FaDownload className="w-5 h-5" />
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="hidden lg:block w-[400px] h-[400px] relative rounded-full overflow-hidden border-8 border-white shadow-2xl"
                >
                    <Image
                        src="/USE FOR CV.jpg"
                        alt="Osetohamhen Ebhohon"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority
                    />
                </motion.div>
            </div>
          
        </motion.section>
    )
}

export default HeaderSection