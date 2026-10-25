"use client";

import { useState } from "react";
import Image from "next/image";

type PluginImageProps = {
  src: string;
  alt: string;
  name: string;
  className?: string;
  priority?: boolean;
};

export function PluginImage({ src, alt, name, className, priority = false }: PluginImageProps) {
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-emerald-100 text-3xl font-bold text-emerald-800 ${className ?? ""}`}
      >
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={128}
      height={128}
      className={className}
      priority={priority}
      unoptimized
      onError={() => setHasFailed(true)}
    />
  );
}
