import { HeaderContent } from "./HeaderContent";

const BlackHeader = () => {
  return (
    <header className="bg-headerBg fixed z-10 h-[var(--header-height)] w-full">
      <HeaderContent variant="black" />
    </header>
  );
};

export { BlackHeader };
