import type React from "react"

interface props {
    children: React.ReactNode,
    color?: 'purple' | 'green',
    className?: string
}

const colorVariables = {
    purple: 'border-[#7B69E5] text-[#7B69E5] hover:bg-[#7B69E5]',
    green: 'border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00]'
}

export default function ({ children, color = "purple", className = "" }: props) {
    return <>
        <button className={`border rounded p-3 cursor-pointer hover:text-white ${colorVariables[color]} ${className}`}>{children}</button>
    </>
}