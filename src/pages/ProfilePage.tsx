"use client";

import { NewItemCart } from "@/components/elements/NewItemCart";
import { ProfileForm } from "@/components/modules/ProfilePage";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { getMeFx, updateUserFx } from "@/shared/context/user";
import { $user } from "@/shared/context/user/state";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useUnit } from "effector-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const user = useUnit($user);

  const spinner = useUnit(getMeFx.pending);
  const spinnerUpdate = useUnit(updateUserFx.pending);

  const router = useRouter();

  const { favorites, isLoading, loadFavorites } = useFavorite();

  useEffect(() => {
    loadFavorites();
  }, []);

  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Функция для обновления хеша
    const updateHash = () => {
      const currentHash = window.location.hash.substring(1);
      setHash(currentHash);
    };

    // Обновляем хеш при монтировании
    updateHash();

    // Слушаем изменения хеша
    window.addEventListener("hashchange", updateHash);

    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname, searchParams]);

  if (spinner || spinnerUpdate || isLoading) {
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  }

  return (
    <section className="pb-[86px] pt-[calc(var(--header-height)_+_48px)]">
      <Tabs
        value={hash}
        defaultValue={hash && hash.length > 0 ? hash : "profile"}
      >
        <TabsList>
          <div className="mx-auto max-w-[520px] px-4">
            <div className="grid grid-cols-3 gap-9 pb-[60px] max-tabletBig:gap-6 max-mobile:grid-cols-[1fr_0.8fr_1fr] max-mobile:gap-2 max-mobile:pb-[40px]">
              <TabsTrigger
                className="tab-trigger text-[15px] font-medium uppercase text-[#7D7D7D] max-mobile:text-[13px]"
                value="profile"
              >
                Личные данные
              </TabsTrigger>

              <TabsTrigger
                className="tab-trigger text-[15px] font-medium uppercase text-[#7D7D7D] max-mobile:text-[13px]"
                value="orders"
              >
                Заказы
              </TabsTrigger>

              <TabsTrigger
                className="tab-trigger text-[15px] font-medium uppercase text-[#7D7D7D] max-mobile:text-[13px]"
                value="favourites"
              >
                Избранное
              </TabsTrigger>
            </div>
          </div>
        </TabsList>

        <TabsContent value="profile">
          <div className="container-profile">
            {user && <ProfileForm user={user} />}
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <div className="container">
            <div className="mx-auto max-w-[453px]">
              <div className="flex flex-col gap-9">
                <div>
                  <div className="bg-[#F6F6F6] px-[21px] pt-[23px]">
                    <div className="flex justify-between pb-[27px]">
                      <p className="text-lg font-medium uppercase">
                        Заказ №3546
                      </p>

                      <p className="text-sm text-[#787878]">21.08.2024</p>
                    </div>

                    <div className="flex flex-col gap-8 pb-9">
                      <article className="grid grid-cols-[74px_1fr_85px] gap-3">
                        <div className="relative size-[74px]">
                          <Image src={"/newItem/1.png"} alt="test" fill />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <div className="flex flex-col">
                            <p>Повседневная рубашка</p>

                            <div className="text-sm text-[#7E7E7E]">
                              Размер:{" "}
                              <span className="text-darkGrayColor">S</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between gap-1">
                          <div className="flex flex-col items-end">
                            <p className="text-lg font-medium">10 000 ₽</p>

                            <span className="text-sm font-medium text-[#959595] line-through">
                              15 000 ₽
                            </span>
                          </div>

                          <div>1 ед.</div>
                        </div>
                      </article>

                      <article className="grid grid-cols-[74px_1fr_85px] gap-3">
                        <div className="relative size-[74px]">
                          <Image src={"/newItem/1.png"} alt="test" fill />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <div className="flex flex-col">
                            <p>Повседневная рубашка</p>

                            <div className="text-sm text-[#7E7E7E]">
                              Размер:{" "}
                              <span className="text-darkGrayColor">S</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between gap-1">
                          <div className="flex flex-col items-end">
                            <p className="text-lg font-medium">10 000 ₽</p>

                            <span className="text-sm font-medium text-[#959595] line-through">
                              15 000 ₽
                            </span>
                          </div>

                          <div>1 ед.</div>
                        </div>
                      </article>

                      <article className="grid grid-cols-[74px_1fr_85px] gap-3">
                        <div className="relative size-[74px]">
                          <Image src={"/newItem/1.png"} alt="test" fill />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <div className="flex flex-col">
                            <p>Повседневная рубашка</p>

                            <div className="text-sm text-[#7E7E7E]">
                              Размер:{" "}
                              <span className="text-darkGrayColor">S</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between gap-1">
                          <div className="flex flex-col items-end">
                            <p className="text-lg font-medium">10 000 ₽</p>

                            <span className="text-sm font-medium text-[#959595] line-through">
                              15 000 ₽
                            </span>
                          </div>

                          <div>1 ед.</div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div className="custom-shadow-footer relative flex flex-col bg-[#F8F8F8] after:absolute after:top-0 after:block after:h-[1px] after:w-full">
                    <div className="flex flex-col px-5 py-5">
                      <div className="flex flex-col gap-1 pb-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm">
                            Скидка{" "}
                            <span className="text-[#7E7E7E]">1 товар</span>:
                          </p>

                          <div className="text-sm font-medium">25%</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-lg">Общая стоимость:</p>

                          <div className="flex items-center justify-center gap-[6px]">
                            <p className="text-sm font-medium text-[#8B8B8B] line-through">
                              15 000 ₽
                            </p>

                            <p className="text-lg font-medium">10 000 ₽</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="h-[50px] bg-[#E3E3E3] text-sm font-medium uppercase"
                        variant={"outline"}
                      >
                        Повторить заказ
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-[#F6F6F6] px-[21px] pt-[23px]">
                    <div className="flex justify-between pb-[27px]">
                      <p className="text-lg font-medium uppercase">
                        Заказ №3546
                      </p>

                      <p className="text-sm text-[#787878]">21.08.2024</p>
                    </div>

                    <div className="flex flex-col gap-8 pb-9">
                      <article className="grid grid-cols-[74px_1fr_85px] gap-3">
                        <div className="relative size-[74px]">
                          <Image src={"/newItem/1.png"} alt="test" fill />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <div className="flex flex-col">
                            <p>Повседневная рубашка</p>

                            <div className="text-sm text-[#7E7E7E]">
                              Размер:{" "}
                              <span className="text-darkGrayColor">S</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between gap-1">
                          <div className="flex flex-col items-end">
                            <p className="text-lg font-medium">10 000 ₽</p>

                            <span className="text-sm font-medium text-[#959595] line-through">
                              15 000 ₽
                            </span>
                          </div>

                          <div>1 ед.</div>
                        </div>
                      </article>

                      <article className="grid grid-cols-[74px_1fr_85px] gap-3">
                        <div className="relative size-[74px]">
                          <Image src={"/newItem/1.png"} alt="test" fill />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <div className="flex flex-col">
                            <p>Повседневная рубашка</p>

                            <div className="text-sm text-[#7E7E7E]">
                              Размер:{" "}
                              <span className="text-darkGrayColor">S</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between gap-1">
                          <div className="flex flex-col items-end">
                            <p className="text-lg font-medium">10 000 ₽</p>

                            <span className="text-sm font-medium text-[#959595] line-through">
                              15 000 ₽
                            </span>
                          </div>

                          <div>1 ед.</div>
                        </div>
                      </article>

                      <article className="grid grid-cols-[74px_1fr_85px] gap-3">
                        <div className="relative size-[74px]">
                          <Image src={"/newItem/1.png"} alt="test" fill />
                        </div>

                        <div className="flex flex-col justify-between gap-1">
                          <div className="flex flex-col">
                            <p>Повседневная рубашка</p>

                            <div className="text-sm text-[#7E7E7E]">
                              Размер:{" "}
                              <span className="text-darkGrayColor">S</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between gap-1">
                          <div className="flex flex-col items-end">
                            <p className="text-lg font-medium">10 000 ₽</p>

                            <span className="text-sm font-medium text-[#959595] line-through">
                              15 000 ₽
                            </span>
                          </div>

                          <div>1 ед.</div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div className="custom-shadow-footer relative flex flex-col bg-[#F8F8F8] after:absolute after:top-0 after:block after:h-[1px] after:w-full">
                    <div className="flex flex-col px-5 py-5">
                      <div className="flex flex-col gap-1 pb-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm">
                            Скидка{" "}
                            <span className="text-[#7E7E7E]">1 товар</span>:
                          </p>

                          <div className="text-sm font-medium">25%</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-lg">Общая стоимость:</p>

                          <div className="flex items-center justify-center gap-[6px]">
                            <p className="text-sm font-medium text-[#8B8B8B] line-through">
                              15 000 ₽
                            </p>

                            <p className="text-lg font-medium">10 000 ₽</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="h-[50px] bg-[#E3E3E3] text-sm font-medium uppercase"
                        variant={"outline"}
                      >
                        Повторить заказ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="favourites">
          <div className="container">
            <div className="mx-auto max-w-[453px]">
              <div className="flex flex-col gap-6">
                {favorites.map((item) => {
                  return (
                    <NewItemCart
                      sizesImg="goods"
                      key={item.id}
                      link={`/goods/${item.id}`}
                      item={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProfilePage;
