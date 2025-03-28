"use client";

import { IconType } from "react-icons";

type CategoryViewProps = {
  icon: IconType;
  label: string;
  description: string;
};

export function CategoryView({
  icon: Icon,
  label,
  description,
}: CategoryViewProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="font-light text-neutral-500">{description}</div>
        </div>
      </div>
    </div>
  );
}
