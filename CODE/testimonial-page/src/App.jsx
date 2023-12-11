import React from "react";
import ContentSection from "./components/ContentSection/ContentSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

export default function App() {
  return (
    <div className="min-h-screen bg-body-bg flex flex-col landscape:grid landscape:lg:grid-cols-2 landscape:content-center px-4 py-16 landscape:px-32 font-custom-font gap-8">
      <ContentSection />
      <TestimonialSection />
    </div>
  );
}
