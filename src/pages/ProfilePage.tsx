"use client";

import { ProfileForm } from "@/components/modules/ProfilePage";
import { Loader } from "@/components/ui/loader";
import { getMeFx, updateUserFx } from "@/shared/context/user";
import { $user } from "@/shared/context/user/state";
import { useUnit } from "effector-react";

const ProfilePage = () => {
  const user = useUnit($user);

  const spinner = useUnit(getMeFx.pending);
  const spinnerUpdate = useUnit(updateUserFx.pending);

  if (spinner || spinnerUpdate) {
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  }

  return (
    <section className="pb-[86px] pt-[calc(var(--header-height)_+_48px)]">
      <div className="container-profile">
        {user && <ProfileForm user={user} />}
      </div>
    </section>
  );
};

export { ProfilePage };
