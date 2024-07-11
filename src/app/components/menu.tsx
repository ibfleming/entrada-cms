'use client'

import Link from 'next/link'
import menuItems from '../data/menuItems'
import { IconType } from 'react-icons'
import { useState, useRef } from 'react'
import '../styles/menu.css'

type SubMenuItem = {
	name: string
	link: string
}

type MenuItem = {
	name: string
	icon: IconType
	link: string
	submenu?: SubMenuItem[]
}

export default function Menu() {
	const [showDropdown, setShowDropdown] = useState<string | null>(null)
	const dropdownRef = useRef<HTMLUListElement>(null)

	const handleMouseEnter = (itemName: string) => {
		setShowDropdown(itemName)
	}

	const handleMouseLeave = () => {
		setShowDropdown(null)
	}

	const handleSubmenuMouseEnter = () => {
		setShowDropdown(showDropdown)
	}

	return (
		<nav className='nav-parent'>
			<ul className='nav-list'>
				{menuItems.map((item: MenuItem, index: number) => (
					<li className='menu-item' key={index}>
						<Link
							className='menu-link'
							href={item.link}
							onMouseEnter={() => handleMouseEnter(item.name)}
							onMouseLeave={handleMouseLeave}
						>
							<item.icon className='menu-icon' />
							{item.name}
						</Link>
						{item.submenu && showDropdown === item.name && (
							<ul
								ref={dropdownRef}
								className='submenu-container'
								onMouseEnter={handleSubmenuMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								{item.submenu.map(
									(item: SubMenuItem, index: number) => (
										<li className='submenu-item' key={index}>
											<Link
												className='submenu-link'
												href={item.link}
											>
												<span>{item.name}</span>
											</Link>
										</li>
									)
								)}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
