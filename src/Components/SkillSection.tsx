"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


// type skillType = Skills[];
const SkillSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            id='Tech-Stack'
            className="flex items-center justify-center  py-5 px-4 sm:px-6 lg:px-8 overflow-hidden "
        >
            <div className="max-w-7xl flex mx-auto flex-col items-center justify-center px-6 ">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-slate-100 text-center mb-12 relative"
                >
                    Tech Stack
                    <span className="absolute bottom-0 left-1/2 w-16 md:w-24 h-1 bg-slate-100 -translate-x-1/2 translate-y-2 rounded-full" />
                </motion.h2>

                {/* Skills Grid */}
                <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    <SkillCategory
                        title="Frontend"
                        skills={[
                            'React.js', 'Next.js', 'Redux Toolkit', 'TypeScript',
                            'Tailwind CSS', 'Material-UI', 'JavaScript (ES6+)'
                        ]}
                        delay={0.4}
                    />
                    <SkillCategory
                        title="Backend/DB"
                        skills={[
                            'Node.js', 'MongoDB', 'Firebase', 'RESTful APIs'
                        ]}
                        delay={0.6}
                    />
                    <SkillCategory
                        title="Tools"
                        skills={[
                            'Git', 'GitHub', 'Webpack', 'Vite', 'Postman'
                        ]}
                        delay={0.8}
                    />
                </div>
            </div>
        </motion.section>
    )
}

type Skills = {
    title: string;
    skills: string[];
    delay: number;
}

function SkillCategory({ title, skills, delay }: Skills) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: delay + index * 0.05 }}
                        className="px-4 py-2  bg-[#f2d2c5] text-grey-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    )
}

export default SkillSection