import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authQuery } from "@/shared/queries/authQueries";
import { toast } from "sonner";
import { toggleAuthFormOpen } from "@/shared/context/auth";

const ResetForm = () => {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    try {
      await authQuery.forgotPassword(email);
      toast.success(
        `Мы отправили письмо для восстановления пароля на ${email}.`,
      );

      toggleAuthFormOpen();
    } catch (e) {
      console.error("Ошибка восстановления", e);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button onClick={handleReset} variant={"secondary"} disabled={!email}>
        Отправить письмо
      </Button>
    </div>
  );
};

export { ResetForm };
