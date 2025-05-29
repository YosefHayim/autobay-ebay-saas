import { Button } from "../ui/button";

type btnTypeOptions = "button" | "reset" | "submit";

const CustomButton: React.FC<{ btnText: string; btnType: btnTypeOptions }> = ({ btnText, btnType }) => {
  return (
    <Button className="w-full rounded-sm p-1" type={btnType}>
      {btnText}
    </Button>
  );
};

export default CustomButton;
