import React, { useState, createContext, useContext } from "react";

interface SideBarOpenContextProps {
  children?: React.ReactNode;
  isSideBarOpen: boolean;
  handleSideBarOpen: () => void;
}

//default Context value
const defaultContextValue: SideBarOpenContextProps = {
  isSideBarOpen: false,
  handleSideBarOpen: () => {}, 
};

export const SideBarOpenContext =
  createContext<SideBarOpenContextProps>(defaultContextValue);

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
