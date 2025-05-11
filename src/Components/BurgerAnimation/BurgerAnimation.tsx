import { Input } from "../ui/input";
import { Label } from "../ui/label";
import "./BurgerAnimation.module.css";

const BurgerAnimation = () => {
  return (
    <div>
      <Input type="text" id={`menu_checkbox`} />
      <Label htmlFor={`menu_checkbox`} />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BurgerAnimation;
