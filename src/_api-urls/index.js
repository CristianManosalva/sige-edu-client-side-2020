import { config } from '_config'
const mainOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

/* images fetching */
export const deleteImage = (id) => ({
  url: `${config.apiEndPoint}/images/delete/${id}`,
  options: { ...mainOptions, method: 'DELETE' },
})

/* global fetch */
export const globalFetch = async (
  url,
  options,
  setData,
  setIsLoading,
  setError
) => {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = await response.json()
    setData(data)
  } catch (error) {
    setError(error.message)
  }
  setIsLoading(false)
}

/* delete fetch */
export const deleteFetch = async (url, options, setIsLoading, setError) => {
  setIsLoading(true)
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(response.statusText)
    }
  } catch (error) {
    setError(error.message)
  }
  setIsLoading(false)
}

/* {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    } */
