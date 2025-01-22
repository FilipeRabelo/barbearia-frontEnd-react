import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LayoutMain, LayoutWrapper } from "./style";

export default function Layout() {
  return (
    <>
      <LayoutWrapper>
        <Header />

        <LayoutMain>
          <Outlet />
        </LayoutMain>

        <Footer />
      </LayoutWrapper>
    </>
  )
}