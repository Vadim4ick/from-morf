import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";
import {
  GetLastTwoStyleTipsQuery,
  GetTipsItemPageQuery,
} from "@/graphql/__generated__";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const StyleTipsItemPage = ({
  item,
  styleTwoTips,
}: {
  item: GetTipsItemPageQuery["styleTips_by_id"];
  styleTwoTips: GetLastTwoStyleTipsQuery["styleTips"];
}) => {
  return (
    <>
      {item && (
        <section className="pt-[calc(var(--header-height)_+_68px)]">
          <div className="container">
            <div className="max-w-[952px]">
              <p className="pb-[18px] text-[14px] text-[#707070]">
                {formatDate(item.date_created)}
              </p>

              <h1 className="text-4xl">{item.title}</h1>

              <ReactMarkdown
                components={{
                  p: ({ children }) => {
                    return (
                      <p className="pt-[36px] text-xl text-[#181818]">
                        {children}
                      </p>
                    );
                  },
                  h2: ({ children }) => {
                    return (
                      <h2 className="pt-[69px] text-[28px]">{children}</h2>
                    );
                  },
                  ul: ({ children }) => {
                    return (
                      <ul className="auto-layout grid grid-cols-2 gap-3 pt-12">
                        {children}
                      </ul>
                    );
                  },
                }}
              >
                {item.markdown}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      )}

      {styleTwoTips && (
        <StyleAdvice
          className="pt-[160px]"
          title="Другие статьи"
          styleTips={styleTwoTips}
        />
      )}
    </>
  );
};

export default StyleTipsItemPage;
