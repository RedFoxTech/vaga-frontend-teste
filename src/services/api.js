import { http } from './config'

export default {
  pokemon: (page = 0) => {
    return http.get(`/pokemon/?offset=${page}&limit=20`)
  },
  ability: (name) => {
    return http.get(`/ability/${name}`)
  },
  pokemonStatus: (param) => {
    return http.get(`/pokemon/${param}`)
  },
  typePokemon: () => {
    return http.get('/type')
  }
}
