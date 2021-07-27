import { ReactNode } from "react";
import {motion} from 'framer-motion';

interface ButtonProps {
  onClick:() => void;
  children: ReactNode;
}

export function Button({onClick, children}: ButtonProps) {
  return (
    <motion.button 
    whileTap={{ scale: 0.95}}
          className="bg-primary text-white hover:bg-title px-4 py-1 rounded-md"
          onClick={onClick}
        >
          {children}
    </motion.button>

  )
}