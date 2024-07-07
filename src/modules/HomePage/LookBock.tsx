import Image from "next/image";

const LookBock = () => {
  return (
    <section className="max-w-[1307px] px-4 mx-auto p-4 my-[128px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div>
          <div className="mb-[128px]">
            <h1 className="text-3xl font-bold text-[#444444] mb-[18px]">
              LOOK BOOK
            </h1>
            <p className="mb-[36px] text-[#4F4F4F] max-w-[440px]">
              Изысканный костюм и белая рубашка – символы безупречного вкуса.
              Сумки светлых тонов завершают ваш образ, добавляя нотку роскоши.
            </p>

            <a href="">Смотркть</a>
          </div>
          <Image
            width={630}
            height={795}
            src="/lookBock/1.png"
            alt="Main Look"
          />
        </div>

        <div className="flex flex-col gap-[20px]">
          <Image
            width={630}
            height={482}
            src="/lookBock/2.png"
            alt="Main Look"
            className="h-fit"
          />

          <div className="flex gap-[20px]">
            <Image
              width={304}
              height={390}
              src="/lookBock/3.png"
              alt="Main Look"
              className="h-fit"
            />

            <Image
              width={304}
              height={390}
              src="/lookBock/4.png"
              alt="Main Look"
              className="mt-[100px] h-fit"
            />
          </div>
        </div>
        {/* <div className="col-span-2">
          <img
            src="/lookBock/1.png"
            alt="Main Look"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img src="/lookBock/2.png" alt="Look 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/lookBock/3.png" alt="Look 2" className="w-full h-auto" />
        </div>
        <div className="col-span-2">
          <img src="/lookBock/4.png" alt="Bag" className="w-full h-auto" />
        </div> */}
      </div>
    </section>
  );
};

export { LookBock };
