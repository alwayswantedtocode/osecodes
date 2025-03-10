"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import projects from "./ProjectsData"
import { ReactNode } from "react";

type Project = {
    title: string;
    links: { url: string; label: string; icon: ReactNode }[];
    stack: string[];
    achievements: string[];
};


const ProjectsSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

   

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            id='Projects'
            className="relative min-h-screen flex items-center justify-center  py-5 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/30"
        >
        
            <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-gray-800 text-center mb-12 relative"
                >
                    Featured Projects
                    <span className="absolute bottom-0 left-1/2 w-16 md:w-24 h-1 bg-gray-800 -translate-x-1/2 translate-y-2 rounded-full" />
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
interface ProjectItemsProps{
    project: Project;
    index: number ;
}
function ProjectItem({ project, index }: ProjectItemsProps) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <div className="flex space-x-3">
                    {project.links.map((link, idx) => (
                        <a
                            key={`${link.label}-${idx}`}
                            href={link.url}
                            title={link.label}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">{link.label}</span>
                            
                            {/* {React.cloneElement(link.icon, { className: 'w-5 h-5' })} */}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, idx) => (
                    <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 * (index || 0) + idx * 0.05 }}
                        className="px-3 py-1 bg-[#f2d2c5] text-grey-600 rounded-full text-sm"
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            <ul className="space-y-3">
                {project.achievements.map((achievement, idx) => (
                    <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 * (index || 0) + idx * 0.1 }}
                        className="flex items-start text-gray-600"
                    >
                        <span className="text-blue-500 mr-2">▹</span>
                        {achievement}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default ProjectsSection