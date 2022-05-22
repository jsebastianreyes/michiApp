

import { getCats, handleClicFavorite, getFavoriteCats, handleClicRemove, uploadMichi } from "./services/API.js"
import { printGeneralCats, printFavoriteCats } from "./services/printHTML.js"
import './tabs.js'


async function showCats(){
  const {error, data: dataMichis} = await getCats()
  if(error){
    // alert('No tenemos imagenes')
  }
  printGeneralCats(dataMichis)


  const $buttonsFav = document.querySelectorAll('.buttonFavorite')
  loadButtonsFAV($buttonsFav)
}


function loadButtonsFAV(buttons){
  buttons.forEach(button => {
    button.addEventListener('click', handleClicFavorite)
  });
}

export async function showFavoriteCats(){
  const michisFavoritos = await getFavoriteCats()
  const $msg = document.querySelector('#msg')
  $msg.hidden = false


  if(michisFavoritos.length > 0){
    $msg.hidden = true
    printFavoriteCats(michisFavoritos)
    const $buttonsRemove = document.querySelectorAll('.buttonRemove')
    $buttonsRemove.forEach(button => {
      button.addEventListener('click', handleClicRemove)
    })
  }

}


const $form = document.querySelector('#formUpload')
// console.log($form)

$form.addEventListener('submit', handleSubmit)


function handleSubmit(e){

  e.preventDefault()
  const $formData = new FormData($form)


  uploadMichi($formData)
}





showCats()
showFavoriteCats()