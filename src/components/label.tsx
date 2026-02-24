import React from "react"

interface props {
    children: React.ReactNode
}

export default function ({ children }: props) {
    return (
        <label className="m-1 font-extralight border py-1 px-3 rounded border-[#242431] bg-[#242431]">{children}</label>
    )
}