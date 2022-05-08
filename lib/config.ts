const MEALS_URL: string = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
const BLOG_LIST: string = `${process.env.BASE_API_URL}/blog/list`
const BLOG_DETAIL = (uuid: string) => `${process.env.BASE_API_URL}/blog/${uuid}`


export {MEALS_URL, BLOG_LIST, BLOG_DETAIL}