import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { LayoutMain } from "./style";

export default function Layout(){
  return(
    <>
      <Header/>

      <LayoutMain>
        <Outlet/>
      </LayoutMain>

      <Footer/>
    </>
  )
}