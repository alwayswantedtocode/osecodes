"use client"
import { RefObject, useRef,useState } from "react"

const useMenuNavigate = () => {
    const homeRef = useRef(null)
    const stackRef = useRef(null)
    const projectRef = useRef(null)
    const aboutRef = useRef(null)

    const [isMenuopened, setIsMenuopened] = useState(false)
    
    const toggleMenu=() => {
        setIsMenuopened(!isMenuopened)
    }
    const closeMenu=() => {
        setIsMenuopened(false)
    }

    const scrollToSection = (ref: RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }


    return {
        homeRef,
        stackRef,
        projectRef,
        aboutRef,
        scrollToSection,
        isMenuopened,
        setIsMenuopened,
        toggleMenu,
        closeMenu
    }
}

export default useMenuNavigate