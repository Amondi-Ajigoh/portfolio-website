'use client';

import Link from 'next/link';
import { navigation } from '@/constants/navigation';

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          RA
        </Link>

        <ul className="flex gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}