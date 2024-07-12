import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import EntradaHeader from './components/header'

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
				<EntradaHeader />
				<section className='module-wrapper'>{children}</section>
			</body>
		</html>
	)
}
