import { createDOM, randomNumber } from "../utils/utils.js";
import { sizesMasonry} from "./constants.js"


// console.log(sizesMasonry[0])


function createTemplateGeneralCats({url, id}){

  return `
  <article class="${sizesMasonry[randomNumber(0,2)]}">
    <img class="imgMasonry" src="${url}" alt="" >
    <button data-img-id="${id}" class="buttonImg buttonFavorite" aria-label="Marcar como favorito" title="Marcar como favorito">
      <i class="icon-heart" aria-hidden="true"></i>
    </button>
  </article>
  `
}

export function printGeneralCats(cats){
  const arrayData = []
  const $container = document.querySelector('#general')
  cats.forEach(michi => {
    const data = {
      url: michi.url,
      id: michi.id,
    }


    const element = createDOM(createTemplateGeneralCats(data))
    arrayData.push(element)

  });

  $container.append(...arrayData)

}


function createTemplateFavoriteCats({url, id}){
  return `
  <article class="${sizesMasonry[randomNumber(0, 2)]}">
    <img class="imgMasonry" src="${url}" alt="" >
    <button data-img-id="${id}" class="buttonImg buttonRemove" aria-label="Quitar como favorito" title="Quitar como favorito">
      <i class="icon-plus" aria-hidden="true"></i>
    </button>
  </article>
  `
}


export function printFavoriteCats(cats){

  // $container.innerHTML = ''
  const arrayData = []
  const $container = document.querySelector('#favoritos')
  cats.forEach(michi => {

    const data = {
      url: michi.image.url,
      id: michi.id,
    }

    const element = createDOM(createTemplateFavoriteCats(data))
    arrayData.push(element)

  });

  $container.append(...arrayData)
}