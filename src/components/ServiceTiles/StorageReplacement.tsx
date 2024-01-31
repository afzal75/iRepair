import useScrollGrowHook from "@/hooks/ScrollGrowHook";
import { motion } from 'framer-motion';


const StorageReplacement = () => {
    const { style, componentRef } = useScrollGrowHook()
    return (
        <motion.div
            style={style}
            ref={componentRef}
            className="bg-pink-500 h-[415px] rounded-2xl col-span-12">

        </motion.div>
    );
};

export default StorageReplacement;