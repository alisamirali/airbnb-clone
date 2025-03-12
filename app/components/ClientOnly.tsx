"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
