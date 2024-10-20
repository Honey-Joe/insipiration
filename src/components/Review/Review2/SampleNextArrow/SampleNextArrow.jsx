import { ArrowRight } from 'lucide-react';
import React from 'react'

const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute -right-2 bottom-6 -translate-y-1/2 bg-white p-2 z-10  border-gray-300  group transition-colors"
        onClick={onClick}
      >
        <ArrowRight className="w-4 h-4 " />
      </button>
    );
}

export default SampleNextArrow