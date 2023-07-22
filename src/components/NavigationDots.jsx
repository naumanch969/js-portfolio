

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation sm:flex hidden justify-center items-center flex-col p-[1rem] ">
            {
                ['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                    <a    // each individual dot act as a link
                        href={`#${item}`}
                        key={item + index}
                        style={active === item ? { backgroundColor: '#313BAC' } : {}}
                        className="app__navigation-dot w-[10px] h-[10px] rounded-full bg-[#cbcbcb] m-[8px] transition-all hover:bg-secondary-color xl:w-[20px] xl:h-[20px] "
                    />
                ))
            }
        </div>
    )
}

export default NavigationDots