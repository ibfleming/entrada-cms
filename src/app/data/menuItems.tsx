import { GoHome as ResidentsIcon } from 'react-icons/go'
import { HiOutlinePencilSquare as ApplicantsIcon } from 'react-icons/hi2'
import { LiaToolsSolid as ToolsIcon } from 'react-icons/lia'
import { MdOutlineSpaceDashboard as DashboardIcon } from 'react-icons/md'
import { TbReportSearch as DataReportsIcon } from 'react-icons/tb'
import { TbUsers as LeadsIcon } from 'react-icons/tb'

const menuItems = [
	{
		name: 'Dashboard',
		icon: DashboardIcon,
		link: '/',
		submenu: [
			{
				name: 'My Dashboard',
				link: '/',
			},
			{
				name: 'Leasing Center',
				link: '/',
			},
		],
	},
	{
		name: 'Residents',
		icon: ResidentsIcon,
		link: '/residents',
		submenu: [
			{
				name: 'All Residents',
				link: '/',
			},
			{
				name: 'Bulk Unit Assigmnents',
				link: '/',
			},
			{
				name: 'Maintenance',
				link: '/',
			},
			{
				name: 'Renewals',
				link: '/',
			},
			{
				name: 'Packages',
				link: '/',
			},
			{
				name: 'Community',
				link: '/',
			},
		],
	},
	{
		name: 'Applicants',
		icon: ApplicantsIcon,
		link: '/applicants',
		submenu: [
			{
				name: 'All Applicants',
				link: '/',
			},
		],
	},
	{
		name: 'Leads',
		icon: LeadsIcon,
		link: '/leads',
		submenu: [
			{
				name: 'All Leads',
				link: '/',
			},
		],
	},
	{
		name: 'Tools',
		icon: ToolsIcon,
		link: '/tools',
		submenu: [
			{
				name: 'Call Tracker Logs',
				link: '/',
			},
			{
				name: 'Marketing Hub',
				link: '/',
			},
		],
	},
	{
		name: 'Data & Reports',
		icon: DataReportsIcon,
		link: '/datareports',
		submenu: [
			{
				name: 'Reporting',
				link: '/',
			},
			{
				name: 'Reports (Legacy)',
				link: '/',
			},
		],
	},
]

export default menuItems
