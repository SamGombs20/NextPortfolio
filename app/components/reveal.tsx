import { RevealProps } from "@/types/props";
import { FC } from "react";
import { motion, Variants } from "motion/react";

const defaultVariants:Variants ={
    hidden:{opacity:0, y:20},
    visible:{opacity:1,y:0}
}

export const Reveal:FC<RevealProps> =(
    {children,as:Component="div",variants=defaultVariants,transition={duration:0.7, ease:"easeOut"},
        className="",once=true, amount=0.2,delay=0,...props})=>{
    return(
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once, amount}}
            variants={variants}
            transition={{...transition, delay}}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}