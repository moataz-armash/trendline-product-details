"use client";

import AuthShell from "@/app/components/forms/AuthShell";
import { FormEvent, useActionState, useState } from "react";
import { VerifyState } from "./action";
import SubmitButton from "@/app/components/forms/SubmitButton";
import { verifySchema } from "@/app/lib/validator";
import toast from "react-hot-toast";
import { api, ENDPOINT_RESEND, ENDPOINT_VERIFY } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { ValidatedInput } from "@/app/components/forms/ValidateInput";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [state, action, isPending] = useActionState(VerifyState, {});
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log("formData: ", formData);
    const data = Object.fromEntries(formData);
    console.log("data: ", data);
    const validationResult = verifySchema.safeParse(data);
    if (!validationResult.success) return;

    try {
      setLoading(true);
      const res = await api.post(ENDPOINT_VERIFY, data);
      toast.success(res?.data?.message);
      setWasSubmitted(true);
      router.push("/dashboard");
    } catch (e: any) {
      toast.error(e?.response.data?.message || "Verify Failed");
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    try {
      const res = await api.post(ENDPOINT_RESEND);
      toast.success(res.data?.message);
    } catch (e: any) {
      toast.error(e.response.data?.message || "Resend Failed");
    }
  };

  return (
    <AuthShell
      title="Verify your account"
      subtitle="Enter the 6-digit code sent to your email">
      <form
        onSubmit={handleSubmit}
        action={action}
        noValidate
        className="space-y-4">
        <ValidatedInput
          type="text"
          name="code"
          inputMode="numeric"
          fieldSchema={verifySchema.shape.code}
          wasSubmitted={wasSubmitted}
          defaultValue={state.form?.code}
          errors={state.errors?.code}
          className="border border-black rounded-md placeholder:text-black text-black px-1 w-full"
        />
        <SubmitButton label="Verify" loading={loading} />
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        Didn’t receive a code? Check spam or{" "}
        <span className="underline cursor-pointer" onClick={resend}>
          resend
        </span>
        .
      </div>
    </AuthShell>
  );
}
