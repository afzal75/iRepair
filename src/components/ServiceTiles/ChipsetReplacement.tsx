import useScrollGrowHook from "@/hooks/ScrollGrowHook";
import { motion } from 'framer-motion';


const ChipsetReplacement = () => {
    const { style, componentRef } = useScrollGrowHook()
    return (
        <motion.div
            style={style}
            ref={componentRef}
            className="bg-pink-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"></motion.div>
    );
};

export default ChipsetReplacement;