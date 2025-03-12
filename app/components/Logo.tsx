"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return (
    <Image
      src="/images/logo.png"
      alt="Airbnb"
      width={100}
      height={100}
      className="hidden md:block cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
}
