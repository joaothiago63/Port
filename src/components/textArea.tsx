import { type ComponentPropsWithoutRef } from 'react'

interface props extends ComponentPropsWithoutRef<'input'> {
    label?: string
}

function TextArea({ label }: props) {
    return (
        <div className="flex flex-col text-start">
            {label && (
                <label>{label}</label>
            )}
            <textarea className="bg-[#1A1A1A] p-2 rounded" />
        </div>
    );
}

export default TextArea;