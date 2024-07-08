import Image from "next/image";

const MainSlider = () => {
  return (
    <section className="relative h-screen">
      <Image
        priority
        className="object-cover"
        alt="1.png"
        src={`/test.png`}
        fill
      />
    </section>
  );
};

export { MainSlider };
