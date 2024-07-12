// "use client";

// import { NewItemCart } from "@/components/elements/NewItemCart";
// import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
// import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";

// const arr = [
//   {
//     id: 1,
//     desc: "Как создать капсульный гардероб: основные принципы и идеи",
//     images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
//     sizes: [36, 38, 40, 42],
//   },
//   {
//     id: 2,
//     desc: "Как создать капсульный гардероб: основные принципы и идеи",
//     images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
//     sizes: [36, 38, 40, 42],
//   },
//   {
//     id: 3,
//     desc: "Как создать капсульный гардероб: основные принципы и идеи",
//     images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
//     sizes: [36, 38, 40, 42],
//   },
// ];

// const NewItems = () => {
//   const isTablet991 = useMediaQuery(991);
//   const isTablet768 = useMediaQuery(768);

//   const first = arr[0];
//   const otherElementsTwo = arr.slice(!isTablet991 ? 1 : 2);
//   const otherElementsOne = arr.slice(1);

//   return (
//     <section className="pt-16">
//       <div className="container px-[67px] max-tabletSmall:px-4">
//         <h3 className="mb-5 text-2xl font-bold uppercase">новинки</h3>

//         {!isTablet768 && (
//           <div className="flex gap-5">
//             <NewItemCart sizesImg="big" item={first} />

//             <div className="flex flex-col justify-between">
//               <div className="flex gap-5">
//                 {otherElementsTwo.map((item) => (
//                   <NewItemCart key={item.id} item={item} />
//                 ))}
//               </div>

//               <ButtonAnimate className="mb-12 ml-auto">
//                 все новинки
//               </ButtonAnimate>
//             </div>
//           </div>
//         )}

//         {isTablet768 && (
//           <div>
//             <NewItemCart sizesImg="big" item={first} />

//             <div className="flex flex-col justify-between">
//               <div className="flex gap-5">
//                 {otherElementsOne.map((item) => (
//                   <NewItemCart key={item.id} item={item} />
//                 ))}
//               </div>

//               <ButtonAnimate className="mb-12 ml-auto">
//                 все новинки
//               </ButtonAnimate>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export { NewItems };

"use client";

import { NewItemCart } from "@/components/elements/NewItemCart";
import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";

const arr = [
  {
    id: 1,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 2,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 3,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
];

const NewItems = () => {
  const isTablet991 = useMediaQuery(991);
  const isTablet768 = useMediaQuery(450);

  const first = arr[0];
  const otherElements = isTablet768
    ? arr.slice(1)
    : arr.slice(!isTablet991 ? 1 : 2);

  return (
    <section className="pt-16">
      <div className="container px-[67px] max-tabletSmall:px-4">
        <h3 className="mb-5 text-2xl font-bold uppercase">новинки</h3>

        <div className="flex gap-[20px] max-mobileSmall:flex-col">
          <NewItemCart sizesImg="big" item={first} />

          <div className="flex flex-col justify-between max-mobileSmall:gap-[36px]">
            <div className="flex gap-5">
              {otherElements.map((item) => (
                <NewItemCart key={item.id} item={item} />
              ))}
            </div>

            <ButtonAnimate className="ml-auto tabletSmall:mb-12">
              все новинки
            </ButtonAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewItems };
