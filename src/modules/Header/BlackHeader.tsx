import { HeaderContent } from "./HeaderContent";

const BlackHeader = () => {
  return (
    <header className="fixed z-50 h-[var(--header-height)] w-full bg-headerBg">
      <HeaderContent variant="black" />
    </header>
  );
};

export { BlackHeader };
