import Navbar from "../components/navbar"

import {Outlet} from "react-router-dom"

function Layout() {
    return (
        <div className={`w-full flex justify-center`}>
            <div className={`max-w-[1624px] w-screen`}>
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout