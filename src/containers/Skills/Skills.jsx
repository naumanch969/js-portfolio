import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';


const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skdills, setSkills] = useState([]);


    const skills = [
        { name: 'css', percentage: '70' },
        { name: 'javascript', percentage: '80' },
        { name: 'html', percentage: '43' },
        { name: 'react js', percentage: '60' },
        { name: 'redux', percentage: '100' },
        { name: 'redux thunk', percentage: '30' },
        { name: 'node js', percentage: '79' },
        { name: 'expres js', percentage: '80' },
        { name: 'mongoose', percentage: '95' },
        { name: 'mongoDB', percentage: '92' },
        { name: 'RESTful API', percentage: '20' },
        { name: 'figma', percentage: '74' },
        { name: 'adobe XD', percentage: '83' },
        { name: 'photoshop', percentage: '72' },
        { name: 'illustrator', percentage: '67' },
        { name: 'canva', percentage: '50' },
    ]



    return (
        <div className='md:py-[5rem] sm:py-[3rem] py-[2rem] sm:px-[2rem] px-[1rem] flex flex-col items-center md:gap-[2rem] gap-0 ' >

            <h2 className="md:text-[3rem] sm:text-[40px] text-[32px] font-bold text-center text-black-color capitalize">Skills & Experiences</h2>

            <div className="w-full md:mt-[3rem] mt-[2rem] flex justify-center flex-row flex-wrap gap-[2rem] ">
                {
                    skills?.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="md:min-w-[25rem] md:w-[46%] sm:w-[85%] w-full flex justify-center items-center text-center transition-all "
                        >
                            <div className="hover:shadow flex justify-center items-center px-[1rem] py-[2px] min-w-max w-fit h-fit rounded-[4px] bg-secondary-color flex-col " >
                                <p className="text-white capitalize ">{skill.name}</p>
                            </div>
                            {/* skillbar */}
                            <div className='w-full h-[10px] relative bg-primary-color rounded-[8px] left-[-10px] ' >
                                <span className="absolute left-0 h-full rounded-[8px] bg-secondary-color " style={{ width: `${skill.percentage}%` }} />
                                <span className="text-[12px] absolute top-[1rem] w-[32px] h-[20px] bg-secondary-color text-primary-color rounded-[4px] flex justify-center items-center before:content-[''] before:absolute before:top-[-12px] before:w-0 before:h-0 before:border-[6px] before:border-transparent before:border-b-secondary-color " style={{ left: `${skill.percentage - 6}%` }} >{skill.percentage}%</span>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>

    );
};

export default AppWrap(
    MotionWrap(Skills, 'flex-1 w-full flex-col '),
    "skills",
    "bg-white-color"
);