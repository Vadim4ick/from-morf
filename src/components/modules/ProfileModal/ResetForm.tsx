import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authQuery } from "@/shared/queries/authQueries";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleReset = async () => {
    try {
      await authQuery.forgotPassword(email);
      setSent(true);
    } catch (e) {
      console.error("Ошибка восстановления", e);
    }
  };

  if (sent) {
    return (
      <p className="text-center text-sm text-green-600">
        Мы отправили письмо для восстановления пароля на {email}.
      </p>
    );
  }

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
