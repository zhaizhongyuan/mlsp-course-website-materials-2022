import { Link, NavLink } from "react-router-dom"

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
{ name: 'Home', href: '/' },
{ name: 'Lectures', href: '/lectures' },
{ name: 'Homework', href: '/homework' },
{ name: 'Project', href: '/project' },
]

export default function TopNavigationMenu() {
	return (
		<Popover>
			{({ open }) => (
				<>
				<nav
					className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
					aria-label="Global"
				>
					<div className="flex items-center flex-1">
						<div className="flex items-center justify-between w-full md:w-auto">
							<Link to="/">
								<span className="sr-only">MLSP 2021</span>
								<img
									className="h-8 w-auto sm:h-10"
									src="/images/logo.lg.png"
									alt=""
								/>
							</Link>
							<div className="-mr-2 flex items-center md:hidden">
							<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Open main menu</span>
								<MenuIcon className="h-6 w-6" aria-hidden="true" />
							</Popover.Button>
							</div>
						</div>
						<div className="hidden md:block md:ml-10 md:space-x-10">
							{navigation.map((item) => (
								<NavLink
									exact
									key={item.name}
									to={item.href}
									className="font-medium text-gray-500 hover:text-gray-900"
									activeClassName="font-medium text-indigo-500 hover:text-indigo-700"
								>
									{item.name}
								</NavLink>
							))}
						</div>
					</div>
				</nav>

				<Transition
					show={open}
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						static
						className="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
					>
						<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="px-5 pt-4 flex items-center justify-between">
								<Link to="/">
									<span className="sr-only">MLSP 2021</span>
									<img
										className="h-8 w-auto sm:h-10"
										src="/images/logo.lg.png"
										alt=""
									/>
								</Link>
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close main menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<NavLink
										exact
										key={item.name}
										to={item.href}
										className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
										activeClassName="block px-3 py-2 rounded-md text-base font-medium text-indigo-500 hover:text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</Popover.Panel>
				</Transition>
				</>
			)}
		</Popover>
	)
}