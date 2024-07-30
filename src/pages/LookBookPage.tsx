import { LookBookItem } from "@/components/modules/LookBook/LookBookItem";
import { GetLookBockQuery } from "@/graphql/__generated__";

const LookBookPage = ({
  lookBook,
}: {
  lookBook: GetLookBockQuery["lookBook"];
}) => {
  return (
    <section className="pb-[130px] pt-[calc(var(--header-height)_+_48px)] max-tabletBig:pb-[96px] max-mobile:pb-[72px] max-mobile:pt-[calc(var(--header-height)_+_36px)]">
      <div className="container">
        <h1 className="heading pb-[32px] max-mobile:pb-6">Look book</h1>

        <div className="max-desktop1300:gap-24 flex flex-col gap-32 max-mobile:gap-[72px]">
          {lookBook &&
            lookBook.map((el) => {
              return <LookBookItem key={el.id} lookBook={el} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default LookBookPage;
