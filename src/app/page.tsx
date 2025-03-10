import HeaderSection from '@/Components/HeaderSection'
import ProjectsSection from '@/Components/ProjectsSection'
import SkillSection from '@/Components/SkillSection'
import React from 'react'
import AboutMe from "@/Components/AboutMe"
import ContactForm from '@/Components/ContactMe'


const page = () => {
  return (
    <>
      <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 ">
        <HeaderSection />
        <AboutMe />
        <SkillSection />
        <ProjectsSection />
        <ContactForm />
      </main>
    </>
  )
}

export default page