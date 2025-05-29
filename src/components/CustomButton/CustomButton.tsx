import { Button } from "../ui/button";

const CustomButton: React.FC<{ btnText: string; btnType: "button" | "reset" | "submit" }> = ({ btnText, btnType }) => {
  return (
    <Button className="w-full rounded-sm p-1" type={btnType}>
      {btnText}
    </Button>
  );
};

export default CustomButton;
