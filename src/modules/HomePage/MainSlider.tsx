import Image from "next/image";

const MainSlider = () => {
  return (
    <section className="relative h-screen">
      <Image objectFit="cover" alt="1.png" src={"/test@2x.png"} fill />
    </section>
  );
};

export { MainSlider };
