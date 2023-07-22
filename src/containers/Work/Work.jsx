import { useState, useEffect } from "react"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import { AppWrap, MotionWrap } from "../../wrapper"
import { images } from "../../constants"

const Work = () => {

    const works = [
        { title: "exercises app", projectLink: "https://ncexercises.netlify.app", github: "https://github.com/naumanch969/exercises", imgUrl: images.about01, tag: "tag", tag: "react" },
        { title: "bank landing page", projectLink: "https://ncbank-landing-page.netlify.app", github: "https://github.com/naumanch969/bank-UI-landing-page", imgUrl: images.about02, tag: "tag", tag: "express" },
        { title: "glint", projectLink: "https://ncglint.netlify.app", github: "https://github.com/naumanch969/glint", imgUrl: images.about03, tag: "tag", tag: "Ui/UX" },
        { title: "youtube clone", projectLink: "https://ncyoutube.netlify.app", github: "https://github.com/naumanch969/react-youtube-clone", imgUrl: images.about01, tag: "tag", tag: "frontend" },
    ]
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
    const [filterWork, setFilterWork] = useState(works);





    const handleWorkFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard({ y: 100, opacity: 0 })

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 })
            if (item === 'All') {
                setFilterWork(works)
            }
            else {
                setFilterWork(works.filter((work) => work.tag.includes(item)))
            }
        }, 500)
    }


    if (!filterWork) return <h1>nothing to show</h1>

    return (
        <div className='md:py-[5rem] sm:py-[3rem] py-[2rem] sm:px-[2rem] px-[1rem] flex flex-col items-center md:gap-[2rem] gap-[2rem] ' >

            <h2 className="md:text-[3rem] sm:text-[40px] text-[32px] font-bold text-center text-black-color capitalize">My Creative <span className='text-secondary-color '>Portfolio</span> Section </h2>

            <div className='flex flex-col items-center justify-center ' >
                <div className="flex justify-center items-center flex-wrap flex-row gap-[1rem] " >
                    {
                        ['UI/UX', 'Web App', 'React', 'MERN', 'All'].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleWorkFilter(item)}
                                className={`flex justify-center items-center text-[1rem] px-[12px] py-[2px]  rounded-[8px] bg-white text-black cursor-pointer transition-all hover:bg-secondary-color hover:text-white ${activeFilter === item ? 'bg-secondary-color text-black ' : ''}`}
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>
                <motion.div
                    animate={animateCard}
                    transition={{ duration: .5, delayChildren: .5 }}
                    className='flex flex-wrap justify-center items-center md:gap-[2rem] gap-[1rem] mt-[2rem] '
                >
                    {
                        filterWork.map((work, index) => (

                            <div className="flex justify-center items-center flex-col sm:w-[16rem] p-[12px] rounded-[8px] bg-white text-black cursor-pointer transition-all hover:shadow " key={index} >
                                <div className="flex justify-center items-center w-full h-[12rem] relative " >
                                    <img src={work.imgUrl} alt={work.name} className='h-full w-full rounded-[8px] object-cover ' />
                                </div>

                                <div className="app__work-content flex justify-center items-center gap-[8px] mt-[8px] w-full relative flex-col " >
                                    {work.tag &&
                                        <div className="flex justify-center items-center absolute p-[6px] rounded-[8px] bg-white top-[-34px] " >
                                            <p className="text-[.8rem] text-left text-gray-color capitalize " >{work.tag}</p>
                                        </div>
                                    }
                                    <h4 className="font-bold text-black-color text-[20px] capitalize " >{work.title}</h4>
                                    <div className="flex justify-end items-center gap-[8px] w-full h-full bg-[rgba(0,0,0,.5] rounded-[8px] transition-all "                                >
                                        <a href={work.github} className='capitalize transition-all border-[1px] border-gray-color bg-white text-black hover:bg-secondary-color hover:text-white px-[6px] py-[1px] rounded-[4px] text-[14px] ' >github</a>
                                        <a href={work.projectLink} className='capitalize transition-all border-[1px] border-gray-color bg-white text-black hover:bg-secondary-color hover:text-white px-[6px] py-[1px] rounded-[4px] text-[14px] ' >visit</a>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(Work, 'flex-1 w-full flex-col '),
    "work",
    'bg-primary-color'
);
// title
// description
// projectLink
// github
// imgUrl
// tag
// tag