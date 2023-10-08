import { useState } from "react";
import ArrowDownIcon from "@icons/ArrowDownIcon.tsx";
import ArrowUpIcon from "@icons/ArrowUpIcon.tsx";

interface Props {
  label?: string;
  options?: string[];
  selected: number;
  onChange: (value: number) => void;
}

const MyDropdown = (props: Props) => {
  const {
    label = "Dropdown Title",
    options = ["Dropdown option", "Dropdown option 1", "Dropdown option 2"],
    selected,
    onChange,
  } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickDropdown = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOption = (index: number) => {
    onChange(index);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex select-none flex-col gap-2">
      <div className="font-semibold text-[12px]">{label}</div>

      <div className="relative">
        <div
          className={`flex h-14 w-full flex-col rounded-lg pr-12 outline-accentColor gap-2.5
          text-textColor focus:border-accentColor focus:p-[15px] focus:border-2
          ${isMenuOpen ? "rounded-b-none border-accentColor p-[15px] border-2" : "border-borderColor p-4 border-[1px]"}`}
          onClick={handleClickDropdown}
          onKeyDown={(event) => event.key === "Enter" && handleClickDropdown()}
          tabIndex={0}
        >
          <div className="">{options[selected]}</div>
          <div className="absolute top-4 right-4">
            {/* Icon of arrow up or down */}
            {isMenuOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>

        {isMenuOpen ? (
          <div>
            {options.map((item, index) => (
              <div
                className={`flex gap-4 cursor-pointer outline-none h-14 w-full rounded-none p-4 focus:bg-accentColor
                focus:text-white hover:bg-accentColor hover:text-white border-[1px] border-b-0 border-borderColor
                ${index === options.length - 1 && "border-b-[1px] rounded-b-lg"}`}
                onClick={() => handleClickOption(index)}
                onKeyDown={(event) => {event.key === "Enter" && handleClickOption(index)}}
                tabIndex={0}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          // placeholder if menu is closed
          <div className={`h-[${options.length*56}px] w-full`}></div>
        )}
      </div>
    </div>
  );
};

export default MyDropdown;