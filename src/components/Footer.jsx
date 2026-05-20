import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="border-t border-border p-2 bg-[#0d0d1a]/60 backdrop-blur-[2px]">
      <div className="max-w-[1000px] mx-auto flex flex-col items-start sm:flex-row sm:items-center justify-center flex-wrap gap-4">
        <span className="font-mono flex items-center justify-center text-[0.78rem] text-muted">

          <span className='flex flex-col gap-1'>
            <div className='flex items-center justify-center'>
           <BsDot className='text-lg' /> 
           <span>Built with React & Tailwind CSS</span>
           </div>
            <div className='flex gap-1 items-center justify-center'>
              <FaRegCopyright className="mr-1 mb-0.5" />
            <span>
             {new Date().getFullYear()} RAVI PRASATH V. All rights reserved.
            </span>
            </div>
           </span>
        </span>
      </div>
    </footer>
  );
}
