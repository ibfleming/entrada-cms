'use client'

import { Inter } from 'next/font/google'
import { CiSearch } from 'react-icons/ci'
import '../styles/search.css'

const inter = Inter({
	subsets: ['latin'],
})

export default function SearchBar() {
	return (
		<div className='search-parent'>
			<CiSearch className='search-icon' />
			<input
				type='text'
				className='text-sm bg-entrata-bg text-entrata-gray'
			/>
		</div>
	)
}
