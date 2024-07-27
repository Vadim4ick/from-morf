import { LookBookItem } from "@/components/modules/LookBook/LookBookItem";
import { GetLookBockQuery } from "@/graphql/__generated__";

const LookBookPage = ({
  lookBook,
}: {
  lookBook: GetLookBockQuery["lookBook"];
}) => {
  return (
    <section className="pb-[130px] pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <h1 className="heading pb-[32px]">Look book</h1>

        <div className="flex flex-col gap-32">
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
