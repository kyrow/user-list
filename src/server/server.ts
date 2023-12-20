import { createServer } from "miragejs"


import data from './data.json'

createServer({
	routes() {
		this.namespace = "api"
		this.get("/users", () => {
			return data
		})
	},
})
