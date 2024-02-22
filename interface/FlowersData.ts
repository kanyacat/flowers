export interface FlowersData {
	catalogue: CatalogueData
	id: string
	popular?: PopularData[]
}

export interface PopularData {
	name: string
	price: number
	img1x: string
	img2x: string
	status: string
	id: number
}

export interface CatalogueData {
	driedflowers: string[]
	flowers: string[]
	additionally: string[]
}
