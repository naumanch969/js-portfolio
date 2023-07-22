import { useState } from "react"
import { AppWrap, MotionWrap } from "../../wrapper"
import { images } from "../../constants"


const Footer = () => {

    const [emailValue, setEmailValue] = useState('')

    const handleSubscribe = () => {
        console.log('subscribe')
    }



    return (
        <div className='flex flex-col gap-[2rem] w-full px-[2rem] ' >

            <div className='w-full flex justify-between flex-wrap sm:flex-row flex-col sm:gap-0 gap-[2rem] ' >
                {/* about */}
                <div className='min-w-[4rem] max-w-[18rem] sm:w-fit w-full flex flex-col gap-[12px] ' >
                    <h5 className='capitalize text-[22px] font-bold w-fit ' >about</h5>
                    <p className='' >With a keen eye for detail and a passion for clean code, I strive to create visually appealing and highly functional web applications that deliver an exceptional user experience.</p>
                </div>
                {/* links */}
                <div className='min-w-[4rem] max-w-[18rem] sm:w-fit w-full flex flex-col gap-[12px] ' >
                    <h5 className='capitalize text-[22px] font-bold w-fit ' >Links</h5>
                    <div className='flex flex-col gap-[8px] ' >
                        <a href={`#home`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >home</a>
                        <a href={`#about`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >about</a>
                        <a href={`#skills`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >skills</a>
                        <a href={`#work`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >work</a>
                        <a href={`#contact`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >contact</a>
                    </div>
                </div>
                {/* projects */}
                <div className='min-w-[4rem] max-w-[18rem] sm:w-fit w-full flex flex-col gap-[12px] ' >
                    <h5 className='capitalize text-[22px] font-bold w-fit ' >Projects</h5>
                    <div className='flex flex-col gap-[8px] ' >
                        <a href={`#work`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >lyrics</a>
                        <a href={`#work`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >dashboard</a>
                        <a href={`#work`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >news app</a>
                        <a href={`#work`} className='capitalize transition-all hover:font-semibold hover:text-secondary-color text-[18px] w-fit ' >fitness app</a>
                    </div>
                </div>
                {/* contact */}
                <div className='min-w-[6rem] max-w-[18rem] sm:w-fit w-full flex flex-col gap-[12px] ' >
                    <h5 className='capitalize text-[22px] font-bold w-fit ' >Contact</h5>
                    <div className='flex flex-col gap-[12px] ' >
                        <div className='flex flex-col gap-[8px] ' >
                            <div className='flex ' ><span className='capitalize font-medium w-[56px] ' >email:</span>naumanch969@gmail.com</div>
                            <div className='flex ' ><span className='capitalize font-medium w-[56px] ' >phone:</span>+923055712534</div>
                        </div>
                        <div className='flex flex-col items-end gap-[8px] w-full ' >
                            <input className="shadow text-[1rem] w-full px-[8px] py-[6px] border-none rounded-[8px] bg-primary-color text-secondary-color outline-none " type="email" placeholder="Your Email" value={emailValue} name="email" onChange={(e) => setEmailValue(e.target.value)} />
                            <button type="button" className="text-[1rem] px-[16px] py-[4px] rounded-[8px] border-none bg-secondary-color font-medium text-white-color outline-none cursor-pointer " onClick={handleSubscribe} >Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[1rem] mt-[2rem] " >
                <p className="text-[1rem] text-left uppercase text-black-color " >@2023 Nauman</p>
                <p className="text-[1rem] text-left uppercase text-black-color " >All rights reserved</p>
            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'flex-1 w-full flex-col '),
    "contact",
    "bg-primary-color py-[2rem] "
)
