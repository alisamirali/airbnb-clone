/* eslint-disable no-var */
"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var cloudinary: any;
}

const uploadPreset = "m2xlhfqr";

type ImageUploadProps = {
  onChange: (value: string) => void;
  value: string;
};

export function ImageUpload({ onChange, value }: ImageUploadProps) {
  const handleUpload = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
        sources: ["local"],
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex flex-col items-center justify-center gap-3 p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600"
          >
            <TbPhotoPlus size={50} />

            <div className="text-lg font-semibold">Click to upload</div>

            {value && (
              <div className="absolute inset-0 w-full h-full ">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}
