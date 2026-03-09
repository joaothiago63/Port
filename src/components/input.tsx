interface props {
    label?: string
}

function Input({ label }: props) {
    return (
        <div className="flex flex-col">
            {label && (
                <label>{label}</label>
            )}
            <input className="bg-[#1A1A1A] p-2 rounded" />
        </div>
    );
}

export default Input;