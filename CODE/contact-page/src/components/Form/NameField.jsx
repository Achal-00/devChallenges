export default function NameField() {
  return (
    <div className="grid gap-1 text-sm">
      <p className="text-white">Name</p>
      <input
        type="text"
        placeholder="Ethan Johnson"
        className="h-11 rounded-lg pl-4 text-custom-black bg-box-bg placeholder-placeholder"
      />
    </div>
  );
}
