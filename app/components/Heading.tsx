"use client";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function Heading({ title, subtitle, center }: Props) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 font-light text-neutral-500">{subtitle}</p>
    </div>
  );
}
