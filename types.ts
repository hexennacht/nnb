export type NotionProperty = {
	id: string
	cover: string
	title: string
	slug: string
	tags: string[]
	created_at: string
	short_content: string
}

export type NotionDatabaseResponse = {
	items: NotionProperty[]
}

export type Meals = {
	strMeal: string
	strMealThumb: string
	idMeal: string
}