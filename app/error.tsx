/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { EmptyState } from "@/app/components";

export default function ErrorPage({ error }: { error: any }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
}
