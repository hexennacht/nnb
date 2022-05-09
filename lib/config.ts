const MEALS_URL: string = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
const BLOG_LIST: string = `${process.env.BASE_API_URL}/blog/list`
const BLOG_DETAIL = (uuid: string) => `${process.env.BASE_API_URL}/blog/${uuid}`

const DEFAULT_TITLE = "Taufik R F Blog"
const DEFAULT_KEYWORDS = "Taufik R F, Blog, Go, Golang, React Js, Next Js, Vue Js, Nuxt Js, PHP, Laravel, Docker"

export {MEALS_URL, BLOG_LIST, BLOG_DETAIL, DEFAULT_TITLE, DEFAULT_KEYWORDS}