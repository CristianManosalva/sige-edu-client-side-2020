export const auxParseName = (url) => {
  try {
    return url.split('/').reverse()[0]
  } catch (error) {
    return 'archivo'
  }
}
