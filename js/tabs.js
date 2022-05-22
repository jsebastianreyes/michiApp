const $linkTabs = document.querySelectorAll('.link')

$linkTabs.forEach(tab => {
    tab.addEventListener('click', handlerClicTab)
})

function handlerClicTab(e){
  e.preventDefault()

  const id = this.id

  const tabActive = document.querySelector(".link[aria-selected='true']")
  const tabSelected = this
  // console.log(tabSelected)

  tabActive.ariaSelected = false
  tabSelected.ariaSelected = true


  const panelActive = document.querySelector('.tabPanel:not([hidden])')
  const panelSelected = document.querySelector(`[aria-labelledby=${id}]`)

  panelActive.hidden = true
  panelSelected.hidden = false

}