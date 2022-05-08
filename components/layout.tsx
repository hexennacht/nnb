import type {ReactNode} from "react";
import Navbar from "./navbar";

type Props = {
	children :ReactNode
}

export default function BlogLayout({ children }: Props) {
	return (
		<>
			<Navbar />
			<main className={`px-20 pt-16`}>
				{children}
			</main>
		</>
	)
}