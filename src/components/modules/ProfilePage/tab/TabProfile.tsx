import { $user } from "@/shared/context/user/state";
import { ProfileForm } from "../ProfileForm";
import { useUnit } from "effector-react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { motionConfigAnimate } from "@/shared/const";

const TabProfile = () => {
  const user = useUnit($user);

  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="container-profile"
    >
      {user && <ProfileForm user={user} />}
    </motion.div>
  );
};

export { TabProfile };
