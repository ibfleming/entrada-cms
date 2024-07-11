import { Inter } from 'next/font/google'
import { CiSearch } from 'react-icons/ci'
import './searchbar.css'

const inter = Inter({
	subsets: ['latin'],
})

export default function SearchBar() {
	return (
		<div className='flex flex-row border-[1px] border-entrata-gray rounded-md p-1 w-[384px] min-w-[128px] max-w-[384px] mr-8'>
			<CiSearch className='text-entrata-gray w-6 h-6 mx-1.5' />
			<input
				type='text'
				className={`${inter.className} w-full text-xs text-entrata-gray`}
			/>
		</div>
	)
}
