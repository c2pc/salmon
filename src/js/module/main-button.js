const mainButton = document.querySelector(".button__container.button__container__mob")

const mainButtonScrolling = () => {
  if (window.screen.width > 1300){
    return;
  }

  const button = mainButton.querySelector(".button")
  const rec = mainButton.getBoundingClientRect()

  if (rec.bottom > (window.screen.height - 20)){
    button.classList.add("button__main__fixed")
  }else{
    button.classList.remove("button__main__fixed")
  }
}

mainButtonScrolling()
window.addEventListener("scroll", mainButtonScrolling)

