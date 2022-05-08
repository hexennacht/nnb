import type { NextApiRequest, NextApiResponse } from 'next'
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';



async function handler(req: NextApiRequest, res: NextApiResponse<ExtendedRecordMap>) {
    const notion = new NotionAPI()
    const pageID: string = req.query["uuid"].toString()

    const resp = await notion.getPage(pageID)

	res.status(200).json(resp)
}

export default handler