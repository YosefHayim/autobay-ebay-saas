import BasicInfoAboutBusiness from "@/Pages/Signup/BasicInfoAboutBusiness";
import ChooseBusinessHours from "@/Pages/Signup/ChooseBusinessHours";
import ChooseBusinessTypes from "@/Pages/Signup/ChooseBusinessTypes";
import ChooseServices from "@/Pages/Signup/ChooseServices";
import CodeReceivedFromOtp from "@/Pages/Signup/CodeReceivedFromOtp";
import PhoneNumberInput from "@/Pages/Signup/PhoneNumberInput";

export const stepSignUpProccess = (currentStep: number) => {
  switch (currentStep) {
    case 1:
      return <PhoneNumberInput />;

    case 2:
      return <CodeReceivedFromOtp />;

    case 3:
      return <BasicInfoAboutBusiness />;

    case 4:
      return <ChooseBusinessTypes />;

    case 5:
      return (
        <ChooseBusinessHours>
          <h1 className="text-center text-2xl">When can customers schedule appointments?</h1>
          <p>You can change the activity hours later, this isnt permanet.</p>
        </ChooseBusinessHours>
      );

    case 6:
      return <ChooseServices />;

    default:
      return <></>;
  }
};
