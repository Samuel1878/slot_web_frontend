import { Outlet } from "react-router";
import { CustomerService, ReferalInvitation } from "src/components/floatingBtns";
import AuthModal from "src/components/modals/authModal";
import NavBarLayout from "src/ui/layouts/navBar";
export default function NavBar_Layout() {
  return (
    <>
      <NavBarLayout />
      {/* will either be home.tsx or settings.tsx */}
      <Outlet />
      <AuthModal/>
      <ReferalInvitation />
      <CustomerService />
    </>
  );
}
