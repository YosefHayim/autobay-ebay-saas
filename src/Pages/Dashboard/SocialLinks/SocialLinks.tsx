import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";

const SocialLinks = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <h1>Your links</h1>
      <p>Drive Booking Page visitors to your site, socials and more.</p>
      <form className="flex w-full flex-col items-center justify-center gap-2">
        <CustomInput placeholder="Website link" />
        <CustomInput placeholder="Instegram link" />
        <CustomInput placeholder="Facebook link" />
        <CustomButton btnText="Save" btnType="submit" />
      </form>
    </div>
  );
};

export default SocialLinks;
