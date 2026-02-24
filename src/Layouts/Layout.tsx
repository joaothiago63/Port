import React from "react";
import Navbar from "./Navbar";

interface props {
    children: React.ReactNode
}

function Layout({ children }: props) {
    return (
        <div className="min-h-screen bg-[#10111A] text-white">
            <Navbar>
                {children}
            </Navbar>
        </div>
    )
}

export default Layout;