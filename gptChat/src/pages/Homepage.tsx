import Chat from "../components/Chat";
import Header from "../components/Header";
import SidebarIcon from "../components/SidebarIcon";

export default function Homepage() {
  return (
    <div className="flex h-screen flex-col relative">
      <div className="h-[15vh] lg:mt-5">
        <Header />
      </div>

      <div className="absolute top-[50%] ml-2">
        <SidebarIcon />
      </div>


      <div className="lg:ml-[3%]  mx-1 border-2 flex justify-center">
        <Chat/>
      </div>
    </div>
  );
}
