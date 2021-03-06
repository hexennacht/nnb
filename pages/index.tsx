import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BlogLayout from "../components/layout";
import {useEffect, useState} from "react";
import Loading from "../components/loading";
import {Meals} from "../types";
import Image from "next/image";
import {DEFAULT_KEYWORDS, DEFAULT_TITLE, MEALS_URL} from "../lib/config";
import {GetServerSidePropsContext} from "next";

type PropsIndex = {
	items: Meals[]
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const request = await fetch(MEALS_URL)
	const items: { meals: Meals[] } = await request.json()

	context.res.setHeader(
		'Cache-Control',
		'public, max-age=31536000, immutable'
	)

	return {
		props: {
			items: items.meals
		}
	}
}

export default function Home(propsIndex: PropsIndex) {
	const [meals, setMeals] = useState<null | Meals[]>(null)
	const [isLoading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		setMeals(propsIndex.items)
		setLoading(false)
	}, [isLoading, meals])

	const loadedState = () => {
		return (
			<>
				{meals?.map(row => {
					return (
						<div className={`flex border border-dashed p-5`} key={row.idMeal}>
							<Image className={`w-36`} width={`100%`} height={`100%`} src={row.strMealThumb} alt={row.strMeal}/>
							<div className={`ml-5`}>
								<h2 className={`w-full text-xl font-light`}>{row.strMeal}</h2>
							</div>
						</div>
					)
				})}
			</>
		)
	}

	return (
		<div className={styles.container}>
			<BlogLayout title={DEFAULT_TITLE} keywords={DEFAULT_KEYWORDS}>
				<div className={`grid grid-cols-1 w-2/3 mt-16 mx-auto`}>
					{ isLoading ? <Loading /> : loadedState() }
				</div>
			</BlogLayout>
		</div>
	)
}
