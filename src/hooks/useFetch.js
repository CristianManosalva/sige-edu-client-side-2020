import { useState, useEffect } from 'react'
import { config } from '_config'

const useApi = (url, _options) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const useFetch = async (options = _options) => {
    try {
      const response = await fetch(`${config.apiEndPoint}${url}`, options)

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

  useEffect(() => {
    useFetch()
  }, [])

  return {
    response: data,
    error,
    isLoading,
    refetch: useFetch,
  }
}

export default useApi
