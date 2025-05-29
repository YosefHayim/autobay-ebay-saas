import { Input } from "../ui/input";

const CustomInput: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <Input placeholder={placeholder} className={"w-full rounded-sm p-1"} />;
};

export default CustomInput;
