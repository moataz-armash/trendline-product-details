import Image from "next/image";

export default function Socials({ className = "" }: { className?: string }) {
  const icons = [
    { alt: "Facebook", src: "/footer/facebook.svg" },
    { alt: "Twitter", src: "/footer/twitter.svg" },
    { alt: "Instagram", src: "/footer/instagram.svg" },
    { alt: "LinkedIn", src: "/footer/linkedin.svg" },
    {
      alt: "WhatsApp",
      src: "/footer/whatsApp.svg",
      swap: "/footer/telegram.svg",
    },
    { alt: "Telegram", src: "/footer/telegram.svg" },
  ];
  return (
    <div className={["flex items-center gap-4", className].join(" ")}>
      {icons.map((i) => (
        <a
          key={i.alt}
          href="#"
          aria-label={i.alt}
          className="opacity-90 hover:opacity-100">
          <Image src={i.src} alt={i.alt} width={20} height={20} />
        </a>
      ))}
    </div>
  );
}
