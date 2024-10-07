import Header from "../layout/components/Header";
import Sidebar from "../layout/components/Sidebar";
import Main from "../layout/components/Main";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
    <Header />
    <div className="flex">
        <Sidebar />
        <Main>
            <Outlet />
        </Main>
    </div>

    </>
  )
}

export default Root