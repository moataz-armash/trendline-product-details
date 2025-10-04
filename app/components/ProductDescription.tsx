"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Heart, Plus } from "lucide-react";

type Option = { label: string; value: string };
type ColorOption = { name: string; hex: string };

const TYPES: Option[] = [
  { label: "Cotton", value: "cotton" },
  { label: "Polyester", value: "poly" },
  { label: "Linen", value: "linen" },
];

const SIZES: Option[] = [
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
  { label: "2XL", value: "2XL" },
];

const COLORS: ColorOption[] = [
  { name: "Red", hex: "#ef233c" },
  { name: "Blue", hex: "#cde0ef" }, // active in mock
  { name: "Khaki", hex: "#b19b63" },
  { name: "Denim", hex: "#7aa0d6" },
  { name: "Gray", hex: "#6b7280" },
];

export default function ProductDescription() {
  const [type, setType] = useState<Option>(TYPES[0]);
  const [size, setSize] = useState<Option>(SIZES[4]);
  const [color, setColor] = useState<ColorOption>(COLORS[1]);
  const [qty, setQty] = useState(1);

  const price = 300;
  const compareAt = 360;

  const total = useMemo(() => price * qty, [price, qty]);

  return (
    <section className="font-poppins">
      {/* Row: tag + wishlist/cart icons */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-grey-100/70 px-3 py-1 text-[13px] text-black-200">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-800" />
          T-Shirt
        </span>

        <div className="flex gap-2">
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-brand-500)] bg-white text-black-500 hover:bg-brand-500/40"
            aria-label="Add">
            <Plus size={16} />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-brand-500)] bg-white text-black-500 hover:bg-brand-500/40"
            aria-label="Wishlist">
            <Heart size={16} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h1
        className="mt-4 text-black-500"
        style={{
          fontSize: "var(--text-h3-size)",
          lineHeight: String(Number(varLine("--text-h3-line")) || 1.2),
        }}>
        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
      </h1>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-3">
        <div className="text-2xl font-semibold text-black-500">
          ${price.toFixed(2)}
        </div>
        <div className="text-lg text-black-200 line-through">
          ${compareAt.toFixed(2)}
        </div>
      </div>
      <p className="mt-1 text-sm text-black-200">
        This price is exclusive of taxes.
      </p>

      {/* Description */}
      <p className="mt-4 max-w-[52ch] text-[15px] leading-6 text-black-500/80">
        Lorem ipsum dolor sit , consectetur adipiscing elit, sed diam nonummy
        Lorem ipsum dolor sit amet, diam nonummy
      </p>

      <hr className="my-6 border-t border-grey-100/80" />

      {/* Type & Size selections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectBox
          label="Type"
          value={type.label}
          onOpen={() => {}}
          onChange={() => {}}>
          <NativeSelect
            value={type.value}
            onChange={(e) =>
              setType(TYPES.find((t) => t.value === e.target.value) || TYPES[0])
            }>
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </NativeSelect>
        </SelectBox>

        <SelectBox
          label="Size"
          value={size.label}
          onOpen={() => {}}
          onChange={() => {}}>
          <NativeSelect
            value={size.value}
            onChange={(e) =>
              setSize(SIZES.find((s) => s.value === e.target.value) || SIZES[0])
            }>
            {SIZES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </NativeSelect>
        </SelectBox>
      </div>

      {/* Colors */}
      <div className="mt-6">
        <h3 className="text-[18px] font-semibold text-black-500">Colors</h3>
        <div className="mt-3 flex items-center gap-4">
          {COLORS.map((c) => {
            const active = c.name === color.name;
            return (
              <button
                key={c.name}
                onClick={() => setColor(c)}
                className={[
                  "relative grid h-12 w-12 place-items-center rounded-full transition",
                  active
                    ? "ring-2 ring-black-500"
                    : "ring-1 ring-[rgba(0,0,0,0.08)]",
                ].join(" ")}
                aria-label={c.name}>
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="sr-only">{c.name}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-2 text-sm text-black-500">{color.name}</div>
      </div>

      {/* Quantity + Add to cart */}
      <div className="mt-6">
        <div className="flex items-baseline gap-2">
          <h4 className="text-[18px] font-semibold text-black-500">Quantity</h4>
          <span className="text-sm text-black-200">
            (${price.toFixed(2)} for Piece)
          </span>
        </div>

        <div className="mt-3 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          {/* Stepper */}
          <div className="inline-flex items-center gap-2 rounded-xl border border-grey-100 bg-white px-2 py-1">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="grid h-10 w-10 place-items-center rounded-lg bg-[rgba(0,0,0,0.04)] text-black-500"
              aria-label="Decrease">
              −
            </button>
            <div className="w-10 text-center text-lg font-semibold text-black-500">
              {String(qty).padStart(2, "0")}
            </div>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="grid h-10 w-10 place-items-center rounded-lg bg-[rgba(0,0,0,0.04)] text-black-500"
              aria-label="Increase">
              +
            </button>
          </div>

          {/* Total */}
          <div className="text-xl font-semibold text-black-500">
            ${total.toFixed(2)}
          </div>

          {/* CTA */}
          <button
            className="ml-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-800 px-6 py-4 text-white transition hover:brightness-95"
            aria-label="Add to cart">
            Add To Cart
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-90">
              <path
                d="M6 6h15l-1.5 9h-12z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="9" cy="20" r="1" fill="currentColor" />
              <circle cx="18" cy="20" r="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function NativeSelect({
  value,
  onChange,
  children,
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full appearance-none bg-transparent text-black-500 outline-none">
      {children}
    </select>
  );
}

function SelectBox({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  onOpen?: () => void;
  onChange?: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-grey-100 bg-white px-4 py-2">
      <div className="flex items-center justify-between border-b border-grey-100/80 pb-1">
        <span className="text-sm text-black-200">{label}</span>
      </div>
      <div className="flex items-center justify-between py-1.5">
        <div className="text-black-500">{value}</div>
        <ChevronDown className="text-black-200" size={18} />
      </div>
      {/* Native select overlaid (accessible) */}
      <div className="relative -mt-8 h-8">
        <div className="absolute inset-0 opacity-0">{children}</div>
      </div>
    </div>
  );
}

/* read non-numeric line-height safely from CSS var if you want exact control */
function varLine(_key: string) {
  return 1;
}
