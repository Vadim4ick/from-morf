import { LookBookItem } from "@/components/modules/LookBook/LookBookItem";
import { GetLookBockQuery } from "@/graphql/__generated__";

const LookBookPage = ({
  lookBook,
}: {
  lookBook: GetLookBockQuery["lookBook"];
}) => {
  return (
    <section className="pb-[86px] pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <h1 className="pb-[32px] text-center text-[32px] font-medium uppercase">
          Look book
        </h1>

        {lookBook.map((el) => {
          return <LookBookItem key={el.id} lookBook={el} />;
        })}
      </div>
    </section>
  );
};

export { LookBookPage };
