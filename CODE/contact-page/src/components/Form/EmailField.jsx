export default function EmailField() {
  return (
    <div className="grid gap-1 text-sm">
      <p className="text-white">Company Email</p>
      <input
        type="email"
        placeholder="ethan@johnson.com"
        className="h-11 rounded-lg pl-4 text-custom-black bg-box-bg placeholder-placeholder"
      />
    </div>
  );
}
