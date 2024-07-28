import { BasketIcon } from "@/shared/icons/header/BasketIcon";
import clsx from "clsx";
import { VariantHeader } from "../Header/Header";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Basket } from "@/shared/icons/Basket";
import { BasketItem } from "./BasketItem";
import { useGetBasket } from "@/shared/services/getBasket";
import { User } from "@/shared/types/authForm";
import { cn } from "@/lib/utils";

const BasketModal = ({
  variant,
  user,
}: {
  variant: VariantHeader;
  user: User;
}) => {
  const { data, isLoading } = useGetBasket(user.id);

  if (isLoading) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <BasketIcon
            className={clsx("cursor-pointer text-transparent", {
              "stroke-darkGrayColor": variant === "black",
              "stroke-white": variant === "white",
            })}
          />
        </div>
      </DialogTrigger>

      <DialogContent
        portal={false}
        className="flex h-full max-h-[496px] w-full max-w-[430px] flex-col gap-0 bg-[#F8F8F8] p-0"
      >
        <DialogHeader className="custom-shadow-footer relative py-[20px] after:h-[1px]">
          <div className="flex flex-col gap-2 pb-2">
            <DialogTitle className="text-lg font-medium uppercase">
              корзина
            </DialogTitle>

            <span className="text-sm text-[#7E7E7E]">2 товара</span>
          </div>

          <button className="absolute right-6 top-6">
            <DeleteBasket />
          </button>
        </DialogHeader>

        <div
          className={cn(
            "flex flex-grow flex-col gap-8 overflow-scroll px-5 pb-5",
            {
              "items-center justify-center":
                !data?.basket || data?.basket.length === 0,
            },
          )}
        >
          {!data?.basket ||
            (data?.basket.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-8">
                <Basket />

                <p>В вашей корзине ничего нет</p>
              </div>
            ))}

          {data?.basket.map((basket) => {
            return <BasketItem key={basket.id} item={basket} />;
          })}
        </div>

        <DialogFooter className="custom-shadow-footer relative after:h-[1px]">
          <Button className="m-5" variant={"secondary"}>
            Перейти к новинкам
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { BasketModal };
