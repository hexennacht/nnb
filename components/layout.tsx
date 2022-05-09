import type {ReactNode} from "react";
import Navbar from "./navbar";
import Head from "next/head";

type Props = {
	title: string
	keywords: string
	children :ReactNode
}

export default function BlogLayout({ title, keywords, children }: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="keywords" content={keywords} />
			</Head>
			<Navbar />
			<main className={`px-20 pt-16`}>
				{children}
			</main>
		</>
	)
}