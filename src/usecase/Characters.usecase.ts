import { ApiService } from "@/services/Api.service";

export class CharactersUseCase {
	constructor(
		private api = new ApiService(),
		private select = `
			results { 
				id 
				name 
				status
				species
				image
				episode {
				id
				episode
				name
				}
				location {
				name
				}
			}
		`
	) {}

	list(filter: {
		page?: number,
		term: string | undefined
	}) {
		let page = filter.page ? filter.page : 1;
		let query = `
			query Characters {
				characters (page: ${page}) {
					${this.select}	
				} 
			}
		`

		if (filter.term)
			query = `
				query Characters {
					characters (page: ${page}, filter: {name: "${filter.term}"}) {
						${this.select}	
					} 
				}
			`

		return this.api.get(query);
	}
}   