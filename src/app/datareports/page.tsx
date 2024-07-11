import Link from 'next/link'
import menuItems from '../data/menuItems'
import '../styles/dashboard.css'

const dataSubItems = menuItems[5].submenu

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function DataReports() {
	return (
		<section>
			<div className='subitem-nav-bar-parent'>
				<ul className='subitem-list'>
					{dataSubItems.map((item, index) => (
						<li key={index}>
							<Link href={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='w-full h-screen bg-entrata-gray'>swag</div>
		</section>
	)
}
