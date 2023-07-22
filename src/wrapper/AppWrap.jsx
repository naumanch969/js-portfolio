import { NavigationDots, SocialMedia } from "../components"

const AppWrap = (Component, idName, className) => function HOC() {        // highet order component
    return (
        <div id={idName} className={`w-full min-h-screen flex flex-row ${className}`} >      {/* display flex - row direction */}
            <SocialMedia />

            <div className="app__wrapper flex-1 w-full flex-col py-[4rem] flex justify-center items-center " >     {/* display flex-column direction */}
                <Component />
            </div>

            <NavigationDots active={idName} />     {/* idName = section name i.e., home,about,skills etc. */}
        </div>
    )
}

export default AppWrap;