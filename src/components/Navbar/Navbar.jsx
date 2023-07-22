import { images } from "../../constants"
import { useState, useEffect } from "react"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from "framer-motion"
import "./Navbar.scss"

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        console.log('toggle', toggle)
    }, [toggle])

    return (
        <nav style={{ backdropFilter: 'blur(4px)' }} className="z-50 md:px-[4rem] sm:px-[2rem] px-[1rem] h-[4rem] w-full flex justify-between items-center bg-[rgba(255,255,255,.25)] border-[1px] border-[rgba(255,255,255,0.18)] fixed " >
            <div className="app__navbar-logo flex justify-start items-center " >
                <h3 style={{ fontFamily: 'cursive' }} className='uppercase text-[2rem] font-bold text-secondary-color ' >Nauman</h3>
            </div>


            {/* desktop navbar */}
            <ul className="md:flex hidden justify-center items-center gap-[1rem] " >
                {
                    ['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                        <li className="flex justify-center items-center gap-[4px] text-left text-gray-color cursor-pointer " key={index}>
                            <div className='w-[6px] h-[6px] bg-transparent rounded-full ' />
                            <a href={`#${item}`} className='flex-col uppercase font-medium transition-all hover:text-secondary-color text-[18px] ' >{item}</a>     {/* scroll to the div of id {item} */}
                        </li>
                    ))
                }
            </ul>


            {/* mobile navbar */}
            <div className="md:hidden flex justify-center items-center relative " >
                <HiMenuAlt4 onClick={() => setToggle(true)} className='w-[30px] h-[30px] cursor-pointer text-white-color bg-secondary-color rounded-full ' />
                {
                    <motion.div
                        style={{ boxShadow: '0 0 20px rgba(168,168,168 ,.15)', background: "url('../../assets/bgWhite.png')", backgroundColor: 'white' }}
                        className='fixed top-0 bottom-0 right-0 p-[1rem] sm:w-[50%] w-[70%] rounded-[2px] h-screen flex justify-end items-end flex-col bg-white-color bg-repeat bg-cover  '
                        animate={{ x: toggle ? [300, 0] : [0, 500] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} className='w-[30px] h-[30px] cursor-pointer text-secondary-color' />
                        <ul style={{ listStyle: 'none' }} className='m-0 p-0 w-full h-full flex justify-start items-start flex-col gap-[1rem] py-[2rem] ' >
                            {
                                ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                    <li key={item} className='' >
                                        <a href={`#${item}`} onClick={() => setToggle(false)} className='text-gray-color hover:text-secondary-color text-[1rem] uppercase font-medium transition-all ' >{item}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>
                }
            </div>

        </nav>
    )
}

export default Navbar
