import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'

export function usePokemonlist() {

    const { data, error, isLoading } = useSWR('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20', fetcher)

    return {
        pokemons: data?.results,
        isLoading,
        error
    }
}