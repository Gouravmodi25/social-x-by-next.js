"use client";

import { IKImage } from "imagekitio-next";
import React from "react";

type Image = {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, width, height, alt, className, tr }: Image) => {
  return (
    <>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        alt={alt}
        className={className}
        {...(tr
          ? { transformation: [{ width: `${width}`, height: `${height}` }] }
          : { width: width, height: height })}
      />
    </>
  );
};

export default Image;
