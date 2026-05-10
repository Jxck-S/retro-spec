"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, className }: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <Image
      src={errored ? "/placeholder.svg" : src}
      alt={alt}
      fill
      className={className ?? "object-cover"}
      onError={() => setErrored(true)}
      unoptimized
    />
  );
}
