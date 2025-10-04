import Image from "next/image";

export default function ContactUs({ className = "" }: { className?: string }) {
  const icons = [
    { alt: "phone", src: "/footer/phone.svg", title: "+87 01928491" },
    { alt: "email", src: "/footer/email.svg", title: " Named@gmail.com" },
    { alt: "map", src: "/footer/map.svg", title: "381, cairo, egypt" },
  ];
  return (
    <div className="md:hidden">
      <h4 className="text-lg font-semibold">Contact Us</h4>
      <ul className="mt-4 space-y-3 text-white/85 text-sm">
        {icons.map((i) => (
          <li className="flex items-center gap-3" key={i.title}>
            <a
              key={i.alt}
              href="#"
              aria-label={i.alt}
              className="opacity-90 hover:opacity-100">
              <Image src={i.src} alt={i.alt} width={20} height={20} />
            </a>{" "}
            {i.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
