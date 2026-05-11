"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, className }: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <Image
      src={errored ? assetPath("/placeholder.svg") : src}
      alt={alt}
      fill
      className={className ?? "object-contain"}
      onError={() => setErrored(true)}
      unoptimized
    />
  );
}
