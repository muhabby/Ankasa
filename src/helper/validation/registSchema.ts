import { z } from "zod";

export const registSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required."),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .regex(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .regex(/(?=.*\d)/, "Password must contain at least one digit.")
    .regex(
      /(?=.*[@#$%^&+=!])/,
      "Password must contain at least one special character (@#$%^&+=!)."
    ),
});
