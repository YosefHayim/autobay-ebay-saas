import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";

const ContactDetails = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      <h1>Contact details</h1>
      <p>Let your leads and customers know how to reach you.</p>
      <form className="flex w-full flex-col items-start justify-start gap-2">
        <CustomInput placeholder="Primary Email" />
        <CustomInput placeholder="Primary Phone" />
        <CustomButton btnText="Submit" btnType={"submit"} />
      </form>
    </div>
  );
};

export default ContactDetails;
