import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { svgsLinks } from "@/components/Footer/menu-links";
import { Globe } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <h1>Your links</h1>
      <p>Drive Booking Page visitors to your site, socials and more.</p>
      <form className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex w-full items-center gap-2">
          <Globe className="h-5 w-5" />
          <CustomInput placeholder="Website link" />
        </div>
        <div className="flex w-full items-center gap-2">
          <img src={svgsLinks.instegram} alt="Instegram icon" className="h-5 w-5" />
          <CustomInput placeholder="Instegram link" />
        </div>
        <div className="flex w-full items-center gap-2">
          <img src={svgsLinks.facebook} alt="Facebook icon" className="h-5 w-5" />
          <CustomInput placeholder="Facebook link" />
        </div>
        <div className="flex w-full items-center gap-2">
          <img src={svgsLinks.tiktok} alt="Tiktok icon" className="h-5 w-5" />
          <CustomInput placeholder="Tiktok link" />
        </div>
        <div className="flex w-full items-center gap-2">
          <img src={svgsLinks.x} alt="X icon" className="h-5 w-5" />
          <CustomInput placeholder="X link" />
        </div>
        <div className="flex w-full items-center gap-2">
          <img src={svgsLinks.youtube} alt="Youtube icon" className="h-5 w-5" />
          <CustomInput placeholder="Youtube link" />
        </div>
        <div className="flex w-full items-center gap-2">
          <img src={svgsLinks.linkedin} alt="Linkedin icon" className="h-5 w-5" />
          <CustomInput placeholder="Linkedin link" />
        </div>
        <CustomButton btnText="Save" btnType="submit" />
      </form>
    </div>
  );
};

export default SocialLinks;
