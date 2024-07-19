import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Profileheader from "./components/profile-header";

export default function Afterloginlayout() {
  return (
    <div>
        <header>
            <Profileheader/>
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
