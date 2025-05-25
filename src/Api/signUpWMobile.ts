import { supabase } from "./init";

const signUpWithOtp = async (phone: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone,
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

export default signUpWithOtp;
