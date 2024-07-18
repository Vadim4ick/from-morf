import { ReactNode } from "react";
import { createPortal } from "react-dom";

const Portal = ({
  children,
  where,
}: {
  children: ReactNode;
  where?: HTMLElement;
}) => {
  return createPortal(children, where ? where : document.body);
};

export { Portal };
