import { ProfileForm } from "@/components/modules/ProfilePage";

const ProfilePage = () => {
  return (
    <section className="pb-[86px] pt-[calc(var(--header-height)_+_48px)]">
      <div className="container-profile">
        <ProfileForm />
      </div>
    </section>
  );
};

export { ProfilePage };
