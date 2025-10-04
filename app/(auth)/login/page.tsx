"use client";
import { useActionState, useState } from "react";
import AuthShell from "@/app/components/forms/AuthShell";
import SubmitButton from "@/app/components/forms/SubmitButton";
import { LoginAction } from "./action";
import { ValidatedInput } from "@/app/components/forms/ValidateInput";
import { loginSchema } from "@/app/lib/validator";
import { loginInputFields } from "../lib/inputFields";
import { api, ENDPOINT_LOGIN } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [state, action, isPending] = useActionState(LoginAction, {});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const validationResult = loginSchema.safeParse(data);
    if (!validationResult.success) {
      return;
    }

    try {
      setLoading(true);
      const res = await api.post(ENDPOINT_LOGIN, data);
      localStorage.setItem("token", res.data.data.token);
      console.log(res);

      form.reset();
      setWasSubmitted(false);
      toast.success(res?.data?.message);
      localStorage.setItem("name", res.data.data.name);
      router.push("/dashboard");
    } catch (e: any) {
      toast.error(e?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  type loginShape = typeof loginSchema.shape;
  type loginField = keyof loginShape;

  return (
    <AuthShell title="Welcome back" subtitle="Log in to your account">
      <form
        onSubmit={handleSubmit}
        action={action}
        noValidate
        className="space-y-4 gap-8">
        {loginInputFields.map(({ id, name }) => (
          <div key={id} className="grid grid-cols-1">
            <label className="mb-1 block text-sm font-light text-black">
              {name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}{" "}
              <span className="text-red-500">*</span>
            </label>
            <ValidatedInput
              type={name}
              name={name}
              fieldSchema={loginSchema.shape[name as loginField]}
              wasSubmitted={wasSubmitted}
              defaultValue={state.form?.[name as loginField]}
              errors={state.errors?.[name as loginField]}
              className="border border-black rounded-md placeholder:text-black text-black px-1"
            />
          </div>
        ))}

        <SubmitButton label="Login" loading={loading} />
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <a className="underline hover:opacity-80" href="/register">
          Register
        </a>
      </div>
    </AuthShell>
  );
}
