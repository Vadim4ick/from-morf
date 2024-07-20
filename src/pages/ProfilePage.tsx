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
      <div className="flex h-full w-full items-center justify-center">
        <Loader className="size-10" />
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
