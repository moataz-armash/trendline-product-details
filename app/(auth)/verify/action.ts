"use server";

import { VerifyActionState, verifySchema } from "@/app/lib/validator";
import { redirect } from "next/navigation";

export async function VerifyState(
  _prev: VerifyActionState,
  formData: FormData
): Promise<VerifyActionState> {
  const form = Object.fromEntries(formData);
  const validationResult = verifySchema.safeParse(form);
  if (!validationResult.success) {
    return {
      form,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  redirect("/dashboard");
}
