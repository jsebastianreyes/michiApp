export function createDOM(string){
  const parser = new DOMParser()
  const HTML = parser.parseFromString(string, "text/html")
  return HTML.body.firstChild
}

export function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}