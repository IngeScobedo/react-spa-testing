import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks'
import { HeroList } from '../components'

export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { q } = queryString.parse(location.search)
  const { searchText,
    formState,
    onInputChange,
    onResetForm } = useForm({
      searchText: ''
    })

    const handleSearch = (event) => {
      event.preventDefault()
      //if ( searchText.trim().length <= 2 ) return;
      navigate(`?q=${searchText.toLowerCase().trim()}`)
    }

  return (
    <div className='global-container animate__animated animate__fadeInDownBig'>
      <div className="wrapper-container flex flex-col">
        <div className="mb-3 xl:w-96">
          <form onSubmit={handleSearch} className="input-group relative flex gap-2 flex-wrap items-stretch w-full mb-4">
            <input type="search"
              name='searchText'
              value={searchText}
              onChange={onInputChange}
              aria-label="Search"
              placeholder="Search"
              aria-describedby="button-addon2"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <button type="submit" id="button-addon2"
              className="btn px-6 py-2.5 bg-blue hover:bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out flex items-center"
            >
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </form>
        </div>
        <div>
          <HeroList query={q} />
        </div>
      </div>
    </div>
  )
}
