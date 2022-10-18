import { heroes } from '../data/herodesc'

export const getHeroById = ( id ) => {
    return heroes.find( hero => hero.id === id)
}