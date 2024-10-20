import { ArrowLeft } from 'lucide-react';
import React from 'react'

const SamplePrevArrow = ({ onClick }) => {
    return (
        <>
            <button
                className="absolute right-14 bottom-6 -translate-y-1/2  p-2 z-10  border-gray-300  group transition-colors"
                onClick={onClick}
            >
                <ArrowLeft className="w-4 h-4 text-black " />
            </button>
        
        </>
      
    );
}

export default SamplePrevArrow