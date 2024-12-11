import React from "react";

const AboutPage = (): React.ReactElement => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        About Us
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Welcome to our totally real company! We were founded in 1893 by a team
        of visionaries who believed that the internet would be a big deal
        someday. We specialize in everything from quantum coffee machines to
        AI-powered pencil sharpeners.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          title="Our Mission"
          description="To bring world peace by making coffee faster than light. (Almost there!)"
        />
        <FeatureCard
          title="Our Team"
          description="Led by a team of unicorns, robots, and one very dedicated goldfish."
        />
        <FeatureCard
          title="Our Technology"
          description="We use cutting-edge technology, including invisible wires and anti-gravity databases."
        />
        <FeatureCard
          title="Contact Us"
          description="Feel free to reach out to us via carrier pigeon or psychic thoughts."
        />
      </div>

    </div>
  );
};

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutPage;
