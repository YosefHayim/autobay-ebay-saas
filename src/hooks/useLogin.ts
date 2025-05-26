import loginWMobile from "@/Api/loginWMobile";

export const useLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const phone = formData.get("phone");
  if (!phone) return;
  await loginWMobile(phone);
};
