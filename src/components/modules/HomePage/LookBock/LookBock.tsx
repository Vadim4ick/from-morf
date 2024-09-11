"use client";

import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { Desktop } from "./layout/Desktop";
import { Tablet } from "./layout/Tablet";
import { Mobile } from "./layout/Mobile";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const";
import { MediaFragmentFragment } from "@/graphql/__generated__";

const LookBock = ({
  title,
  desc,
  images,
}: {
  title: string;
  desc: string;
  images: readonly { readonly directus_files_id: MediaFragmentFragment }[];
}) => {
  const ref = useRef(null);

  const inView = useInView(ref);

  const isTablet834 = useMediaQuery(834);
  const isMobile768 = useMediaQuery(768);

  const img1 = images[0].directus_files_id;
  const img2 = images[1].directus_files_id;
  const img3 = images[2].directus_files_id;
  const img4 = images[3].directus_files_id;

  const props = {
    title: title,
    description: desc,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
  };

  return (
    <motion.section
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="container my-32 max-mobile:my-[72px]"
    >
      {!isTablet834 && <Desktop {...props} />}

      {isTablet834 && !isMobile768 && <Tablet {...props} />}

      {isMobile768 && <Mobile {...props} />}
    </motion.section>
  );
};

export { LookBock };
