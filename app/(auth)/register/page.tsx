"use client";
import { useActionState, useState } from "react";
import AuthShell from "@/app/components/forms/AuthShell";
import SubmitButton from "@/app/components/forms/SubmitButton";
import { RegisterAction } from "./action";
import { ValidatedInput } from "@/app/components/forms/ValidateInput";
import { registerSchema } from "@/app/lib/validator";
import { registerInputfields } from "../lib/inputFields";
import { api, ENDPOINT_REGISTER } from "@/app/types/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [state, action, isPending] = useActionState(RegisterAction, {});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const validationResult = registerSchema.safeParse(data);
    if (!validationResult.success) {
      return;
    }

    try {
      setLoading(true);
      const res = await api.post(ENDPOINT_REGISTER, data);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("name", res.data.data.name);
      console.log(res);
      form.reset();
      setWasSubmitted(false);
      toast.success(res?.data?.message);
      router.push("/verify");
    } catch (e: any) {
      toast.error(e?.response?.data?.message || "Registeration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Create your account" subtitle="Register to continue">
      <form
        onSubmit={handleSubmit}
        action={action}
        noValidate
        className="space-y-4 gap-8">
        {registerInputfields.map(({ id, name }) => (
          <div key={id} className="grid grid-cols-1">
            <label className="mb-1 block text-sm font-light text-black">
              {name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}{" "}
              <span className="text-red-500">*</span>
            </label>
            <ValidatedInput
              type={name === "password_confirmation" ? "password" : name}
              name={name}
              fieldSchema={registerSchema.shape[name]}
              wasSubmitted={wasSubmitted}
              defaultValue={state.form?.[name]}
              errors={state.errors?.[name]}
              className="border border-black rounded-md placeholder:text-black text-black px-1"
            />
          </div>
        ))}

        <SubmitButton label="Create account" loading={loading} />
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a className="underline hover:opacity-80" href="/login">
          Log in
        </a>
      </div>
    </AuthShell>
  );
}
