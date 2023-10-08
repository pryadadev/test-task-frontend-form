import CheckIcon from "@icons/CheckIcon.tsx";

interface Props {
  label?: string;
  checked: boolean;
  onChange: () => void;
}

const MyCheckbox = (props: Props) => {
  const {
    label = "Checkbox",
    checked,
    onChange
  } = props;

  return (
    <div
      className="flex gap-4 cursor-pointer w-fit select-none focus:outline-accentColor"
      onClick={onChange}
      onKeyDown={(event) => {event.key === "Enter" && onChange()}}
      tabIndex={0}
    >
      <div className="w-6 h-6 rounded-lg border-[1px] border-borderColor flex items-center justify-center bg-backgroundColor">
        { checked &&
        <CheckIcon />}
      </div>
      <div>
        {label}
      </div>
    </div>
  );
};

export default MyCheckbox;