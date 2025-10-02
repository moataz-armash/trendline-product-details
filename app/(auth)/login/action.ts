"use server";
import { LoginActionState, loginSchema } from "@/app/lib/validator";
import { redirect } from "next/navigation";

export async function LoginAction(
  _prev: LoginActionState,
  formData: FormData
): Promise<LoginActionState> {
  const form = Object.fromEntries(formData);
  const validationResult = loginSchema.safeParse(form);
  if (!validationResult.success) {
    return {
      form,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }
  redirect("/dashboard");
}
