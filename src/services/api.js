import axios from "axios"

const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
})

export default http;