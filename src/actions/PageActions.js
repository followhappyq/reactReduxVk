export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

let cached = false
let photosArr = []

function getPhotosYear(photos, year) {
  let createdYear

  return photos.filter(elem => {
    createdYear = new Date(elem.date * 1000).getFullYear()
    return createdYear === year
  })
}

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })
    //eslint-disable-next-line no-undef
    VK.Api.call('photos.getAll', { extended: 1, count: 200, v: '5.84' }, r => {
      cached = true
      photosArr = getPhotosYear(r.response.items, year).sort(
        (a, b) => b.likes.count - a.likes.count
      )
      if (cached) {
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: photosArr,
        })
      }
    })
  }
}
