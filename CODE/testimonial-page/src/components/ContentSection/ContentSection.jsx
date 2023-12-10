import Checklist from "./Checklist";
import Content from "./Content";
import Heading from "./Heading";
import HeadingStar from "./HeadingStar";

export default function ContentSection() {
  return (
    <div className="flex flex-col items-start gap-4 landscape:gap-8">
      <HeadingStar />
      <Heading />
      <Content />
      <Checklist />
    </div>
  );
}
