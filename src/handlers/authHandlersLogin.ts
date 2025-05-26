import loginWMobile from "@/Api/auth/loginWMobile";

export const handleMobileLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const phone = formData.get("phone");
  if (!phone) return;
  await loginWMobile(phone);
};
