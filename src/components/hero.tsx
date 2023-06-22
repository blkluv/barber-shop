import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
    handleClick: () => void
}

export default function Hero({ handleClick }: HeroProps): React.JSX.Element {
    return (
        <div className="hero grow flex gap-2 flex-col items-center justify-center">
            <AnimatePresence>
                <motion.h1
                    key="header"
                    initial={{ x: -70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    exit={{
                        opacity: 0,
                        x: 90,
                        transition: {
                            ease: "easeInOut",
                            delay: 1.4,
                        },
                    }} className='font-bold text-4xl md:text-7xl text-center'>Sergiu Barbershop</motion.h1>
                <motion.button
                    key="address"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    exit={{
                        opacity: 0,
                        x: 90,
                        transition: {
                            ease: "easeInOut",
                            delay: 1.4,
                        },
                    }} onClick={handleClick} className='flex justify-center items-center'>
                    <LocationOnIcon className='text-hover mr-1' />
                    <span className='text-base md:text-lg'>Strada Aurel Vlaicu 54, Iași</span>
                </motion.button>
            </AnimatePresence>
        </div>
    )
}