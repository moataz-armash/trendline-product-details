import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2).trim(),
    email: z.string().email().trim(),
    mobile: z.string().min(6),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/)
      .regex(/[0-9]/)
      .regex(/[^a-zA-Z0-9]/)
      .trim(),
    password_confirmation: z
      .string()
      .min(1, { message: "Please confirm your password" })
      .trim(),
    mobile_country_code: z.string().min(3),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type RegisterActionState = {
  form?: {
    name?: string;
    email?: string;
    mobile: string;
    mobile_country_code: string;
    password: string;
    password_confirmation: string;
  };
  errors?: {
    name?: string[];
    email?: string[];
    mobile?: string[];
    mobile_country_code?: string[];
    password?: string[];
    password_confirmation?: string[];
  };
};

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginActionState = {
  form?: {
    email?: string;
    password?: string;
  };

  errors?: {
    email?: string;
    password?: string;
  };
};

export const verifySchema = z.object({
  code: z.string().length(6),
});

export type VerifyActionState = {
  form?: {
    code?: string;
  };
  errors?: {
    code?: string;
  };
};
