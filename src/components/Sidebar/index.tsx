'use client'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link className="flex mb-12 cursor-pointer items-center gap-2" href="/">
          <Image
            className="size-[30px] max-xl:size-14"
            src="/icons/logo.svg"
            alt="logo"
            width="34"
            height="34"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} href={item.route}>
              <div className="relative size-6">
                <Image alt={item.label} src={item.imgURL} fill className={cn({
                  'brightness-[3] invert-0': isActive
                })} />
              </div>
              <p className={`sidebar-label ${isActive ? "" : "text-[#222]"}`}>{item.label}</p>
            </Link>
          )
        })}

        USER
      </nav>
      USER
    </section>
  );
};

export default Sidebar;
