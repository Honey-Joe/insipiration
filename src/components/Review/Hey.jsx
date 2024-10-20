import React from "react";
import { blog1_1, blog1_2, blog1_3 } from "../../assets/image";

const App = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Testimonials Section */}
      <div className="flex justify-between mb-8">
        <div className="w-1/2 pr-4">
          <h2 className="text-purple-700 text-xl font-bold">TESTIMONIALS</h2>
          <h3 className="text-2xl font-semibold mt-2">Students Feedback</h3>

        </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <div className="flex items-center mb-2">
              {/* Star rating */}
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐☆</span>
            </div>
            <p className="text-gray-600 mb-4">
              Nullam dignissim ante scelerisque the is euismod fermentum odio sem
              semper the is erat a feugiat leo urna eget eros. Duis Aenean a
              imperdiet risus. Aliquam pellentesque.
            </p>
            <p className="font-bold text-lg">Ronald Richards</p>
            <p className="text-sm text-gray-500">Co, Founder</p>

            {/* Student Images */}
            <div className="flex items-center mt-4 space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src={blog1_1}
                alt="student"
              />
              <img
                className="w-12 h-12 rounded-full"
                src={blog1_2}
                alt="student"
              />
              <img
                className="w-12 h-12 rounded-full"
                src={blog1_3}
                alt="student"
              />
            </div>

            {/* Pagination */}
            <div className="mt-4 text-center text-gray-600">
              <span>1 / 3</span>
            </div>
          </div>
        {/* Upcoming Events Section */}
        <div className="w-1/2 pl-4">
          <h2 className="text-purple-700 text-xl font-bold">EVENT</h2>
          <h3 className="text-2xl font-semibold mt-2">Upcoming Events</h3>

          {/* Event Card */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-4 flex">
            <div className="bg-yellow-500 text-white text-center p-4 rounded-lg">
              <div className="text-lg">2024</div>
              <div className="text-2xl font-bold">20 OCT</div>
            </div>
            <div className="pl-4">
              <h4 className="text-lg font-semibold">
                SAT Implementation Workshops November 2026
              </h4>
              <p className="text-sm text-gray-600">11:00 - 13:30</p>
              <p className="text-gray-500 mt-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
            </div>
          </div>

          {/* Repeat Event Card */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-4 flex">
            <div className="bg-yellow-500 text-white text-center p-4 rounded-lg">
              <div className="text-lg">2024</div>
              <div className="text-2xl font-bold">20 OCT</div>
            </div>
            <div className="pl-4">
              <h4 className="text-lg font-semibold">
                SAT Implementation Workshops November 2026
              </h4>
              <p className="text-sm text-gray-600">11:00 - 13:30</p>
              <p className="text-gray-500 mt-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
