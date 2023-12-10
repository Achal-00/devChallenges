export default function TestimonialCard(props) {
  return (
    <div
      className={`bg-white w-8/12 p-4 landscape:p-8 rounded-lg flex flex-col gap-3 landscape:gap-4 ${props.loc} shadow-[0px_0px_19px_5px_rgba(0,0,0,0.05)]`}
    >
      <div className="flex gap-4 items-center">
        <img
          src={props.companyLogo}
          alt="google"
          className="w-16 landscape:w-20"
        />
        <div className="flex">
          <img src="Star_fill.svg" alt="star" className="w-4 landscape:w-5" />
          <img src="Star_fill.svg" alt="star" className="w-4 landscape:w-5" />
          <img src="Star_fill.svg" alt="star" className="w-4 landscape:w-5" />
          <img src="Star_fill.svg" alt="star" className="w-4 landscape:w-5" />
          <img src={props.lastStar} alt="star" className="w-4 landscape:w-5" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-semibold text-main-text landscape:text-sm">
          {props.author}
        </h1>
        <p className="text-xs font-light text-sub-text landscape:text-sm">
          {props.content}
        </p>
      </div>
    </div>
  );
}
