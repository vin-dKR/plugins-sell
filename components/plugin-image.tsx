"use client";

import { useState } from "react";
import Image from "next/image";
import { getOfficialPluginIconSources } from "@/lib/plugin-images";

type PluginImageProps = {
  src: string;
  slug: string;
  alt: string;
  name: string;
  className?: string;
  priority?: boolean;
};

export function PluginImage({ src, slug, alt, name, className, priority = false }: PluginImageProps) {
  const officialSources = getOfficialPluginIconSources(slug);
  const sources = [src, ...officialSources.filter((source) => source !== src)];
  const [sourceIndex, setSourceIndex] = useState(0);
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
      src={sources[sourceIndex]}
      alt={alt}
      width={128}
      height={128}
      className={className}
      priority={priority}
      unoptimized
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((index) => index + 1);
        } else {
          setHasFailed(true);
        }
      }}
    />
  );
}
