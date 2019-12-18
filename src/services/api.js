import { http } from './config'

export default {
  pokemon: (page=0) => {
    return http.get(`/pokemon/?offset=${page}&limit=20`)
  },
  ability: (name) => {
    return http.get(`/ability/${name}`)
  },
  pokemonEspecifico: (param) => {
    return http.get(`/pokemon/${param}`)
  },
  pokemonByType: (name) => {
    return http.get(`/type/${name}`)
  },
  typePokemon: () => {
    return http.get('/type')
  }
}
