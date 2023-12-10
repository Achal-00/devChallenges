import ChecklistCard from "./ChecklistCard";

export default function Checklist() {
  return (
    <div className="grid gap-2">
      <ChecklistCard content="Checklist to Review an Academic Paper" />
      <ChecklistCard content="Peer Review Checklist" />
      <ChecklistCard content="Checklist for Editors, Reviewers, and Authors of SPIE Journals" />
    </div>
  );
}
