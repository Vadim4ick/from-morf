/* eslint-disable @next/next/no-img-element */
"use client";

import { Close } from "@/shared/icons/Close";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Portal } from "./portal";

interface LightboxProps {
  children: ReactNode;
  imageUrl: string;
}

const Lightbox = ({ children, imageUrl }: LightboxProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [lightboxOpen, setLightBoxOpen] = useState<boolean>(false);

  const onClick = () => {
    setLightBoxOpen(!lightboxOpen);
  };

  const closeLightbox = () => {
    setLightBoxOpen(false);
  };

  useEffect(() => {
    if (lightboxOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [lightboxOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && e.target === ref.current) {
        closeLightbox();
      }
    };

    if (ref.current) {
      ref.current.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("click", handleClickOutside);
      }
    };
  }, [lightboxOpen]);

  return (
    <>
      <div className="h-full w-full cursor-pointer" onClick={onClick}>
        {children}
      </div>

      {lightboxOpen && (
        <Portal>
          <div
            ref={ref}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#5B5B5B8A]/55 bg-opacity-75 max-tabletBig:px-4"
          >
            <div className="relative">
              <img
                src={imageUrl}
                alt="Lightbox"
                className="max-h-full max-w-full"
              />
              <button
                className="absolute -right-[41px] top-0 flex size-9 items-center justify-center text-white max-tabletBig:right-1 max-tabletBig:top-1 tabletBig:bg-[#E4E4E4]"
                onClick={closeLightbox}
              >
                <Close className="text-black" />
              </button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export { Lightbox };
