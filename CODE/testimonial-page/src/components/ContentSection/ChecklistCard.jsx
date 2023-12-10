export default function ChecklistCard(props) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="Done_ring_round_fill.svg"
        alt="done"
        className="w-4 landscape:w-6"
      />
      <p className="text-xs text-sub-text landscape:text-base font-light">
        {props.content}
      </p>
    </div>
  );
}
