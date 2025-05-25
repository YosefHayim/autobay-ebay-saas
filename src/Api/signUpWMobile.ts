import { supabase } from "./init";

const signUpWithPhone = async (phone: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      phone,
      password: "example-password",
      options: {
        channel: "sms",
      },
    });

    if (error) throw error;
    console.log("OTP sent:", data);
    return data;
  } catch (error) {
    console.error("OTP signup/login error:", error);
  }
};

export default signUpWithPhone;
