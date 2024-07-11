import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from './components/menu'
import Header from './components/header'
import './styles/globals.css'

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
			<body className={inter.className}>
				<Header />
				<Menu />
				{children}
			</body>
		</html>
	)
}
