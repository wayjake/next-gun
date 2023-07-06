export const metadata = {
    title: "Chess; because you're smort",
    description: 'Playing chess with friends. For free',
}

export default function ChessLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>
}
