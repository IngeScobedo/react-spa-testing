import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters }) => {

    const heroImgUrl = `/assets/heroes/${id}.jpg`

  return (
    <div id={id} className="w-full h-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg max-h-[195px] w-full object-cover object-top" src={heroImgUrl} alt="" />
      </a>
      <div className="p-3 flex flex-col gap-2 w-full h-full">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white font-body tracking-widest">{superhero}</h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">{alter_ego}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{first_appearance}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{characters}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{publisher}</p>
        
        <Link to={`/hero/${id}`} className="btn btn-outline-primary">
          Ver más...
        </Link>
      </div>
    </div>

  )
}
