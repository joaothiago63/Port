import React, { useEffect, useState, useMemo } from "react"
import RenderIcon from "../libs/renderIcon"
import { useParams } from "react-router-dom"
import * as Lucide from 'lucide-react';

interface props {
    children: React.ReactElement
}

interface IconWithLabelProps {
    children: React.ReactNode,
    label: string,
    selected: boolean
}

interface navbarIconsProps {
    href: string,
    label: string,
    iconName: keyof typeof Lucide;
}


const navbarIcons: navbarIconsProps[] = [
    { href: "contact", iconName: "MessageCircle", label: "Contact" },
    { href: "about", iconName: "Users", label: "About me" },
    { href: "home", iconName: "Home", label: "Home" },
    { href: "Skills", iconName: "Sparkles", label: "Skills" }
];


const widthMobile: number = 780

function Navbar({ children }: props) {

    const params = useParams();

    const uri = params['*'];

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < widthMobile)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < widthMobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const component = useMemo(() => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<any>, { isMobile });
            }
            return child;
        });

    }, [isMobile]);

    if (!isMobile) {
        return (
            <>
                <nav className="mb-2 fixed top-0 right-0 left-0">
                    <div className="h-14 py-4 flex w-full justify-between">
                        <div className="px-6">
                            <span className="font-bold">João</span>
                            <span className="font-bold text-purple-500"> Thiago</span>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex gap-4 mx-40">
                                <a href="#home" className="font-bold">Home</a>
                                <a href="#about" className="font-bold">About me</a>
                                <a href="#contact" className="font-bold">Contact</a>
                                <a href="#" className="font-bold">Skills</a>
                            </div>
                        </div>
                    </div>
                    <hr className="border-t border-gray-800 opacity-50" />
                </nav>
                <div className="p-20">
                    {component}
                </div>
            </>
        )
    }

    return (
        <>
            {component}
            <div className="bg-[#242431] h-[80px] fixed bottom-0 w-full rounded-t-3xl min-w-85">
                <div className="flex flex-col h-full justify-center">
                    <div className="w-full flex justify-between p-3">
                        {navbarIcons.map((item, i) => (
                            <a key={i} href={`#${item.href}`}>
                                <IconWithLabel label={item.label} selected={uri === item.href}>
                                    <RenderIcon iconName={item.iconName} className={`${uri === item.href ? "text-white" : ""}`} />
                                </IconWithLabel>
                            </a>
                        ))}                        
                    </div>
                </div>
            </div>
        </>
    )
}

function IconWithLabel({ children, label, selected }: IconWithLabelProps) {

    const selectedClassName: string = "bg-[#7B69E5] rounded-lg"

    return (
        <>
            <div className={`flex flex-col gap-1 items-center cursor-pointer text-[#757575] hover:text-white p-2 ${selected ? selectedClassName : ""}`}>
                <div className="flex justify-center">
                    {children}
                </div>
                <label className={`${selected ? "font-bold text-white" : "font-normal"}`}>{label}</label>
            </div>
        </>
    )
}

export default Navbar