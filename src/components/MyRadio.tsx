interface Props {
  options?: string[];
  selected: number;
  onChange: (value: number) => void;
}

const MyRadio = (props: Props) => {
  const {
    options = ["Radio selection", "Radio selection"],
    selected,
    onChange
  } = props;

  return (
    <div className="flex flex-col gap-4">
      {options.map((item, index) => (
        <div
          className="flex gap-4 cursor-pointer w-fit focus:outline-accentColor"
          onClick={() => onChange(index)}
          onKeyDown={(event) => {event.key === "Enter" && onChange(index)}}
          tabIndex={0}
          key={index}
        >
          <div className="w-6 h-6 rounded-full border-[1px] border-borderColor flex items-center justify-center bg-backgroundColor">
            {selected === index &&
            <div className="w-3 h-3 bg-accentColor rounded-full"></div>}
          </div>
          <div>
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRadio;