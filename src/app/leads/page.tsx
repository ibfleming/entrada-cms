import Link from 'next/link'
import menuItems from '../data/menuItems'
import '../styles/dashboard.css'

const leadSubItems = menuItems[3].submenu

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Leads() {
	return (
		<section>
			<div className='subitem-nav-bar-parent'>
				<ul className='subitem-list'>
					{leadSubItems.map((item, index) => (
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
