interface MCLabelProps {
    children: React.ReactNode;
}

export default function MCLabel({ children }: MCLabelProps) {
    return (
        <h3 className="font-black rounded-tr-2xl rounded-bl-2xl bg-[#F2A09D] border-[#FFCECC] border-[3px] w-fit px-3 py-1 text-white mb-1">
            {children}
        </h3>
    )
}