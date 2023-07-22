import { motion } from "framer-motion"



const MotionWrap = (Component, className) => function HOC() {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: .5 }}
            className={`${className} flex justify-center items-center`}
        >
            <Component />
        </motion.div>
    )
}

export default MotionWrap;