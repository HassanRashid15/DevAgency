"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

type SitePageProps = {
  children: ReactNode;
  className?: string;
};

const SitePage = ({ children, className }: SitePageProps) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default SitePage;
