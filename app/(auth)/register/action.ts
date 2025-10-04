"use server";

import { RegisterActionState, registerSchema } from "@/app/lib/validator";
import { redirect } from "next/navigation";

export async function RegisterAction(
  _prev: RegisterActionState,
  formData: FormData
): Promise<RegisterActionState> {
  const form = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      value.toString(),
    ])
  ) as RegisterActionState["form"];

  const validationResult = registerSchema.safeParse(form);

  if (!validationResult.success) {
    return {
      form,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  redirect("/verify");
}
