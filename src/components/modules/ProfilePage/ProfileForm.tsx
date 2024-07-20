import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProfileForm = () => {
  return (
    <form>
      {/* Avatar */}
      <div></div>

      <div className="flex flex-col gap-[72px]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <label className="flex w-full cursor-pointer flex-col gap-[6px]">
              <p>Имя*</p>

              <Input className="rounded-[2px] bg-[#EBEBEB]" />
            </label>

            <label className="flex w-full cursor-pointer flex-col gap-[6px]">
              <p>Фамилия*</p>

              <Input className="rounded-[2px] bg-[#EBEBEB]" />
            </label>
          </div>

          <p className="text-sm text-[#939393]">
            Проверьте правильность ввода личных данных, они необходимы для
            получения и оформления заказа
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-medium uppercase">Электронная почта</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            <p>Введите вашу почту</p>

            <Input className="rounded-[2px] bg-[#EBEBEB]" />
          </label>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-medium uppercase">Номер телефона</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            <p>Введите номер телефона (+7)</p>

            <Input className="rounded-[2px] bg-[#EBEBEB]" />
          </label>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-medium uppercase">Адрес</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            <p>Введите адрес доставки</p>

            <Input className="rounded-[2px] bg-[#EBEBEB]" />
          </label>
        </div>

        <Button variant={"secondary"} className="w-full">
          Сохранить изменения
        </Button>
      </div>
    </form>
  );
};

export { ProfileForm };
