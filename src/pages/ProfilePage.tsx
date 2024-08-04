"use client";

import { ProfileTabs } from "@/components/modules/ProfilePage/ProfileTabs";
import { Loader } from "@/components/ui/loader";
import { getMeFx, updateUserFx } from "@/shared/context/user";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { useUnit } from "effector-react";
import { useEffect } from "react";

const ProfilePage = () => {
  const spinner = useUnit(getMeFx.pending);
  const spinnerUpdate = useUnit(updateUserFx.pending);

  const { isLoading, loadFavorites } = useFavorite();

  useEffect(() => {
    loadFavorites();
  }, []);

  if (spinner || spinnerUpdate || isLoading) {
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  }

  return (
    <section className="pb-[86px] pt-[calc(var(--header-height)_+_48px)]">
      <ProfileTabs />
    </section>
  );
};

export default ProfilePage;
