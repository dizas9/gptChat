import { useState, createContext, useContext } from "react";

interface SideBarOpenContextProps {
  isSideBarOpen: boolean;
  isDrawerOpen: boolean;
  handleSideBarOpen: () => void;
  handleDrawerOpen: () => void;
}

//default Context value
const defaultContextValue: SideBarOpenContextProps = {
  isSideBarOpen: false,
  isDrawerOpen: false,
  handleSideBarOpen: () => {},
  handleDrawerOpen: () => {},
};

export const SideBarOpenContext =
  createContext<SideBarOpenContextProps>(defaultContextValue);

export const useSidebarOpen = () => useContext(SideBarOpenContext);

export function DrawerContext({ children }: { children: React.ReactNode }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  console.log("inside hook", isDrawerOpen);
  const handleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  

  return (
    <SideBarOpenContext.Provider
      value={{
        isSideBarOpen,
        handleSideBarOpen,
        isDrawerOpen,
        handleDrawerOpen,
      }}
    >
      {children}
    </SideBarOpenContext.Provider>
  );
}
