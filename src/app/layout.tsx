import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/header'
import NavBar from './components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Entrada by Ian',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Header />
			<NavBar />
			<body className={inter.className}>{children}</body>
		</html>
	)
}
