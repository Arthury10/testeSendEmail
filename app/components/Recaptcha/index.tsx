import React from "react";
import { useGoogleReCaptcha, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { api } from "../../services/api";

export const Recaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleSubmit = async () => {
    try {
      const newToken = await executeRecaptcha("Email de contato");
      if (newToken) {
        const response = await api.post("/recaptcha", {
          token: newToken,
        });
        console.log("response", response);
      }
    } catch (err) {
      throw new Error("Token error");
    }
  };

  return (
    <div>
      <GoogleReCaptcha onVerify={(t) => console.log({ t })} />
      <input type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
