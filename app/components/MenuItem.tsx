"use client";

type Props = {
  onClick: () => void;
  label: string;
};

export function MenuItem({ onClick, label }: Props) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
    >
      {label}
    </div>
  );
}
