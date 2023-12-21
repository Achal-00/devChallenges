export default function MessageField() {
  return (
    <div className="grid gap-1 text-sm md:col-span-2">
      <p className="text-white">Message</p>
      <textarea
        name="message"
        id="message"
        rows="7"
        className="rounded-lg p-4 text-custom-black bg-box-bg placeholder-placeholder"
      >
        50-100 employees
      </textarea>
    </div>
  );
}
