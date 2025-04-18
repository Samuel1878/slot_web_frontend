import { Outlet } from "react-router";
import { CustomerService, ReferalInvitation } from "src/components/floatingBtns";
import NavBarLayout from "src/ui/layouts/navBar"
export default function NavBar_Layout() {
    console.info("NavBar")
  return (
    <>
      <NavBarLayout />
      {/* will either be home.tsx or settings.tsx */}
      <Outlet />
      <ReferalInvitation />
      <CustomerService />
    </>
  );
}
