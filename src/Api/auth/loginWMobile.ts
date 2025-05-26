import { supabase } from "../configuration/init";

const loginWMobile = async (phone: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      phone,
      password: "example-password",
    });

    if (error) throw error;
    console.log("OTP sent:", data);
    return data;
  } catch (error) {
    console.error("OTP signup/login error:", error);
  }
};

export default loginWMobile;
