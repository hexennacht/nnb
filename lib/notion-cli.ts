import {Client} from "@notionhq/client";
import {NotionDatabaseResponse, NotionProperty} from "../types";

export type NotionCliAuth = {
	auth_key: string
}

export class NotionCli {
	private cli: Client

	constructor(auth_key?: string|undefined) {
		this.cli = new Client({auth: auth_key})
	}

	async getDatabaseList(database_id: string): Promise<NotionDatabaseResponse> {
		let resp = await this.cli.databases.query({database_id: database_id})
		let result = resp.results
		return {
			items: result.map<NotionProperty>(row => {
				// @ts-ignore
				let content = row?.properties['ShortContent']?.rich_text?.map(text => text.plain_text)

				return {
					id: row.id,
					// @ts-ignore
					cover: row?.cover?.external?.url,
					// @ts-ignore
					title: row?.properties['Title']?.title[0]?.plain_text,
					// @ts-ignore
					slug: row?.properties['Slug']?.rich_text?.map(text => text.plain_text),
					// @ts-ignore
					tags: row?.properties['Tags']?.multi_select.map(tag => tag.name),
					// @ts-ignore
					created_at: row?.properties['Created At']?.created_time,
					short_content: content.toString()
				}
			})
		}
	}
}