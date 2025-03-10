"use client"
import Link from "next/link"
import { FaGithub, FaLinkedin,  FaEnvelope } from "react-icons/fa"

interface SocialLink {
    name: string
    href: string
    icon: React.ReactNode
}

interface FooterLink {
    title: string
    links: {
        name: string
        href: string
    }[]
}

const Footer = () => {
    const footerLinks: FooterLink[] = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", href: "#Home" },
                { name: "Projects", href: "#Projects" },
                { name: "Tech Stack", href: "#Tech-Stack" },
                { name: "About me", href: "#About-me" },
                { name: "Contact", href: "#contact" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "GitHub", href: "https://github.com/alwayswantedtocode" },
                { name: "Resume", href: "/Osatohamhen Frontend Resume new.pdf" },
            ],
        },
    ]

    const socialLinks: SocialLink[] = [
        {
            name: "GitHub",
            href: "https://github.com/alwayswantedtocode",
            icon: <FaGithub className="w-6 h-6" />,
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/osatohamhen-ebhohon-7746991b4",
            icon: <FaLinkedin className="w-6 h-6" />,
        },

        {
            name: "Email",
            href: "mailto:j.s.oebhohon@gmail.com" ,
            icon: <FaEnvelope className="w-6 h-6" />,
        },
    ]


    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Branding Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Osecodes</h2>
                        <p className="text-sm">
                            Full Stack Developer specializing in modern web applications.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#c07a5c] transition-colors duration-300"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm hover:text-[#c07a5c] transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <div className="space-y-2 text-sm">
                            <p>Lagos, Nigeria</p>
                            <p>j.s.oebhohon@gmail.com</p>
                            <p className="hover:text-[#c07a5c] "> <a href="tel:+2349136117011">+234 913 611 7011</a></p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Osecodes. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
