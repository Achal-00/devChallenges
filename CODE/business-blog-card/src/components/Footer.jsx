export default function Footer() {
  return (
    <div className="mx-4 flex gap-3 items-center mb-8">
      <div className="border-2 rounded-full">
        <img
          src="avatar-image-business-card.png"
          alt="avatar"
          className="w-10 rounded-full p-[1px]"
        />
      </div>
      <div className="font-custom-font-sub">
        <h2 className="text-heading font-bold">Amy Burgess</h2>
        <p className="text-xs text-sub-text">Customer Manager, Solution Oy</p>
      </div>
    </div>
  );
}
