import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className=" flex flex-col gap-4 p-6 min-h-[100vh] mx-auto max-w-[1440px]">
      <Outlet />
    </main>
  );
}

export default App;
