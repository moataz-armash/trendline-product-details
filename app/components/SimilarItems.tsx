"use client";

import Image from "next/image";
import { useRef } from "react";
import { SimilarItemsProps } from "../types/similarItems";
import bagAddIcon from "@/public/bag-add.svg";
import favorite from "@/public/love.svg";

export default function SimilarItems({ items }: SimilarItemsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.95;
    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="font-poppins max-w-7xl px-6 lg:px-8 mx-auto">
      {/* heading */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="text-[22px] font-semibold text-[var(--color-black-500)]">
            Similar Items
          </h2>
          <div className="mt-1 h-[3px] w-10 rounded bg-[var(--color-brand-800)]" />
        </div>
      </div>

      {/* scroller */}
      <div
        ref={scrollerRef}
        className="
          relative
          -mx-4 overflow-x-auto px-4 pb-6
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        ">
        <div
          className="
            flex gap-6
            snap-x snap-mandatory
            md:[--card-w:290px] lg:[--card-w:300px]
          ">
          {items.map((p) => (
            <article
              key={p.id}
              className="
                snap-start
                w-[85%] sm:w-[60%] md:w-[var(--card-w)] lg:w-[var(--card-w)]
                shrink-0 rounded-3xl border border-black/5 bg-white shadow-sm
              ">
              {/* image */}
              <div className="relative rounded-3xl rounded-b-none bg-white">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:1024px) 80vw, 300px"
                    className="object-contain"
                  />
                </div>

                {/* discount badge */}
                {p.discountLabel && (
                  <span className="absolute left-4 top-4 rounded-lg border border-[var(--color-brand-800)] bg-white/80 px-2 py-1 text-[11px] font-medium text-[var(--color-brand-800)] backdrop-blur">
                    {p.discountLabel}
                  </span>
                )}

                {/* action buttons (top-right) */}
                <div className="absolute right-4 top-4 grid gap-2">
                  <IconButton aria-label="Add to cart">
                    <Image
                      src={bagAddIcon}
                      alt=""
                      width={20}
                      height={20}
                      priority
                      className="shrink-0 text-black-200 group-hover:brightness-75"
                    />
                  </IconButton>
                  <IconButton aria-label="Add to wishlist">
                    <Image
                      src={favorite}
                      alt=""
                      width={20}
                      height={20}
                      priority
                      className="shrink-0 text-black-200 group-hover:brightness-75"
                    />
                  </IconButton>
                </div>
              </div>

              {/* meta */}
              <div className="space-y-2 px-4 pb-4 pt-3">
                <div className="flex items-center justify-between text-[12px] text-[var(--color-black-200)]">
                  <span>{p.category}</span>
                  <span className="inline-flex items-center gap-1 text-[var(--color-brand-800)]">
                    <StarIcon className="translate-y-[1px]" />
                    <span className="text-[var(--color-black-500)]">
                      {p.rating.toFixed(1)}
                    </span>
                    <span className="text-[var(--color-black-200)]">
                      ({p.reviews.toLocaleString()})
                    </span>
                  </span>
                </div>

                <h3
                  className="line-clamp-2 text-[15px] font-medium text-[var(--color-black-500)]"
                  title={p.title}>
                  {p.title}
                </h3>

                {/* price row */}
                <div className="mt-2 flex items-baseline gap-3">
                  <div className="text-[18px] font-bold text-[var(--color-black-500)]">
                    AED {p.price.toFixed(0)}
                  </div>
                  {p.compareAtPrice && (
                    <div className="text-[14px] text-[var(--color-black-200)] line-through">
                      AED {p.compareAtPrice.toFixed(0)}
                    </div>
                  )}
                </div>

                {/* color swatches */}
                <div className="mt-2 flex items-center gap-2">
                  {p.colors.slice(0, 3).map((c, i) => (
                    <span
                      key={c + i}
                      className="inline-block h-4 w-4 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: c }}
                      aria-hidden
                    />
                  ))}
                  {p.colors.length > 3 && (
                    <span className="pl-1 text-[13px] text-[var(--color-black-500)]">
                      +{p.colors.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* center nav pills */}
      <div className="mt-2 flex items-center justify-center gap-5">
        <button
          onClick={() => scrollByPage("prev")}
          className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-[var(--color-black-500)] hover:bg-black/10"
          aria-label="Previous">
          <ChevronLeft />
        </button>
        <button
          onClick={() => scrollByPage("next")}
          className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-brand-800)] text-white hover:brightness-95"
          aria-label="Next">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

function IconButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(0,0,0,0.08)] bg-white/90 text-[var(--color-black-500)] shadow-sm hover:bg-white">
      {children}
    </button>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path d="M10 1.8l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9 5.06 17l.94-5.5-4-3.9 5.53-.8L10 1.8z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
