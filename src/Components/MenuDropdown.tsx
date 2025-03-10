import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion'



const MenuDropDown = ({ open, close }: { open: boolean, close: () => void }) => {



    return (
        <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-[5rem] right-0 w-full h-full z-30 grid place-items-center bg-[rgba(117, 126, 172, 0.5)] bg-opacity-25 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"
                }`}
        >
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: open ? '0%' : '-100%' }}
                transition={{ duration: 0.4 }}
                className="h-full w-[66%] left-0 fixed bg-gradient-to-br from-[#0f0c29] via-[#1e3c72] to-[#24243e] flex flex-col gap-[100px]"
            >
                <div className="w-full flex  h-max py-4 pl-4">
                    <ul className="flex flex-col px-[1rem] gap-[30px] w-full" >
                        <Link href="#Home">
                            <li className="hover:text-[#c07a5c]" onClick={() => close()}>Home</li>
                        </Link>
                        <Link href="#About-me" onClick={() => close()}>
                            <li className="hover:text-[#c07a5c]" onClick={() => close()}>About me</li>
                        </Link>
                        <Link href="#Tech-Stack" onClick={() => close()}>
                            <li className="hover:text-[#c07a5c]">Tech Stack</li>
                        </Link>
                        <Link href="#Projects" onClick={close}>
                            <li className="hover:text-[#c07a5c]" onClick={() => close()}>Projects</li>
                        </Link>

                    </ul>
                </div>

                {/* Footer Section */}
                <div className="border-t border-gray-700 p-4 flex justify-center">
                    <div className="flex flex-col gap-3 text-sm text-gray-400">
                        <div className="flex gap-4">
                            <Link href="mailto:j.s.oebhohon@gmail.com" className="hover:text-[#c07a5c] transition-colors ">
                                Contact
                            </Link>
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" transition-colors hover:text-[#c07a5c]"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" transition-colors hover:text-[#c07a5c]"
                            >
                                GitHub
                            </a>
                        </div>
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Your Name. All rights reserved.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.aside>
    );
};

export default MenuDropDown;
