import { BsTwitter, BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

const SocialMedia = () => {
    return (
        <div className="sm:flex hidden justify-end items-center flex-col gap-[1rem] p-[1rem] " >
            <div className='w-[44px] h-[44px] rounded-full bg-white-color border-[1px] border-light-gray-color flex justify-center items-center transition-all hover:bg-secondary-color hover:border-secondary-color ' >
                <BsTwitter className='w-[22px] h-[22px] text-gray-color hover:bg-white-color' />
            </div>
            <div className='w-[44px] h-[44px] rounded-full bg-white-color border-[1px] border-light-gray-color flex justify-center items-center transition-all hover:bg-secondary-color hover:border-secondary-color ' >
                <FaFacebook className='w-[22px] h-[22px] text-gray-color hover:bg-white-color' />
            </div>
            <div className='w-[44px] h-[44px] rounded-full bg-white-color border-[1px] border-light-gray-color flex justify-center items-center transition-all hover:bg-secondary-color hover:border-secondary-color ' >
                <BsInstagram className='w-[22px] h-[22px] text-gray-color hover:bg-white-color' />
            </div>
        </div>
    )
}

export default SocialMedia;