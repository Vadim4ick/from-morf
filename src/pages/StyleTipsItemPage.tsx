import { GetTipsItemPageQuery } from "@/graphql/__generated__";
import { formatDate } from "@/lib/utils";

const StyleTipsItemPage = ({
  item,
}: {
  item: GetTipsItemPageQuery["styleTips_by_id"];
}) => {
  return (
    <section className="pt-[calc(var(--header-height)_+_68px)]">
      <div className="container">
        <p className="pb-[18px] text-[14px] text-[#707070]">
          {formatDate(item.date_created)}
        </p>
      </div>
    </section>
  );
};

export { StyleTipsItemPage };
