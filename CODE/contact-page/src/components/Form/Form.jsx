import Button from "./Button";
import EmailField from "./EmailField";
import MessageField from "./MessageField";
import NameField from "./NameField";
import SizeField from "./SizeField";
import SubjectField from "./SubjectField";

export default function Form() {
  return (
    <form className="bg-white bg-opacity-15 rounded-2xl p-6 pb-16 grid gap-5 md:grid-cols-2 lg:w-2/4 lg:mx-auto">
      <NameField />
      <EmailField />
      <SizeField />
      <SubjectField />
      <MessageField />
      <Button />
    </form>
  );
}
