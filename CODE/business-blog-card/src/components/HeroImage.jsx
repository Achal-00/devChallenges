export default function HeroImage() {
  return (
    <div className="relative">
      <img
        src="hero-image-business-card.png"
        alt="hero image"
        className="rounded-t-xl w-full"
      />
      <img
        src="white-overlay.svg"
        alt=""
        className="absolute top-[76%] align-bottom w-full"
      />
    </div>
  );
}
