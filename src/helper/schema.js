import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 or more characters long" }),
});

export const signupFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .max(50, { message: "First name should be less than 50 character" }),

    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .max(50, { message: "Last name should be less than 50 character" }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be 8 or more characters long" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),

    termsAndPolicy: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password & Confirm Password did not matched",
    path: ["confirmPassword"],
  });

export const editProfileFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .max(50, { message: "First name should be less than 50 character" }),

    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .max(50, { message: "Last name should be less than 50 character" }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be 8 or more characters long" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password & Confirm Password did not matched",
    path: ["confirmPassword"],
  });
