import { SliderLookBook } from "@/components/elements/SliderRecommendations/SliderLookBook";
import { GetLookBockByIdQuery } from "@/graphql/__generated__";
import { pathImage } from "@/lib/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const LookBookItemPage = ({
  lookBookItem,
}: {
  lookBookItem: GetLookBockByIdQuery["lookBook_by_id"];
}) => {
  const first = lookBookItem && lookBookItem.mainImages?.[0];

  const second = lookBookItem && lookBookItem.mainImages?.slice(1, 3);

  const third = lookBookItem && lookBookItem.mainImages?.slice(3, 5);

  if (!lookBookItem) {
    return null;
  }

  return (
    <section className="pt-[calc(var(--header-height)_+_48px)] max-mobile:pt-[calc(var(--header-height)_+_36px)]">
      <div className="container">
        <div className="flex max-w-[626px] flex-col gap-[20px] pb-[49px] max-tabletBig:gap-4 max-tabletBig:pb-9">
          <h1 className="text-4xl max-tabletBig:text-[28px]">
            {lookBookItem.title}
          </h1>

          <p className="text-[20px] text-[#4F4F4F] max-tabletBig:text-base">
            {lookBookItem.description}
          </p>
        </div>

        {lookBookItem.mainImages.length > 0 && (
          <div className="grid h-full w-full max-w-[1080px] gap-[20px] mobile:grid-cols-[2.2fr_0.9fr_0.9fr]">
            <Image
              width={first.directus_files_id.width}
              height={first.directus_files_id.height}
              src={pathImage(first.directus_files_id.id)}
              alt="Main Look"
              className="h-full w-full object-cover"
            />

            <div className="grid gap-[20px] max-mobile:grid-cols-2 mobile:grid-rows-2">
              {second.map((el) => (
                <Image
                  key={el.id}
                  width={el.directus_files_id.width}
                  height={el.directus_files_id.height}
                  src={pathImage(el.directus_files_id.id)}
                  alt="Main Look"
                  className="h-full object-cover"
                />
              ))}
            </div>

            <div className="grid gap-[20px] max-mobile:grid-cols-2 mobile:grid-rows-2">
              {third.map((el) => (
                <Image
                  key={el.id}
                  width={el.directus_files_id.width}
                  height={el.directus_files_id.height}
                  src={pathImage(el.directus_files_id.id)}
                  alt="Main Look"
                  className="h-full object-cover"
                />
              ))}
            </div>
          </div>
        )}

        {lookBookItem.markdown && (
          <ReactMarkdown
            components={{
              li: ({ children }) => {
                return (
                  <li className="max-desktop1300:gap-[20px] grid gap-[105px] text-[20px] text-[#181818] max-mobile:gap-9 mobile:grid-cols-2">
                    {children}
                  </li>
                );
              },

              p: ({ children }) => {
                return (
                  <p className="pt-[90px] text-[20px] text-[#181818] max-tabletBig:pt-9">
                    {children}
                  </p>
                );
              },

              ol: ({ children }) => {
                return (
                  <ol className="flex flex-col gap-[170px] pt-[170px] max-tabletBig:pt-24 max-mobile:gap-24 max-mobile:pt-[72px]">
                    {children}
                  </ol>
                );
              },
            }}
          >
            {lookBookItem.markdown}
          </ReactMarkdown>
        )}

        {lookBookItem.slider.length > 0 && (
          <SliderLookBook
            className="pt-[150px] max-tabletBig:pt-[100px] max-mobile:pt-[72px]"
            container={false}
            title="товары из lookbook"
            items={lookBookItem.slider}
          />
        )}
      </div>
    </section>
  );
};

export default LookBookItemPage;
