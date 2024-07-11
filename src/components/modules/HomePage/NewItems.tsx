import { NewItemCart } from "@/components/elements/NewItemCart";
import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";

const arr = [
  {
    id: 1,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 2,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 3,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
];

const NewItems = () => {
  const first = arr[0];
  const otherElements = arr.slice(1);

  return (
    <section className="pt-16">
      <div className="container">
        <h3 className="mb-5 text-2xl font-bold uppercase">новинки</h3>

        <div className="flex gap-5">
          <NewItemCart sizesImg="big" item={first} />

          <div className="flex flex-col justify-between">
            <div className="flex gap-5">
              {otherElements.map((item) => (
                <NewItemCart key={item.id} item={item} />
              ))}
            </div>

            <ButtonAnimate className="mb-12 ml-auto">все новинки</ButtonAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewItems };
