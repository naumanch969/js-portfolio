import { AppWrap, MotionWrap } from "../../wrapper"
import { motion } from 'framer-motion';
import { images } from "../../constants"

const About = () => {

    const abouts = [
        { title: "Frontend Developer", description: "I am a frontend developer passianate to build beautiful and functional web applications.", imgUrl: images.about01 },
        { title: "Backend Developer", description: "I am a frontend developer passianate to build beautiful and functional web applications.", imgUrl: images.about02 },
        { title: "MERN Stack Developer", description: "I am a frontend developer passianate to build beautiful and functional web applications.", imgUrl: images.about03 },
        { title: "Web Developer", description: "I am a frontend developer passianate to build beautiful and functional web applications.", imgUrl: images.about04 },
    ]


    return (
        <div className='md:py-[5rem] sm:py-[3rem] py-[2rem] sm:px-[2rem] px-[1rem] flex flex-col items-center md:gap-[2rem] gap-[2rem] ' >

            <h2 className="lg:text-[3rem] md:text-[2.8rem] sm:text-[40px] text-[32px] font-bold text-center text-black-color capitalize">I Know that <span className='text-secondary-color ' >Good Design</span> <br />means  <span className='text-secondary-color '>Good Business</span></h2>





            <div className="flex justify-center items-start flex-wrap gap-[1rem] ">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="flex cursor-default justify-start items-start flex-col gap-[4px] w-[15rem] p-[8px] bg-gray-200 rounded-[8px] "
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} className='w-full h-[10rem] rounded-[8px]  ' />
                        <h2 className="text-[18px] font-semibold text-black-color text-left ">{about.title}</h2>
                        <p className="text-[16px] text-gray-color " >{about.description}</p>
                    </motion.div>
                ))}
            </div>




        </div>
    );
};

export default AppWrap(
    MotionWrap(About, 'flex-1 w-full flex-col '),
    "about",
    'bg-white-color'
);