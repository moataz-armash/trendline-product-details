import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-w-7xl text-center py-16 mx-auto">
        <Link href="/ourCategory/t-shirt" className="underline text-7xl">
          Our Category
        </Link>
      </div>
    </>
  );
}
