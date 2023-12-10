import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  return (
    <div className="flex flex-col gap-8 landscape:self-center">
      <TestimonialCard
        companyLogo="google-testimonial.png"
        lastStar="Star_fill_gray.svg"
        author="Samantha Lee"
        content="The checklist ensures that the review process is thorough"
        loc="self-end"
      />
      <TestimonialCard
        companyLogo="meta-testimonial.png"
        lastStar="Star_fill.svg"
        author="Rachel Patel"
        content="I highly recommend the Writecream Business Description"
        loc="self-start"
      />
    </div>
  );
}
