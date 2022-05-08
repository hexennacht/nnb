import { useEffect, useState } from "react";
import { GetStaticPropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import Image from "next/image";
import { NotionDatabaseResponse, NotionProperty } from "../../types";
import Loading from '../../components/loading';
import BlogLayout from "../../components/layout";
import {BLOG_LIST} from "../../lib/config";

export async function getStaticProps(
  context: GetStaticPropsContext
) {
  let resp = await fetch(BLOG_LIST);
  let json: NotionDatabaseResponse = await resp.json();

  return {
    props: {
      items: json.items,
    },
  };
}

type BlogIndexProps = {
  items: NotionProperty[];
};

export default function Index({ items }: BlogIndexProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlog] = useState<null | NotionProperty[]>(null);

  useEffect(() => {
    setBlog(items);
    setLoading(false);
  }, [loading, blogs]);

  const showArticle = () => {
    return blogs?.map((row, i) => {
      return (
        <div className={`flex border border-dashed`} key={i}>
          <Image
            src={row.cover}
            width={`200px`}
            height={`200px`}
			alt={row.title}
			quality={100}
			layout={`raw`}
          />
          <div className={`p-5`}>
            <h1 className={`text-2xl font-bold italic text-olive-900`}>
              {row.title}
            </h1>
            <div className={`mt-5`}>Created At: {row.created_at}</div>
            <div className={`mt-5`}>
              <p>
                {row?.short_content}{" "}
                <Link href={`blog/${row.id.toString()}-${row.slug}`}>
                  <a className="font-bold">Read More</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <BlogLayout>
	  <div className={"flex-grow w-1/2 mx-auto text-center"}>
        <h1 className={`text-3xl font-extralight text-gray-700 w-1/2 mx-auto`}>
          Journey on learning to write great tutorials and articles
        </h1>
      </div>
      <div className={`grid grid-cols-1 w-2/3 mt-16 mx-auto`}>
        {loading && blogs ? <Loading /> : showArticle()}
      </div>
	  </BlogLayout>
    </>
  );
}
