"use client";

import Image from "next/image";
import { useState } from "react";
import { Img } from "../types/img";

export default function ProductGallery({ images }: { images: Img[] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // thumbnails: show first 2, then a "+N" card if there are more
  const thumbs = total <= 3 ? images : images.slice(1, 3);

  return (
    <div className="w-full flex-1">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-3xl bg-gray-100">
        <div className="relative aspect-[6/5]">
          <Image
            key={images[index]?.alt}
            src={images[index]?.src}
            alt={images[index]?.alt || `Product image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-contain"
            priority
          />
        </div>

        {/* soft top gradient / “notch” vibe */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/10 to-transparent rounded-t-3xl" />

        {/* nav buttons */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 cursor-pointer -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-grey-100 text-white shadow hover:bg-brand-500">
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-brand-800 text-white shadow hover:bg-brand-500">
          ›
        </button>
      </div>

      {/* Thumbnails row */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {thumbs.map((img, i) => {
          const isActive = images.indexOf(img) === index;
          return (
            <button
              key={img.alt}
              onClick={() => setIndex(images.indexOf(img))}
              className={`relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow ${
                isActive ? "outline outline-2 outline-gray-900" : ""
              }`}>
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt || "Thumbnail"}
                  fill
                  sizes="(max-width: 768px) 33vw, 200px"
                  className="object-cover"
                />
              </div>
            </button>
          );
        })}

        {/* +N card when more than 3 images */}
        {total > 3 && (
          <div className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl bg-gray-900 text-white shadow-sm">
            {/* optional: show the 3rd image dimmed under the overlay */}
            <Image
              src={images[3].src}
              alt="More images"
              fill
              sizes="(max-width: 768px) 33vw, 200px"
              className="object-cover opacity-40"
            />
            <button
              onClick={() => setIndex(2)}
              className="absolute inset-0 grid place-items-center text-2xl font-semibold"
              aria-label={`Show more images (${total - 2} more)`}>
              +{total - 2}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
