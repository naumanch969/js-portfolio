import "./Header.scss"
import { motion } from "framer-motion"
import { images } from "../../constants"
import { AppWrap } from "../../wrapper"


const Header = () => {

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],          // change width from 0% to 100%
            opacity: [0, 1],        // change opacity from 0 to 1
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="app__header flex-1 w-full h-full flex-col flex justify-center items-center xl:pt-[8rem] md:flex-col px-[1rem] pt-[5rem] pb-[2rem] sm:px-[2rem] sm:pt-[5rem] sm:pb-0 " >

            {/* my name and skills */}
            <motion.div
                // whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: .5 }}
                className="w-full flex flex-col justify-start items-start h-full"
            >
                <div className="sm:absolute sm:left-[4rem] w-fit justify-start items-start flex flex-col gap-[1rem] " >
                    {/* name */}
                    <div style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }} className="p-[12px] border-[1px] border-white-color rounded-[1rem] flex-col flex justify-center items-start" >
                        <span className='md:text-[2rem] text-[20px] ' > 	&#128075; </span>                {/* waving emoji */}
                        <div className='' >
                            <p className="md:text-[20px] text-[1rem] text-left text-gray-color" >Hello, I am</p>
                            <h1 className="font-bold text-center text-black-color capitalize md:text-[40px] text-[24px] " >Nauman</h1>
                        </div>
                    </div>
                    {/* web developer */}
                    <div style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }} className="p-[12px] border-[1px] border-white-color rounded-[1rem] flex justify-center items-center flex-col " >
                        <p className="md:text-[20px] text-[16px] text-gray-color leading-[1.5] w-full uppercase text-right " >Web Developer</p>
                        <p className="md:text-[20px] text-[16px] text-gray-color leading-[1.5] w-full uppercase text-right " >Freelancer</p>
                    </div>
                </div>
            </motion.div>








            {/* image */}

            <motion.div             // profile image and animated circle in bottom of it
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: .5, delayChildren: .5 }}    // children animation will strt after this duration .5s
                className="flex-1 h-full flex justify-end items-end flex-col relative "
            >
                <img src={images.profile} alt="profile image" className='sm:w-[27rem] w-[25rem] object-contain z-10 ' />
                <motion.img
                    whileInView={{ scale: [0, 1] }}    // change the width of the circle from 0% to 100% - scale propery change the width in proportion - search in google
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile-circle"
                    className="overlay_circle absolute left-0 right-0 bottom-0 z-0 w-full h-[90%] md:my-[2rem] "
                />
            </motion.div>








            {/* technology logos images */}

            <motion.div             // random images around profile image
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles md:w-full md:flex-row md:flex-wrap md:ml-0 flex-1 flex flex-col justify-evenly items-start h-full ml-[1rem] sm:mt-0 mt-[2rem] "
            >
                {[images.react, images.node, images.sass].map((circle, index) => (
                    <div style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }} className="circle-cmp md:m-[1rem] flex justify-center items-center w-[100px] h-[100px] rounded-full bg-white-color  " key={`circle-${index}`} >
                        <img src={circle} alt={circle} className='w-[60%] h-[60%] ' />
                    </div>
                ))}
            </motion.div>

        </div>
    )
}

export default AppWrap(Header, 'home') 