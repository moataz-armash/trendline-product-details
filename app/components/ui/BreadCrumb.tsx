// components/Breadcrumbs.tsx
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <ol className="flex items-center text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center">
              {i > 0 && <span className="px-2 text-gray-400">›</span>}
              {isLast ? (
                <span className="text-gray-400">{item.label}</span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="font-medium text-gray-900 hover:text-gray-700">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-900">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
