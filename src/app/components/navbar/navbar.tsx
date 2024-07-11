import Link from 'next/link'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { TbUsers } from 'react-icons/tb'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { GoHome } from 'react-icons/go'
import { LiaToolsSolid } from 'react-icons/lia'
import { TbReportSearch } from 'react-icons/tb'
import './navbar.css'

export default function NavBar() {
	return (
		<nav className='block bg-entrata-red w-full h-[40px] min-h-[40px] max-h-[40px] text-entrata-bg'>
			<ul className='flex flex-row h-full justify-start items-center align-middle inter text-sm font-normal'>
				<Link className='nav-item' href={''}>
					<MdOutlineSpaceDashboard className='w-5 h-5 mr-1.5' />
					<li className=''>Dashboard</li>
				</Link>
				<Link className='nav-item' href={''}>
					<GoHome className='w-5 h-5 mr-1.5' />
					<li className=''>Residents</li>
				</Link>
				<Link className='nav-item' href={''}>
					<HiOutlinePencilSquare className='w-5 h-5 mr-1.5' />
					<li className=''>Applicants</li>
				</Link>
				<Link className='nav-item' href={''}>
					<TbUsers className='w-5 h-5 mr-1.5' />
					<li className=''>Leads</li>
				</Link>
				<Link className='nav-item' href={''}>
					<LiaToolsSolid className='w-5 h-5 mr-1.5' />
					<li className=''>Tools</li>
				</Link>
				<Link className='nav-item' href={''}>
					<TbReportSearch className='w-5 h-5 mr-1.5' />
					<li className=''>Data & Reports</li>
				</Link>
			</ul>
		</nav>
	)
}
