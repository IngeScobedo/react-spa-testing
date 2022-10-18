import { getHeroesByPublisher, getHeroesByQuery } from "../helpers"
import { HeroCard } from "../pages"
import { useMemo } from 'react'

export const HeroList = ({ publisher, query = '' }) => {
    let heroes = undefined
    publisher
        ? heroes = useMemo(() => getHeroesByPublisher(publisher))
        : heroes = useMemo(() => getHeroesByQuery(query))

    if (!heroes.length) {
        if (publisher) {
            return (
                <div class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                    <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd">
                        </path>
                    </svg>
                    <div>
                        <span class="font-medium">Sin resultados!</span> No hay superheroes disponibles en este momento
                    </div>
                </div>
            )
        } else {
            return (
                <div class="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                    <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <div>
                        <span class="font-medium">Sin resultados!</span> Al parecer no hay superheroes con este nombre o intenta hacer una busqueda.
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="w-full grid gap-4 grid-cols-3 px-8 py-6 animate__animated animate__fadeInDownBig">
            {

                heroes.map(heroData => (
                    <HeroCard
                        key={heroData.id}
                        {...heroData}
                    />
                ))
            }
        </div>
    )
}
