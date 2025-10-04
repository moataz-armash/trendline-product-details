"use client";

import Image from "next/image";
import { useMemo } from "react";
import commentIcon from "@/public/chat 01.svg";
import logoDividerTransperant from "@/public/logo_divider-transperant.svg";
import {
  DISTRIBUTION,
  RATING,
  REVIEWS,
  TOTAL_REVIEWS,
} from "../lib/ratingReviews";
import { formatK } from "../utils/ratingReviews";
import Stars from "./ratingReviews/Stars";

export default function RatingReviews() {
  const ratingText = useMemo(() => String(RATING).replace(".", ","), []);

  return (
    <section className="font-poppins mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {/* logo */}
      <Image
        src={logoDividerTransperant}
        alt=""
        width={80}
        height={80}
        priority
        className="shrink-0 my-2 md:my-8"
      />

      {/* Title */}
      <div className="mb-6">
        <h3 className="text-black-500 text-[18px] font-semibold">
          Rating & Reviews
        </h3>
        <div className="h-[3px] w-9 bg-brand-800 rounded mt-1" />
      </div>

      {/* Top summary row */}
      <div className="grid gap-8 lg:grid-cols-[minmax(160px,220px)_1fr_minmax(200px,260px)]">
        {/* Left: big rating */}
        <div className="text-center lg:text-left">
          <div className="relative leading-none text-black-500 text-[64px] lg:text-[72px] font-semibold">
            {ratingText}
            <div className="absolute bottom-0 right-32 md:right-16  font-medium text-black-100 text-[20px] -mt-1">
              /5
            </div>
          </div>
        </div>

        {/* Middle: distribution bars */}
        <div className="space-y-3">
          {DISTRIBUTION.map((pct, idx) => {
            const star = 5 - idx;
            return (
              <div key={star} className="flex items-center gap-3">
                <Stars count={star} size={14} className="shrink-0" />
                <div
                  className="flex-1 h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(196,196,196,0.35)" }}>
                  <div
                    className="h-full rounded-full bg-brand-800"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="w-10 text-sm text-black-200 text-right">
                  %{pct}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: total + button */}
        <aside className="grid justify-items-center gap-3 lg:justify-items-center">
          <div className="text-sm text-black-200">Total Reviews</div>
          <div className="text-4xl font-semibold text-black-300">
            {formatK(TOTAL_REVIEWS)}
          </div>
          <button
            className="inline-flex items-center gap-2 rounded-xl cursor-pointer bg-brand-800 px-4 py-2 text-white hover:brightness-95"
            aria-label="Add Comment">
            Add Comment
            <Image
              src={commentIcon}
              alt=""
              width={20}
              height={20}
              priority
              className="shrink-0 text-black-200 group-hover:brightness-75"
            />
          </button>
        </aside>
      </div>

      {/* Reviews list */}
      <ul className="mt-8">
        {REVIEWS.map((r, i) => (
          <li key={r.id} className="py-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-black-500">{r.name}</span>
                  <Stars count={r.stars} />
                </div>
              </div>
              <div className="text-sm text-black-200 whitespace-nowrap">
                {r.when}
              </div>
            </div>

            <p className="mt-3 text-[15px] leading-7 text-black-500/85">
              {r.text}
            </p>
          </li>
        ))}
      </ul>

      {/* View more */}
      <div className="mt-6 flex justify-center">
        <button
          className="rounded-xl  px-6 py-3 text-brand-800 cursor-pointer font-bold hover:bg-brand-800/20"
          aria-label="View more comments">
          View More Comments
        </button>
      </div>
    </section>
  );
}
