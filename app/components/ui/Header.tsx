import Image from "next/image";
import headerBG from "@/public/headerBG.png";

export default function Header({
  title = "Product Details",
}: {
  title?: string;
}) {
  console.log(
    title
      .split("-")
      .map((t) => t.slice(0, 1).toUpperCase() + "-" + t.slice(1, t.length))
  );
  return (
    <section
      className="
        relative isolate overflow-hidden
        h-28 sm:h-40 bg-gray-100 rounded-none opacity-80 
      ">
      {/* background image */}
      <Image
        src={headerBG}
        alt="header background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* huge faint background label */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden>
        <span
          className="select-none font-extrabold leading-none tracking-tight
            text-stroke
             text-[clamp(1rem,6vw,4rem)] opacity-40">
          {title
            .split("-")
            .map((t) => t.slice(0, 1).toUpperCase() + t.slice(1))
            .join("-")}
        </span>
      </div>

      {/* visible title */}
      <div className="relative z-10 h-full grid place-items-center">
        <h1 className="text-xl sm:text-3xl font-semibold text-gray-900">
          {title
            .split("-")
            .map((t) => t.slice(0, 1).toUpperCase() + t.slice(1))
            .join("-")}
        </h1>
      </div>
    </section>
  );
}
