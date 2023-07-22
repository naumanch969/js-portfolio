import { useState } from "react"
import { AppWrap, MotionWrap } from "../../wrapper"
import { images } from "../../constants"
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true)
        console.log('submition of form')
        setLoading(false)
    }

    return (
        <div className='md:py-[5rem] sm:py-[3rem] py-[2rem] sm:px-[2rem] px-[1rem] flex flex-col items-center md:gap-[2rem] gap-[2rem] ' >

            <h2 className="lg:text-[3rem] md:text-[2.8rem] sm:text-[40px] text-[32px] font-bold text-center text-black-color capitalize">Take a coffee & chat with me</h2>


            <div className='flex flex-col gap-[2rem] w-full ' >
                <div className=" flex justify-center items-center md:flex-row flex-col gap-[1rem] " >
                    <div className="flex flex-row justify-start items-center gap-[1rem] rounded-[8px] cursor-pointer bg-white border-[1px] border-black transition-all w-fit md:p-[12px] px-[8px] py-[4px] " >
                        <MdEmail className='w-[20px] h-[20px] ' />
                        <a href='mailto:hello@micail.com' className=" text-gray-color text-[18px] font-medium " >naumanch969@gmail.com</a>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[1rem] rounded-[8px] cursor-pointer bg-white border-[1px] border-black transition-all w-fit md:p-[12px] px-[8px] py-[4px] " >
                        <FaPhone className='w-[20px] h-[20px] ' />
                        <a href='tel: +923055712534' className=" text-gray-color text-[18px] font-medium " >+923055712534</a>
                    </div>
                </div>



                <div className="w-full flex justify-center items-center flex-col gap-[1rem] " >
                    <div className="flex justify-center items-center w-full rounded-[8px] cursor-pointer bg-primary-color transition-all " >
                        <input className="w-full p-[1rem] border-none rounded-[8px] bg-primary-color text-secondary-color outline-none " type="text" placeholder="Your Name" value={name} name="name" onChange={handleChange} />
                    </div>
                    <div className="flex justify-center items-center w-full rounded-[8px] cursor-pointer bg-primary-color transition-all " >
                        <input className="w-full p-[1rem] border-none rounded-[8px] bg-primary-color text-secondary-color outline-none " type="email" placeholder="Your Email" value={email} name="email" onChange={handleChange} />
                    </div>
                    <div className='w-full rounded-[8px] cursor-pointer bg-primary-color transition-all  ' >
                        <textarea
                            className="hover:shadow w-full p-[1rem] border-none rounded-[8px] bg-primary-color text-secondary-color outline-none resize-none "
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" className="text-[18px] px-[1rem] py-[8px] rounded-[8px] border-none bg-secondary-color text-white-color outline-none cursor-pointer " onClick={handleSubmit} >{loading ? 'Sending' : 'Send Message'}</button>
                </div>
            </div>

        </div>
    )
}

export default AppWrap(
    MotionWrap(Contact, 'flex-1 w-full flex-col '),
    "contact",
    "bg-white-color"
)
