"use client";

import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { Desktop } from "./layout/Desktop";
import { Tablet } from "./layout/Tablet";
import { Mobile } from "./layout/Mobile";

const LookBock = () => {
  const isTablet834 = useMediaQuery(834);
  const isMobile768 = useMediaQuery(768);

  return (
    <section className="container my-32 py-4 max-mobileSmall:my-[72px]">
      {!isTablet834 && <Desktop />}

      {isTablet834 && !isMobile768 && <Tablet />}

      {isMobile768 && <Mobile />}
    </section>
  );
};

export { LookBock };
