import { SliderRecommendations } from "@/components/elements/SliderRecommendations";
import { GetLookBockByIdQuery } from "@/graphql/__generated__";
import { pathImage } from "@/lib/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const LookBookItemPage = ({
  lookBookItem,
}: {
  lookBookItem: GetLookBockByIdQuery["lookBook_by_id"];
}) => {
  const first = lookBookItem.mainImages?.[0];

  const second = lookBookItem.mainImages?.slice(1, 3);

  const third = lookBookItem.mainImages?.slice(3, 5);

  return (
    <section className="pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <div className="flex max-w-[626px] flex-col gap-[20px] pb-[49px]">
          <h1 className="text-4xl">{lookBookItem.title}</h1>

          <p className="text-[20px] text-[#4F4F4F]">
            {lookBookItem.description}
          </p>
        </div>

        {lookBookItem.mainImages.length > 0 && (
          <div className="grid h-full w-full max-w-[1080px] grid-cols-[1fr_250px_250px] gap-[20px]">
            <Image
              width={first.directus_files_id.width}
              height={first.directus_files_id.height}
              src={pathImage(first.directus_files_id.id)}
              alt="Main Look"
              className="h-full w-full object-fill"
            />

            <div className="flex flex-col justify-between gap-[20px]">
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
            <div className="flex flex-col justify-between gap-[20px]">
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
                  <li className="flex gap-[105px] text-[20px] text-[#181818]">
                    {children}
                  </li>
                );
              },
              p: ({ children }) => {
                return (
                  <p className="pt-[90px] text-[20px] text-[#181818]">
                    {children}
                  </p>
                );
              },
              ol: ({ children }) => {
                return (
                  <ol className="flex flex-col gap-[170px] pt-[170px]">
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
          <SliderRecommendations
            className="pt-[150px]"
            container={false}
            title="товары из lookbook"
            items={lookBookItem.slider}
          />
        )}
      </div>
    </section>
  );
};

export { LookBookItemPage };
