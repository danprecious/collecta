"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  paths: string[];
  alt: string;
}

const ImageWithFallback = ({ paths, alt, ...props }: ImageWithFallbackProps) => {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [currentSrc, setCurrentSrc] = useState(paths[0]);
  const [hasError, setHasError] = useState(false);

  // Reset state when the list of paths changes (e.g., loading a different NFT)
  useEffect(() => {
    if (paths && paths.length > 0) {
      setCurrentPathIndex(0);
      setCurrentSrc(paths[0]);
      setHasError(false);
    }
  }, [paths]);

  // Update currentSrc whenever the index changes
  useEffect(() => {
    if (paths && currentPathIndex < paths.length) {
      setCurrentSrc(paths[currentPathIndex]);
    }
  }, [currentPathIndex, paths]);

  // Handler for when the image source fails to load (404, invalid format, etc.)
  const handleError = () => {
    if (currentPathIndex < paths.length - 1) {
      // If there is a next path to try, increment the index
      setCurrentPathIndex((prevIndex) => prevIndex + 1);
    } else {
      // All paths failed
      console.warn(`[ImageWithFallback] Failed to load image for all paths: ${paths.join(", ")}`);
      setHasError(true);
    }
  };

  if (hasError) {
    // Render a visual fallback placeholder if all attempts failed
    return (
      <div
        className={`${props.className || ""} flex items-center justify-center text-sm font-medium bg-gray-700/50`}
      >
        Image Unavailable
      </div>
    );
  }

  // Render the Next.js Image component with the current source
  // onError handles the retries until success or total failure.
  return (
    <Image
      src={currentSrc}
      onError={handleError}
      alt={alt}
      // Pass the remaining props (width, height, className)
      {...props}

    />
  );
};

export default ImageWithFallback;