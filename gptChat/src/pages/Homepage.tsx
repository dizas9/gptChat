import Header from "../components/Header";
import SidebarIcon from "../components/SidebarIcon";

export default function Homepage() {
  return (
    <div className="flex h-screen flex-col relative">
      <div className="h-fit">
        <Header />
      </div>

      <div className="absolute top-[50%] ml-2">
        <SidebarIcon />
      </div>
    </div>
  );
}
