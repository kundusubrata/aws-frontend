import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LandingPage = (): React.ReactElement => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 bg-gray-50 flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Simple. Minimal. Effective.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Build and grow your online presence with our platform.
        </p>
        <div className="space-x-4">
          <Button variant="default" className="px-6 py-3 text-lg">
            Get Started
          </Button>
          <Button variant="outline" className="px-6 py-3 text-lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Fast & Reliable"
              description="Experience top-notch performance with zero downtime."
            />
            <FeatureCard
              title="Easy to Use"
              description="Our platform is designed with simplicity and usability in mind."
            />
            <FeatureCard
              title="Secure"
              description="Your data is safe and secure with us, always."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Card className="bg-gray-100 p-8 rounded-lg shadow-md">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800 mb-4">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default LandingPage;
