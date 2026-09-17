const API_KEY = '23ce5eb5' // API key personal del estudiante
const BASE_URL = 'https://www.omdbapi.com/'

export const searchMovies = async (params) => {
  const url = new URL(BASE_URL)
  url.searchParams.append('apikey', API_KEY)
  url.searchParams.append('s', params.query)
  url.searchParams.append('type', params.type || 'movie')
  if (params.year) url.searchParams.append('y', params.year)
  url.searchParams.append('page', params.page || 1)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const getMovieDetails = async (imdbID) => {
  const url = new URL(BASE_URL)
  url.searchParams.append('apikey', API_KEY)
  url.searchParams.append('i', imdbID)
  url.searchParams.append('plot', 'full')

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
