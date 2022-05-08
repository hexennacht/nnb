import type { NextApiRequest, NextApiResponse } from 'next'
import {NotionDatabaseResponse} from "../../../types";
import {NotionCli} from "../../../lib/notion-cli";
import UseMiddleware from "../../../lib/middleware";
import Cors from "cors";
import {constants} from "http2";

const cors = UseMiddleware(
	Cors({
		methods: ["GET"]
	})
)

async function handler(req: NextApiRequest, res: NextApiResponse<NotionDatabaseResponse>) {
	await cors(req, res)

	let notion_key: string = process.env.NOTION_KEY!
	let notion_db: string = process.env.NOTION_DB!

	const notion = new NotionCli(notion_key)
	const resp = await notion.getDatabaseList(notion_db)
	
	res.status(200).json(resp)
}

export default handler