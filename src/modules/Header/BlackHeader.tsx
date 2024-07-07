import { HeaderContent } from "./HeaderContent";

const BlackHeader = () => {
  return (
    <header className="h-[var(--header-height)] z-10 fixed w-full bg-[#F8F8F8]">
      <HeaderContent variant="black" />
    </header>
  );
};

export { BlackHeader };
