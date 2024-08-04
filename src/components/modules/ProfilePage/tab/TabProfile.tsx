import { $user } from "@/shared/context/user/state";
import { ProfileForm } from "../ProfileForm";
import { useUnit } from "effector-react";

const TabProfile = () => {
  const user = useUnit($user);

  return (
    <div className="container-profile">
      {user && <ProfileForm user={user} />}
    </div>
  );
};

export { TabProfile };
