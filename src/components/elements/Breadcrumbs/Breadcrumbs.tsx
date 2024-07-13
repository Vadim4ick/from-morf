import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const breadcrumb = [
  { text: "Главная", href: "/" },
  { text: "Новинки", href: "/components" },
  { text: "Повседневная рубашка", href: "/components" },
];

const Breadcrumbs = ({ className = "" }: { className?: string }) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {breadcrumb.map((breadcrumbItem, idx) => {
          if (idx === breadcrumb.length - 1) {
            return (
              <React.Fragment key={breadcrumbItem.text}>
                <BreadcrumbItem className="text-[14px]">
                  <BreadcrumbPage className="text-[#A1A1A1]">
                    {breadcrumbItem.text}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </React.Fragment>
            );
          } else {
          }
          return (
            <React.Fragment key={breadcrumbItem.text}>
              <BreadcrumbItem className="text-[14px] text-[#444444]">
                <BreadcrumbLink href={breadcrumbItem.href}>
                  {breadcrumbItem.text}
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>/</BreadcrumbSeparator>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { Breadcrumbs };
