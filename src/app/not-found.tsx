import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] pb-40 px-4 text-center">
      <span className="text-8xl md:text-9xl font-bold text-[var(--neutral-on-background-strong)] mb-4">
        404
      </span>
      <h1 className="text-2xl md:text-4xl font-bold text-[var(--neutral-on-background-weak)] mb-6">
        Page Not Found
      </h1>
      <p className="text-lg text-[var(--neutral-on-background-weak)] mb-10">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[var(--brand-solid-strong)] text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
      >
        Go back home
      </Link>
    </section>
  );
}
