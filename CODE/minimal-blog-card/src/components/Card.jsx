import Content from "./Content";
import Footer from "./Footer";
import ImageHolder from "./ImageHolder";
import Tag from "./Tag";

export default function Card() {
  return (
    <div className="w-[336px] bg-white grid gap-4 rounded-xl shadow-[0px_30px_100px_0px_rgba(17,23,41,0.05)]">
      <ImageHolder />
      <Tag />
      <Content />
      <hr />
      <Footer />
    </div>
  );
}
