import signUpWithPhone from "@/Api/signUpWMobile";

export const handleMobileSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const phone = formData.get("phone");
  if (!phone) return;
  await signUpWithPhone(phone);
};
