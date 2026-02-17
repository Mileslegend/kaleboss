import { MobileHeader } from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className='hidden lg:flex' />
      <main className="lg:pl-64 h-full pt-12.5 lg:pt-0  ">
        <div className="h-full max-w-264 pt-6 mx-auto">{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
