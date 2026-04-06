"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<ComponentPropsWithoutRef<typeof Link>, "className"> {
  className?: string | ((props: { isActive: boolean }) => string);
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, href, ...props }, ref) => {
    const pathname = usePathname();
    const hrefStr = typeof href === "string" ? href : href.pathname ?? "";
    const isActive = pathname === hrefStr || (hrefStr !== "/" && pathname.startsWith(hrefStr));

    const resolvedClass =
      typeof className === "function" ? className({ isActive }) : className;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(resolvedClass)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
