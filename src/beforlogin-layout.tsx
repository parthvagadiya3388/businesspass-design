import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Beforeloginlayout() {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer className="">
            <Footer/>
        </footer>
    </div>
  )
}
