"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Icons } from "./icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="hidden mr-4 md:flex">
      <Link href={siteConfig.url} target="_blank" className="flex items-center gap-2 mr-4 lg:mr-6">
        {/* LeetCode Icon for theme switching */}
        <span className="w-7 h-7 text-black dark:text-white">
          <Icons.leetcode />
        </span>
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs/installation"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Home
        </Link>


        <Link
          href={siteConfig.links.resume}
          target="_blank"
          className="flex gap-1"
        >
          Resume <ExternalLink className="size-3" />
        </Link>
      </nav>
    </div>
  );
}
