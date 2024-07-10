import Image from "next/image";

const LookBock = () => {
  return (
    <section className="container my-32 py-4">
      <div className="grid grid-cols-2 gap-[20px]">
        <div>
          <div className="mb-32">
            <h1 className="mb-[18px] text-3xl font-bold">LOOK BOOK</h1>
            <p className="mb-9 max-w-[440px] text-[#4F4F4F]">
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
