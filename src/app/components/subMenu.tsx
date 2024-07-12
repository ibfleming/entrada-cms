import Link from 'next/link'
import '../styles/submenu.css'

interface SubMenu {
	name: string
	link: string
}

export default function SubMenu({ submenu }: { submenu: SubMenu[] }) {
	return (
		<div className='subitem-nav-bar-parent'>
			<ul className='subitem-list'>
				{submenu.map((item, index) => (
					<li key={index}>
						<Link href={item.link}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
