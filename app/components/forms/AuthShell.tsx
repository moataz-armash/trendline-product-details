"use client";
import Link from "next/link";

export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="w-full max-w-xl">
        <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-black">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
          {children}
        </div>
        {footer && (
          <div className="text-center text-sm text-gray-600 mt-4">{footer}</div>
        )}
      </div>
    </main>
  );
}
