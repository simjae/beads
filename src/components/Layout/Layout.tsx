"use client";
import React, { useState, ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const isRootPath = pathname === "/";
  return (
    <div className="flex w-full flex-col">
      {/* 헤더 영역 */}
      <Header toggleSidebar={toggleSidebar} />
      {/* 메인 콘텐츠 영역 */}
      <div className="flex w-full h-screen">
        {/* 사이드바 영역 - 모바일 및 태블릿에서 토글 가능 */}
        {!isRootPath && (
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}

        {/* 메인 콘텐츠 영역 */}
        <div className="flex flex-col flex-grow">
          <div className="p-4 md:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
