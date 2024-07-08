import { Outlet } from "react-router-dom";
import { MenuFloat } from "@/components/Menu/MenuFloat";
import logo from "@/assets/images/logo.svg";

function App() {
  return (
    <main className="max-h-screen">
      <header className="flex items-center justify-center p-2">
        <img src={logo} alt="Logo" className="h-[50px]" />
      </header>
      <section className="flex flex-col gap-4 mx-auto max-w-[1440px] p-6 h-full bg-gray-100">
        <Outlet />
      </section>
      <MenuFloat />
    </main>
  );
}

export default App;
