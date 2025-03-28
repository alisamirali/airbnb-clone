"use client";

import Image from "next/image";

type Props = {
  src?: string | null;
};

export function Avatar({ src }: Props) {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/user.jpg"}
    />
  );
}
