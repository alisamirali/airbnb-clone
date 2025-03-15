"use client";

import { Button } from "@/app/components/Button";
import { DatePicker } from "@/app/components/inputs";
import { Range } from "react-date-range";

type ListingReservationProps = {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
};

export function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}: ListingReservationProps) {
  return (
    <div
      className="
      bg-white
        rounded-xl
        border-[1px]
      border-neutral-200
        overflow-hidden
      "
    >
      <div className="flex flex-row items-center gap-1 p-4 ">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <DatePicker
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between p-4 text-lg font-semibold ">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
}
