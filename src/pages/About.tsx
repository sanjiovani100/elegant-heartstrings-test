import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Fashionistas</h1>
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Fashionistas is dedicated to showcasing and celebrating the art of fashion through innovative events and collaborations.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We strive to create a platform where designers, models, and fashion enthusiasts can come together to create unforgettable experiences.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;