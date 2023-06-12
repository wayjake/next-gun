export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-20 bg-gray-100">
            <div className="px-2">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                    <div className="md:flex">
                        <div className="w-full">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
