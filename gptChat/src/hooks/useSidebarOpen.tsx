import React, { useState, createContext, useContext } from "react";

interface SideBarOpenContextProps {
  children: React.ReactNode;
  isSideBarOpen: boolean;
  handleSideBarOpen: () => void;
}

export const SideBarOpenContext = createContext<SideBarOpenContextProps | undefined >(undefined);

export const useSidebarOpen = () => useContext(SideBarOpenContext);

export function DrawerContext({children}:SideBarOpenContextProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const handleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
    console.log("inside side", isSideBarOpen);
  };


  return (
    <SideBarOpenContext.Provider value={{isSideBarOpen, handleSideBarOpen}}>
      {children}
    </SideBarOpenContext.Provider>
  )
}
