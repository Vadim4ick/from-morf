import { GetLookBockByIdQuery } from "@/graphql/__generated__";

const LookBookItemPage = ({
  lookBookItem,
}: {
  lookBookItem: GetLookBockByIdQuery["lookBook_by_id"];
}) => {
  return (
    <section className="pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-4xl">{lookBookItem.title}</h1>

          <p>{lookBookItem.description}</p>
        </div>
      </div>
    </section>
  );
};

export { LookBookItemPage };
