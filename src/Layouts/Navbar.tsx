import React, { useEffect, useState, useMemo } from "react"
import RenderIcon from "../libs/renderIcon"

interface props {
    children: React.ReactElement
}

interface IconWithLabelProps {
    children: React.ReactNode,
    label: string
}

const widthMobile: number = 780

function Navbar({ children }: props) {

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
                {component}
            </>
        )
    }

    return (
        <>
            <div className="bg-[#242431] h-[80px] fixed bottom-0 w-full rounded-t-3xl min-w-85">
                <div className="flex flex-col h-full justify-center">
                    <div className="w-full flex justify-between p-3">
                        <IconWithLabel label="Contact">
                            <RenderIcon iconName="MessageCircle" />
                        </IconWithLabel>
                        <IconWithLabel label="About me">
                            <RenderIcon iconName="Users" />
                        </IconWithLabel>
                        <IconWithLabel label="Home">
                            <RenderIcon iconName="Home" />
                        </IconWithLabel>
                        <IconWithLabel label="Skills">
                            <RenderIcon iconName="Sparkles" />
                        </IconWithLabel>
                    </div>
                </div>
            </div>
        </>
    )
}

function IconWithLabel({ children, label }: IconWithLabelProps) {
    return (
        <div className="flex flex-col gap-1 items-center cursor-pointer text-[#757575] hover:text-white">
            <div className="flex justify-center">
                {children}
            </div>
            <label className="font-normal">{label}</label>
        </div>
    )
}

export default Navbar