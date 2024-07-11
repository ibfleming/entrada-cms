import Link from 'next/link'
import SearchBar from './search'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	weight: '600',
	subsets: ['latin'],
})

export default function Header() {
	return (
		<header className='block w-full h-[64px] bg-entrata-bg'>
			<div className='flex flex-row w-full h-full justify-between items-center'>
				<div className='text-entrata-green text-xl ml-8'>
					<Link href={'/'} className={poppins.className}>
						entrada
					</Link>
				</div>
				<div className='flex flex-row justify-center items-center align-middle'>
					<SearchBar />
				</div>
			</div>
		</header>
	)
}
