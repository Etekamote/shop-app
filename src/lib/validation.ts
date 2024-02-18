import { zfd } from "zod-form-data";
import { z } from "zod";

export const registerFormSchema = zfd
  .formData({
    name: zfd.text(z.string().min(2, "Too short").max(20, "Too long")),
    email: zfd.text(z.string().email("Invalid email format")),
    password: zfd.text(
      z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(
          /^(?=.*[!@#$%^&*])/,
          "Password must contain at least one special character"
        )
    ),
    repeatPassword: zfd.text(z.string()),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });
