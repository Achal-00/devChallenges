import Content from "./Content";
import Footer from "./Footer";
import HeroImage from "./HeroImage";

export default function Card() {
  return (
    <div className="w-80 landscape:w-96 bg-white rounded-xl">
      <HeroImage />
      <Content />
      <hr className="my-6" />
      <Footer />
    </div>
  );
}
