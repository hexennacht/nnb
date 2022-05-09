import {GetServerSidePropsContext} from 'next';
import Head from "next/head";
import {useState, useEffect, useMemo} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Loading from "../../components/loading";
import BlogLayout from "../../components/layout";

import {getBlockTitle} from "notion-utils";
import {ExtendedRecordMap} from "notion-types"
import {defaultMapImageUrl, NotionRenderer} from "react-notion-x"
import { Code } from 'react-notion-x/build/third-party/code'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

import {BLOG_DETAIL, DEFAULT_KEYWORDS, DEFAULT_TITLE} from "../../lib/config";


type BlogDetailProps = {
    blog: ExtendedRecordMap,
    cover?: string,
    title?: string
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    //@ts-ignore
    const uuid: string = context?.params?.uuid?.toString()?.split("-").splice(0, 5).join("-")!

    const resp = await fetch(BLOG_DETAIL(uuid))
    const results = await resp.json()

    const blok_id = Object.keys(results.block)

    const title = getBlockTitle(results?.block?.[blok_id[0]]?.value, results)
    const cover = results.block?.[blok_id[0]]?.value?.format?.page_cover?.startsWith("https://") ? results.block?.[blok_id[0]]?.value?.format?.page_cover : `https://www.notion.so${results.block[blok_id[0]].value.format.page_cover}`

    context.res.setHeader(
        'Cache-Control',
        'public, max-age=31536000, immutable'
    )

    return {
        props: {
            title: title,
            blog: results,
            cover: cover
        }
    }
}



export default function BlogDetail({blog, title, cover}: BlogDetailProps) {
    const [loading, setLoading] = useState<boolean>(true)
    const [blogs, setBlogs] = useState<undefined | ExtendedRecordMap>(undefined)

    useEffect(() => {
        setBlogs(blog)
        setLoading(false)
    }, [loading, blogs]);

    return (
        <>
            <BlogLayout title={title ? title : DEFAULT_TITLE} keywords={`${DEFAULT_KEYWORDS}, ${title}`}>
                {
                    loading && !blogs ?
                        <Loading /> :
                    <>
                        <div className={`w-[720px] mx-auto mb-3`}>
                            <h1 className={`mx-auto mb-5 text-center items-center text-4xl text-gray-700 font-light`}>{title}</h1>
                            <Link href={`/blog`}>
                                <a className={`flex font-light text-lg text-gray-600`}>
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg> Back To Blog
                                </a>
                            </Link>
                        </div>
                        <div className={`w-[720px] mx-auto border border-dashed`}>
                            <div>
                                <Image src={ cover! } layout={`raw`} width={`720px`} height={`100px`} alt={title} />
                            </div>
                            <NotionRenderer
                                recordMap={blogs!}
                                components={{
                                    nextImage: Image,
                                    nextLink: Link,
                                    Code,
                                }}
                                previewImages={!!blog.preview_images}
                                mapImageUrl={defaultMapImageUrl}
                            />
                        </div>
                    </>
                }
            </BlogLayout>
        </>
    )
}