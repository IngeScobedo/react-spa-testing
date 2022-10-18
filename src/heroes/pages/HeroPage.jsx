import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
import { Characters } from '../components/Characters'

export const HeroPage = () => {

  const { heroId } = useParams()
  const navigate = useNavigate()
  const handleNavigateBack = () => {
    navigate(-1)
  }
  const hero = useMemo(() => getHeroById(heroId), [heroId])

  !hero && <Navigate to="/marvel" />

  const { id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters } = hero;

  const heroImgUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className='global-container'>
      <div className='wrapper-container grid grid-cols-[40%_auto] gap-10 items-center'>
        <div className='w-full animate__animated animate__fadeInLeft'>
          <img className='h-auto' src={heroImgUrl} alt="superhero" />
        </div>
        <div className='w-full flex flex-col py-6 gap-3 animate__animated animate__fadeInRight'>
          <h1 className='header-title'>
            {superhero}
          </h1>
          <h3 className='hero-body-text'>
            <span className='font-display text-xl tracking-tighter mr-2'>Alter ego:</span> {alter_ego}
          </h3>
          <h3 className='hero-body-text'>
            <span className='font-display text-xl tracking-tighter mr-2'>Publisher: </span>{publisher}
          </h3>
          <h3 className='hero-body-text'>
            <span className='font-display text-xl tracking-tighter mr-2'>First appearence: </span>{first_appearance}
          </h3>

          <Characters characters={characters} hero={alter_ego} />

          <button
            className='btn btn-outline-primary'
            onClick={handleNavigateBack}
          >
            Regresar
          </button>

        </div>
      </div>
    </div>
  )
}
