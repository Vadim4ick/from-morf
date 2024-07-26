import { GetLookBockByIdQuery } from "@/graphql/__generated__";
import ReactMarkdown from "react-markdown";

const LookBookItemPage = ({
  lookBookItem,
}: {
  lookBookItem: GetLookBockByIdQuery["lookBook_by_id"];
}) => {
  return (
    <section className="pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <div className="flex max-w-[626px] flex-col gap-[20px] pb-[49px]">
          <h1 className="text-4xl">{lookBookItem.title}</h1>

          <p className="text-[20px] text-[#4F4F4F]">
            {lookBookItem.description}
          </p>
        </div>

        <ReactMarkdown
          components={{
            li: ({ children }) => {
              return (
                <li className="flex gap-[105px] text-[20px] text-[#181818]">
                  {children}
                </li>
              );
            },
            p: ({ children }) => {
              return (
                <p className="pb-[170px] text-[20px] text-[#181818]">
                  {children}
                </p>
              );
            },
            ol: ({ children }) => {
              return <ol className="flex flex-col gap-[170px]">{children}</ol>;
            },
          }}
        >
          {lookBookItem.test}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export { LookBookItemPage };
