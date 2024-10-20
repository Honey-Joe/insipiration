import { ArrowRight } from 'lucide-react';
import React from 'react'

const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute right-4 lg:right-8 bottom-0 -translate-y-1/2 bg-gray-200 rounded-full p-3  z-10 border-gray-300 hover:bg-[#2563EB] group transition-colors"
        onClick={onClick}
      >
        <ArrowRight className="w-6 h-6 text-orange-600 group-hover:stroke-white" />
      </button>
    );
}

export default SampleNextArrow