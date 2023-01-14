function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //  html.classList.add("light")

  // pegar a tag img

  // substituir a imagem
  // se tiver light mode

  if (body.classList.contains("light")) {
    img.setAttribute("alt", "./assets/lightAvatar.png")
  } else {
    Text.setAttribute("alt", "./assets/lightAvatar.png")
  }
}
