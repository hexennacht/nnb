import React from "react";
import Link from "next/link";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 border-b border-dashed">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link href={`/`}>
							<a className="text-xl font-light leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-600">
								TAUFIK R F
							</a>
						</Link>
						<button
							className="text-gray-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								 xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									  d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<Link href={`/`}>
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75"
									>
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											 xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
										</svg><span className="ml-2">Home</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href={`/blog`}>
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75"
									>
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											 xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
										</svg><span className="ml-2">Blog</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href={`/contact`}>
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75"
									>
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
											 xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
										</svg><span className="ml-2">Contact</span>
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}