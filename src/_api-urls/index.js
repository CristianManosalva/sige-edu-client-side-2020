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

// export const addPictures = (id, body) => ({
//   url: `${config.picturesEndPoint}/database/${id}`,
//   options: {
//     method: 'POST',
//     body,
//   },
// })

export const addPictures = (images, relation, setImagesLoadCharge) => {
  try {
    const promisesPictures = images.map((value) => {
      return addPicture(value, relation, setImagesLoadCharge)
    })
    return Promise.all(
      promisesPictures
    ) /* .then((response) => {
      console.log('the fuck response: ', response)
      return response 
    })*/
  } catch (error) {
    console.log('Error in addPictures: ', error)
  }
}

const addPicture = (img, codeSecction, setCounter) => {
  let formData = new FormData()
  formData.append('profile', img.file)

  return fetch(
    `https://api-upload-pictures.vercel.app/api/v1/media/database/${codeSecction}`,
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      setCounter((prev) => prev + 1)
      return response.json()
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

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
