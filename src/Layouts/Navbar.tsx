import React from "react"

interface props {
    children: React.ReactNode
}

function Navbar({ children }: props) {
    return (
        <>
            <div className="mb-2">
                <div className="h-14 py-4 flex w-full justify-between">
                    <div className="px-6">
                        <span className="font-bold">João</span>
                        <span className="font-bold text-purple-500"> Thiago</span>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex gap-4 mx-40">
                            <a href="#" className="font-bold">Home</a>
                            <a href="#" className="font-bold">About me</a>
                            <a href="#" className="font-bold">Contact</a>
                            <a href="#" className="font-bold">Skills</a>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-800 opacity-50" />
            </div>
            {children}
        </>
    )
}

export default Navbar