import CustomInput from "@/components/CustomInput/CustomInput";
import CountrySelection from "./CountrySelection/CountrySelection";
import CustomButton from "@/components/CustomButton/CustomButton";

const Location = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <h1>Location</h1>
      <p>Provide a business address to list on your Booking Page.</p>
      <form className="flex w-full flex-col items-start justify-start gap-2">
        <CustomInput placeholder="Address" />
        <CustomInput placeholder="City" />
        <CustomInput placeholder="State" />
        <CountrySelection />
        <CustomButton btnText="Save" btnType="submit" />
      </form>
    </div>
  );
};

export default Location;
