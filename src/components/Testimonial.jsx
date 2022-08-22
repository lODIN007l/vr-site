import React from "react";
import TestimonalSlider from "../components/TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="mb-64  lg:mb-48  ">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 ">What our clients</h2>
            <p className="max-w-2xl mx-auto mb-12 lg:mb-24">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              exercitationem maxime explicabo nobis eius dolor quidem minus
              perferendis earum asperiores quisquam sint reiciendis minima,
              atque nemo sapiente, autem ullam. Necessitatibus.
            </p>
          </div>
          {/* slider */}
          <div>
            <TestimonalSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
