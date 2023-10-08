interface Props {
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const MyButton = ({label = "Button", primary, secondary, ...props}: Props) => {

  return (
    <button
      className={`h-14 w-[172px] rounded-lg
        ${primary && 
          "bg-accentColor text-white hover:bg-opacity-90"}
        ${secondary &&
          "bg-backgroundColor text-accentColor border-[1px] border-accentColor hover:bg-accentColor hover:bg-opacity-10"}
      `}
      {...props}
    >
      {label}
    </button>
  );
};

export default MyButton;