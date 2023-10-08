interface Props {
  label?: string;
  toggled: boolean;
  onChange: () => void;
}

const MyToggle = (props: Props) => {
  const {
    label = "Toggle",
    toggled,
    onChange
  } = props;

  return (
    <div
      className="flex gap-4 cursor-pointer w-fit select-none"
      onClick={onChange}
    >
      <div className={`w-[49px] h-6 rounded-full border-[1px] border-borderColor flex items-center justify-end px-[3px]
      transition-colors ${toggled ?  "bg-accentColor" : "bg-backgroundColor" }`}>
        <div className={`w-[18px] h-[18px] rounded-full border-[1px] transition-all
        ${toggled ? "border-backgroundColor bg-backgroundColor transform-gpu -translate-x-6" : "border-borderColor bg-shadingColor"} `}></div>
      </div>
      <div>
        {label}
      </div>
    </div>
  );
};

export default MyToggle;