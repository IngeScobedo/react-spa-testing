import { heroes } from '../data/herodesc';

export const getHeroesByQuery = (query) => {
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(query));
}