import { NextApiRequest, NextApiResponse } from "next";

const recaptcha = async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const websiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY_WEBSITE;

  if (req.method === "POST") {
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secret}&response=${req.body.token}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(
            reCaptchaRes,
            "Response from Google reCatpcha verification API"
          );
          if (reCaptchaRes?.score > 0.5) {
            // Save data to the database from here
            res.status(200).json({
              status: "success",
              message: "Enquiry submitted successfully",
            });
          } else {
            res.status(200).json({
              status: "failure",
              message: "Google ReCaptcha Failure",
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default recaptcha;