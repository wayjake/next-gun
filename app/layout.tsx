import './globals.css'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import TopBar from './home/topbar'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Wallie.io: the unlocked social site',
    description:
        'Laying the groundwork that Tom from MySpace originally wanted for everyone. Freedom of creative expression.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className + ' h-screen bg-gray-100'}>
                <TopBar />
                {children}
            </body>
        </html>
    )
}
