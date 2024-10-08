"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Close } from "@/shared/icons/Close";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-[#5B5B5B8A]/55 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// max-mobileSmall:pt-[40px] max-mobileSmall:pl-[16px] max-mobileSmall:pb-[33px]
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background shadow-lg transition rounded-[2px] ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        custom: "data-[state=closed]:duration-0 data-[state=open]:duration-0",
        right:
          "bottom-[4px] right-[4px] h-[calc(100%_-_8px)] w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps & {
    customOverlay?: boolean;
    close?: boolean;
    portal?: boolean;
    open?: boolean;
    portalElement?: HTMLElement | undefined;
  }
>(
  (
    {
      side = "right",
      className,
      close = true,
      customOverlay,
      portal = true,
      portalElement,
      open,
      children,
      ...props
    },
    ref,
  ) => {
    const modal = (
      <>
        {customOverlay && open ? (
          <div
            className={cn(
              "fixed inset-0 top-[var(--header-height)] z-50 bg-[#5B5B5B]/55 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            )}
          />
        ) : (
          <SheetOverlay />
        )}

        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side }), className)}
          {...props}
        >
          {children}

          {close && (
            <div className="max-desktop:mt-9 max-desktop:flex max-desktop:items-center max-desktop:justify-center">
              <SheetPrimitive.Close
                className={cn(
                  "relative before:-z-10 before:h-full before:w-full max-desktop:flex max-desktop:size-[36px] max-desktop:items-center max-desktop:justify-center before:max-desktop:absolute before:max-desktop:left-0 before:max-desktop:top-0 before:max-desktop:rounded-full before:max-desktop:bg-[#EBEBEB] desktop:absolute desktop:left-[25px] desktop:top-[22px]",
                )}
              >
                <Close className="max-desktop:size-[10px]" />

                <span className="sr-only">Close</span>
              </SheetPrimitive.Close>
            </div>
          )}
        </SheetPrimitive.Content>
      </>
    );

    if (portal) {
      return <SheetPortal container={portalElement}>{modal}</SheetPortal>;
    }

    return modal;
  },
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sm:text-left flex flex-col space-y-2 text-center",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sm:flex-row sm:justify-end sm:space-x-2 flex flex-col-reverse",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
