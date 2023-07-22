import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { images } from "../../constants"
import { Person1, Person2, Person3, Person4, Person5 } from '../../assets'


const Testimonials = () => {

    const [brands, setBrands] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)



    const testimonialsExp = [
        { name: "ali ahsan ", company: "google", feedback: "Nauman built an amazing website for us that exceeded our expectations. Visually stunning, highly functional, and improved our online presence. Highly recommended!", imgUrl: Person1 },
        { name: "hassan khan", company: "MDN", feedback: "Nauman revamped my outdated website and the results were phenomenal. User-friendly, modern design, and increased online sales.", imgUrl: Person2 },
        { name: "anika imtiaz", company: "devLoop", feedback: "Nauman's expertise in web development is impressive. Creative problem-solving skills, timely delivery, and a website that exceeded my expectations.", imgUrl: Person3 },
        { name: "john harley", company: "infinix", feedback: "Working with Nauman was a breeze. Prompt communication, visually appealing website, strong online presence. Would work with him again.", imgUrl: Person4 },
        { name: "raja mansha", company: "devLoop", feedback: "Nauman is a top-notch web developer. Professional, skilled, and delivered a website that truly represents my business. I'm thrilled with the results!", imgUrl: Person5 },
    ]

    const brandsExp = [
        { _id: "1", name: "facebook", imgUrl: images.python },
        { _id: "2", name: "google", imgUrl: images.react },
        { _id: "3", name: "netflix", imgUrl: images.mu5 },
        { _id: "4", name: "britix", imgUrl: images.node },
    ]




    const handleClick = (index) => {
        setCurrentIndex(index)
    }







    const test = testimonialsExp[currentIndex]

    return (
        <div className='md:py-[5rem] sm:py-[3rem] py-[2rem] sm:px-[2rem] px-[1rem] flex flex-col items-center md:gap-[2rem] gap-[2rem] ' >
            <h2 className="lg:text-[3rem] md:text-[2.8rem] sm:text-[40px] text-[32px] font-bold text-center text-black-color capitalize">What they say about us</h2>

            {testimonialsExp.length &&
                <div className='md:mt-[3rem] mt-[1rem] flex flex-col justify-center items-center ' >

                    <div className="flex flex-col justify-between items-center gap-[2rem] p-[2rem] lg:w-[60%] md:w-[70%] sm:w-[90%] w-[90%] bg-white-color rounded-[8px] shadow transition-all "  >
                        <p className="md:text-[22px] text-black-color text-center " >{test.feedback}</p>
                        <div className='flex justify-center items-center gap-[1rem] ' >
                            <img src={test.imgUrl} alt="testimonials" className='w-[5rem] h-[5rem] rounded-full object-cover' />
                            <div className='flex flex-col items-start  ' >
                                <h4 className="text-[24px] capitalize font-semibold text-secondary-color " >{test.name}</h4>
                                <h4 className="text-[20px] text-gray-color" >{test.company}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-[1rem] mt-[1rem] " >
                        <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white-color transition-all cursor-pointer hover:bg-secondary-color " onClick={() => handleClick(currentIndex === 0 ? testimonialsExp.length - 1 : currentIndex - 1)} >
                            <HiChevronLeft className='w-[24px] h-[24px] text-secondary-color hover:text-white-color ' />
                        </div>
                        <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white-color transition-all cursor-pointer hover:bg-secondary-color " onClick={() => handleClick(currentIndex === testimonialsExp.length - 1 ? 0 : currentIndex + 1)} >
                            <HiChevronRight className='w-[24px] h-[24px] text-secondary-color hover:text-white-color ' />
                        </div>
                    </div>

                </div>
            }



            <div className="app__testimonials-brands flex items-center md:w-[80%] flex-wrap justify-between w-full ">
                {/* brands.map((brand) => ( */}
                {
                    brands.map((brand) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: .5, type: "tween" }}
                            key={brand._id}
                            className=''
                        >
                            <img src={brand.imgUrl} alt={brand.name} style={{ filter: 'gray-scale(1)' }} className='w-full h-auto object-cover  ' />
                        </motion.div>
                    ))
                }
                {/* <img src={brand.imgUrl} alt={brand.name} /> */}
            </div>
        </div>

    )
}











export default AppWrap(
    MotionWrap(Testimonials, 'flex-1 w-full flex-col '),
    "testimonials",
    "app__priamrybg"
);