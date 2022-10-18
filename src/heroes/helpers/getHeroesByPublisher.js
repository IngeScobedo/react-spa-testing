import { heroes } from '../data/herodesc'

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics']
    if ( !validPublishers.includes(publisher)) {
        throw new Error('No es valido')
    }

    return heroes.filter(hero => hero.publisher === publisher)
}