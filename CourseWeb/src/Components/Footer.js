import { Link } from "react-router-dom"

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
	main: [
	{ name: 'Home', href: '/' },
	{ name: 'Lectures', href: '/lectures' },
	{ name: 'Homework', href: '/homework' },
	{ name: 'Project', href: '/project' },
	],
}

export default function Footer() {
	return (
		<footer className="bg-gray-900">
			<div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
				<nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
					{navigation.main.map((item) => (
					<div key={item.name} className="px-5 py-2">
						<Link to={item.href} className="text-base text-indigo-400 hover:text-indigo-200">
						{item.name}
						</Link>
					</div>
					))}
				</nav>
				<p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Pat Conrey. All rights reserved.</p>
			</div>
		</footer>
	)
}
