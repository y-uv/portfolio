import React from "react";

const testimonialsData = [
  {
    id: 1,
    quote: "Dedicated and hard working! - CEO",
    author: "John Doe",
  },
  {
    id: 2,
    quote: "Excellent service and professionalism! - CTO",
    author: "Jane Smith",
  },
  {
    id: 3,
    quote: "Highly skilled team! - CFO",
    author: "Michael Johnson",
  },
];

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="min-h-screen flex flex-col items-center justify-center bg-yuvbg"
    >
      <h1 className="text-4xl font-bold mb-8 text-black">Testimonials</h1>
      <div className="flex justify-center space-x-8">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 bg-white p-8 rounded-lg shadow-lg max-w-md text-center"
          >
            <p className="text-gray-700 mb-4">{testimonial.quote}</p>
            <p className="font-semibold">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
