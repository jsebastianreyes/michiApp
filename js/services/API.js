const $API_KEY = '08e42827-8b07-4301-95aa-87558ce79384'
const BASE_URL = 'https://api.thecatapi.com/v1'
const $container = document.querySelector('#favoritos')

import { showFavoriteCats } from "../index.js"

export async function getCats(){
  const response = await fetch(`${BASE_URL}/images/search?limit=10`)
  //MANEJO DE ERRORES

  if(!(response.ok)){
    return {
      error: true,
      data: null
    }
  }

  const data = await response.json()

  return {
    error: false,
    data
  }

}

async function saveMichi(id){
  const respuesta = await fetch(`${BASE_URL}/favourites/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': $API_KEY,
    },
    body: JSON.stringify({
      'image_id': id
    })
  })

  return respuesta
}

export async function handleClicFavorite(e){
  const id = this.dataset.imgId

  if(!(this.classList.contains('is-fav'))){
    const respuesta = await saveMichi(id)

    if (respuesta.ok) {
      this.classList.add('is-fav')
      $container.innerHTML = ''
      showFavoriteCats()
    }
  }

else{
  alert('Su imagen ya fue agregada a favoritos')
}



}

export async function getFavoriteCats(){

  const respuesta = await fetch(`${BASE_URL}/favourites/`,{
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': $API_KEY,
    }
  })

  const data = await respuesta.json()

  // console.log(data)
  return data

}

export async function handleClicRemove(e) {
  const id = this.dataset.imgId

  const respuesta = await fetch(`${BASE_URL}/favourites/${id}`,{
    method: 'DELETE',
    headers: {
      'X-API-KEY': $API_KEY,
    }
  })

  // console.log(respuesta)

  if (respuesta.ok) {
    $container.innerHTML = ''
    showFavoriteCats()
  }

}

export async function uploadMichi(formData){



  const respuesta = await fetch(`${BASE_URL}/images/upload/`,{
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      'X-API-KEY': $API_KEY,
    },
    body: formData,
  })

  // console.log(respuesta)


  const data = await respuesta.json()

  console.log(data)

}
