import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0  top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 ">
          <Image src="/favicon.svg" height={40} width={40} alt="logo" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide animate-pulse">
            Edufric
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem iconSrc="/learn.svg" label="Learn" href="/learn" />
        <SidebarItem
          iconSrc="/leaderboard.png"
          label="leaderboard"
          href="/leaderboard"
        />
        <SidebarItem iconSrc="/quests.png" label="quests" href="/quests" />
        <SidebarItem iconSrc="/shop.png" label="shop" href="/shop" />
      </div>
      <div className="p-4 border-t-2">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-green-500 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
