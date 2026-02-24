import { Variants } from "motion";
import { HTMLAttributes, JSX, ReactNode } from "react";
export interface RevealProps extends HTMLAttributes<HTMLDivElement>{
    children:ReactNode;
    as?:keyof JSX.IntrinsicElements;
    variants?:Variants;
    transition?:any;
    className?:string;
    once?:boolean;
    amount?:number |"some" |"all";
    delay?:number;
}