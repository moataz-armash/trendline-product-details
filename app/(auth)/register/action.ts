"use server";

import { RegisterActionState, registerSchema } from "@/app/lib/validator";
import { redirect } from "next/navigation";

export async function RegisterAction(
  _prev: RegisterActionState,
  formData: FormData
): Promise<RegisterActionState> {
  const form = Object.fromEntries(formData);
  const validationResult = registerSchema.safeParse(form);
  if (!validationResult.success) {
    return { form, errors: validationResult.error.flatten().fieldErrors };
  }
  redirect("/verify");
}
